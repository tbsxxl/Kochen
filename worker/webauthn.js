// Schlanke WebAuthn-/Passkey-Prüfung für Cloudflare Workers (nur WebCrypto, keine Abhängigkeiten).
// Unterstützt ES256 (Apple, Google, Windows Hello) und RS256. Attestierung wird nicht geprüft
// ("none"), weil nur der Besitzer selbst Passkeys anlegt – geprüft werden Challenge, Herkunft,
// RP-ID und die Signatur.

export const b64url = {
  encode(buf){
    const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    let s = "";
    for(let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  },
  decode(str){
    const s = String(str).replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(s + "===".slice((s.length + 3) % 4));
    const out = new Uint8Array(bin.length);
    for(let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
};

export function randomBytes(n){
  const a = new Uint8Array(n);
  crypto.getRandomValues(a);
  return a;
}

async function sha256(data){
  return new Uint8Array(await crypto.subtle.digest("SHA-256", data));
}

function equalBytes(a, b){
  if(a.length !== b.length) return false;
  let d = 0;
  for(let i = 0; i < a.length; i++) d |= a[i] ^ b[i];
  return d === 0;
}

// ---------- Minimaler CBOR-Decoder (reicht für attestationObject und COSE-Schlüssel) ----------
function decodeCbor(bytes){
  let pos = 0;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  function readLen(info){
    if(info < 24) return info;
    if(info === 24) return view.getUint8(pos++);
    if(info === 25){ const v = view.getUint16(pos); pos += 2; return v; }
    if(info === 26){ const v = view.getUint32(pos); pos += 4; return v; }
    if(info === 27){ const hi = view.getUint32(pos), lo = view.getUint32(pos + 4); pos += 8; return hi * 2 ** 32 + lo; }
    throw new Error("CBOR: unbekannte Länge");
  }
  function item(){
    if(pos >= bytes.length) throw new Error("CBOR: Ende erreicht");
    const first = bytes[pos++];
    const major = first >> 5, info = first & 31;
    switch(major){
      case 0: return readLen(info);
      case 1: return -1 - readLen(info);
      case 2: { const n = readLen(info); const v = bytes.slice(pos, pos + n); pos += n; return v; }
      case 3: { const n = readLen(info); const v = new TextDecoder().decode(bytes.slice(pos, pos + n)); pos += n; return v; }
      case 4: { const n = readLen(info); const a = []; for(let i = 0; i < n; i++) a.push(item()); return a; }
      case 5: { const n = readLen(info); const m = new Map(); for(let i = 0; i < n; i++){ const k = item(); m.set(k, item()); } return m; }
      case 6: readLen(info); return item();
      case 7:
        if(info === 20) return false;
        if(info === 21) return true;
        if(info === 22) return null;
        throw new Error("CBOR: nicht unterstützter Wert");
    }
    throw new Error("CBOR: ungültig");
  }
  const value = item();
  return { value, length: pos };
}

// ---------- authenticatorData ----------
function parseAuthData(ad){
  if(ad.length < 37) throw new Error("authData zu kurz");
  const rpIdHash = ad.slice(0, 32);
  const flags = ad[32];
  const counter = new DataView(ad.buffer, ad.byteOffset + 33, 4).getUint32(0);
  const out = { rpIdHash, flags, counter, up: !!(flags & 1), uv: !!(flags & 4) };
  if(flags & 64){ // Attested credential data
    let p = 37 + 16; // AAGUID überspringen
    const len = (ad[p] << 8) | ad[p + 1]; p += 2;
    out.credentialId = ad.slice(p, p + len); p += len;
    const { value, length } = decodeCbor(ad.slice(p));
    out.coseKey = value;
    out.coseKeyBytes = ad.slice(p, p + length);
  }
  return out;
}

// COSE-Schlüssel → JWK (für die Speicherung und den Import in WebCrypto)
function coseToJwk(cose){
  const kty = cose.get(1), alg = cose.get(3);
  if(kty === 2 && alg === -7){
    return { kty: "EC", crv: "P-256", x: b64url.encode(cose.get(-2)), y: b64url.encode(cose.get(-3)), alg: "ES256" };
  }
  if(kty === 3 && alg === -257){
    return { kty: "RSA", n: b64url.encode(cose.get(-1)), e: b64url.encode(cose.get(-2)), alg: "RS256" };
  }
  throw new Error("Schlüsseltyp wird nicht unterstützt");
}

// ECDSA-Signatur: DER → r||s (WebCrypto erwartet das Rohformat)
function derToRaw(der){
  let p = 2;
  if(der[0] !== 0x30) throw new Error("Signatur: kein DER");
  if(der[1] & 0x80) p = 2 + (der[1] & 0x7f);
  function int(){
    if(der[p++] !== 0x02) throw new Error("Signatur: DER-Integer erwartet");
    const len = der[p++];
    let v = der.slice(p, p + len); p += len;
    while(v.length > 32 && v[0] === 0) v = v.slice(1);
    const out = new Uint8Array(32); out.set(v, 32 - v.length);
    return out;
  }
  const r = int(), s = int();
  const raw = new Uint8Array(64); raw.set(r, 0); raw.set(s, 32);
  return raw;
}

function checkClientData(clientDataJSON, { type, challenge, origins }){
  const cd = JSON.parse(new TextDecoder().decode(clientDataJSON));
  if(cd.type !== type) throw new Error("Falscher Vorgang");
  if(cd.challenge !== challenge) throw new Error("Challenge passt nicht");
  if(!origins.includes(cd.origin)) throw new Error("Falsche Herkunft: " + cd.origin);
  return cd;
}

// Registrierung prüfen → gespeicherter Passkey { id, jwk, counter }
export async function verifyRegistration({ response, challenge, origins, rpId }){
  const clientDataJSON = b64url.decode(response.clientDataJSON);
  checkClientData(clientDataJSON, { type: "webauthn.create", challenge, origins });
  const att = decodeCbor(b64url.decode(response.attestationObject)).value;
  const authData = parseAuthData(att.get("authData"));
  if(!equalBytes(authData.rpIdHash, await sha256(new TextEncoder().encode(rpId)))) throw new Error("RP-ID passt nicht");
  if(!authData.up) throw new Error("Keine Bestätigung durch den Nutzer");
  if(!authData.credentialId || !authData.coseKey) throw new Error("Kein Schlüssel in der Antwort");
  return { id: b64url.encode(authData.credentialId), jwk: coseToJwk(authData.coseKey), counter: authData.counter };
}

// Anmeldung prüfen → neuer Zählerstand
export async function verifyAuthentication({ response, challenge, origins, rpId, credential }){
  const clientDataJSON = b64url.decode(response.clientDataJSON);
  checkClientData(clientDataJSON, { type: "webauthn.get", challenge, origins });
  const authDataBytes = b64url.decode(response.authenticatorData);
  const authData = parseAuthData(authDataBytes);
  if(!equalBytes(authData.rpIdHash, await sha256(new TextEncoder().encode(rpId)))) throw new Error("RP-ID passt nicht");
  if(!authData.up) throw new Error("Keine Bestätigung durch den Nutzer");

  const signed = new Uint8Array(authDataBytes.length + 32);
  signed.set(authDataBytes, 0);
  signed.set(await sha256(clientDataJSON), authDataBytes.length);
  const sig = b64url.decode(response.signature);
  const jwk = credential.jwk;
  let ok;
  if(jwk.kty === "EC"){
    const key = await crypto.subtle.importKey("jwk", { kty: "EC", crv: "P-256", x: jwk.x, y: jwk.y }, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
    ok = await crypto.subtle.verify({ name: "ECDSA", hash: "SHA-256" }, key, derToRaw(sig), signed);
  }else{
    const key = await crypto.subtle.importKey("jwk", { kty: "RSA", n: jwk.n, e: jwk.e, alg: "RS256" }, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
    ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, sig, signed);
  }
  if(!ok) throw new Error("Signatur ungültig");
  // Zähler: Passkeys aus der iCloud senden 0; nur prüfen, wenn beide Werte gesetzt sind
  if(authData.counter && credential.counter && authData.counter <= credential.counter) throw new Error("Zählerstand ungültig");
  return { counter: authData.counter };
}
