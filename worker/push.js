// Web-Push ohne Abhängigkeiten: VAPID (RFC 8292) und Verschlüsselung aes128gcm (RFC 8291), nur WebCrypto.
// Die VAPID-Schlüssel erzeugt der Worker beim ersten Gebrauch selbst und legt sie im KV ab.
import { b64url, randomBytes } from "./webauthn.js";

const te = new TextEncoder();
function concat(...parts){
  const len = parts.reduce((n, p) => n + p.length, 0);
  const out = new Uint8Array(len);
  let o = 0;
  for(const p of parts){ out.set(p, o); o += p.length; }
  return out;
}
async function hkdf(salt, ikm, info, bytes){
  const key = await crypto.subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt, info }, key, bytes * 8));
}

// Nachricht für ein Abo verschlüsseln → Request-Body
export async function encryptPayload(subscription, payload){
  const uaPublic = b64url.decode(subscription.keys.p256dh);
  const authSecret = b64url.decode(subscription.keys.auth);
  const local = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const asPublic = new Uint8Array(await crypto.subtle.exportKey("raw", local.publicKey));
  const uaKey = await crypto.subtle.importKey("raw", uaPublic, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const ecdh = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, local.privateKey, 256));

  const ikm = await hkdf(authSecret, ecdh, concat(te.encode("WebPush: info\0"), uaPublic, asPublic), 32);
  const salt = randomBytes(16);
  const cek = await hkdf(salt, ikm, te.encode("Content-Encoding: aes128gcm\0"), 16);
  const nonce = await hkdf(salt, ikm, te.encode("Content-Encoding: nonce\0"), 12);

  const plain = concat(te.encode(payload), new Uint8Array([2]));   // 2 = letzter Datensatz
  const key = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  const cipher = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, key, plain));

  const header = new Uint8Array(16 + 4 + 1 + asPublic.length);
  header.set(salt, 0);
  new DataView(header.buffer).setUint32(16, 4096);
  header[20] = asPublic.length;
  header.set(asPublic, 21);
  return concat(header, cipher);
}

// VAPID-Schlüssel (einmalig erzeugt, im KV gespeichert)
export async function vapidKeys(env){
  let stored = await env.KV.get("push:vapid", "json");
  if(!stored){
    const kp = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
    stored = {
      privateJwk: await crypto.subtle.exportKey("jwk", kp.privateKey),
      publicKey: b64url.encode(await crypto.subtle.exportKey("raw", kp.publicKey))
    };
    await env.KV.put("push:vapid", JSON.stringify(stored));
  }
  return stored;
}

export async function vapidHeader(env, endpoint, subject){
  const { privateJwk, publicKey } = await vapidKeys(env);
  const key = await crypto.subtle.importKey("jwk", privateJwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const enc = (o) => b64url.encode(te.encode(JSON.stringify(o)));
  const unsigned = `${enc({ typ: "JWT", alg: "ES256" })}.${enc({ aud: new URL(endpoint).origin, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: subject })}`;
  const sig = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, te.encode(unsigned));
  return `vapid t=${unsigned}.${b64url.encode(sig)}, k=${publicKey}`;
}

// Eine Mitteilung an ein Abo schicken. Rückgabe: HTTP-Status des Push-Dienstes (404/410 = Abo ungültig)
export async function sendPush(env, subscription, message, subject){
  const body = await encryptPayload(subscription, JSON.stringify(message));
  const res = await fetch(subscription.endpoint, {
    method: "POST",
    headers: {
      "Authorization": await vapidHeader(env, subscription.endpoint, subject),
      "Content-Encoding": "aes128gcm",
      "Content-Type": "application/octet-stream",
      // Timer: nur kurz zustellbar (später nutzlos) und mit Vorrang
      "TTL": message.timer ? "900" : "86400",
      "Urgency": message.timer ? "high" : "normal"
    },
    body
  });
  return res.status;
}
