// Tobis Kochbuch – Worker für /api/*: Anmeldung per Passkey (Face ID), Sync der Browserdaten
// und Hochladen neuer Rezepte ins GitHub-Repository. Ein Besitzer (lädt hoch, lädt ein) und
// eingeladene Mitglieder (nur eigene Favoriten, Listen usw.). Alle anderen Pfade liefert Cloudflare
// direkt als statische Dateien aus (siehe run_worker_first in wrangler.jsonc).
//
// Einstellungen (Cloudflare → Worker „kochbuch“ → Settings → Variables and Secrets):
//   SETUP_CODE    Secret: Code für die allererste Einrichtung (Besitzer-Profil)
//   GITHUB_TOKEN  Secret: Fine-grained Token, nur dieses Repo, „Contents: Read and write“
//   GITHUB_REPO / GITHUB_BRANCH stehen als vars in wrangler.jsonc.
// Speicher: KV-Namespace mit Binding KV (wird beim Deploy automatisch angelegt).
// Timer-Mitteilungen: Durable Object TimerAlarms (Binding TIMERS), eins pro Profil, weckt sich per Alarm.

import { b64url, randomBytes, verifyRegistration, verifyAuthentication } from "./webauthn.js";
import { GitHub } from "./github.js";
import { sendPush, vapidKeys } from "./push.js";

const SESSION_COOKIE = "kb_session";
const CHALLENGE_COOKIE = "kb_chal";
const SESSION_DAYS = 180;
const SYNC_KEYS = ["kochbuch.stats", "kochbuch.freezer", "kochbuch.shopping", "kochbuch.plan", "kochbuch.notes", "kochbuch.shopsections"];

// Hintergrundarbeit (z. B. Mitteilungen) pro Anfrage: request → ctx
const BG = new WeakMap();

export default {
  async fetch(request, env, ctx){
    if(ctx) BG.set(request, ctx);
    const url = new URL(request.url);
    if(!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    try{
      if(!env.KV) return json({ error: "Speicher (KV) ist nicht eingerichtet." }, 503);
      if(request.method !== "GET" && request.method !== "HEAD"){
        const origin = request.headers.get("Origin");
        if(origin !== url.origin) return json({ error: "Ungültige Herkunft" }, 403);
      }
      await migrate(env);
      return await route(request, env, url);
    }catch(err){
      return json({ error: String(err && err.message || err) }, err && err.status || 500);
    }
  }
};

async function route(request, env, url){
  const p = url.pathname, m = request.method;
  if(p === "/api/me" && m === "GET") return me(request, env, url);
  if(p === "/api/invites" && m === "POST") return inviteCreate(request, env, url);
  if(p === "/api/members/remove" && m === "POST") return memberRemove(request, env);
  if(p === "/api/household/create" && m === "POST") return householdCreate(request, env);
  if(p === "/api/household/invite" && m === "POST") return householdInvite(request, env, url);
  if(p === "/api/household/join" && m === "POST") return householdJoin(request, env);
  if(p === "/api/household/leave" && m === "POST") return householdLeave(request, env);
  if(p === "/api/import" && m === "POST") return recipeImport(request, env);
  if(p === "/api/export" && m === "GET") return exportAll(request, env);
  if(p === "/api/push/key" && m === "GET") return json({ key: (await vapidKeys(env)).publicKey });
  if(p === "/api/push/subscribe" && m === "POST") return pushSubscribe(request, env);
  if(p === "/api/push/unsubscribe" && m === "POST") return pushUnsubscribe(request, env);
  if(p === "/api/push/test" && m === "POST") return pushTest(request, env, url);
  if(p === "/api/timers" && m === "POST") return timerSet(request, env, url);
  if(p === "/api/timers/cancel" && m === "POST") return timerCancel(request, env);
  if(p === "/api/suggestions" && m === "POST") return suggestionCreate(request, env);
  if(p === "/api/suggestions" && m === "GET") return suggestionList(request, env);
  const sm = p.match(/^\/api\/suggestions\/([A-Za-z0-9_-]{8,40})(?:\/(image|reject|withdraw))?$/);
  if(sm && m === "GET") return suggestionGet(request, env, sm[1], sm[2]);
  if(sm && sm[2] === "reject" && m === "POST") return suggestionReject(request, env, sm[1]);
  if(sm && sm[2] === "withdraw" && m === "POST") return suggestionWithdraw(request, env, sm[1]);
  if(p === "/api/auth/register/options" && m === "POST") return registerOptions(request, env, url);
  if(p === "/api/auth/register/verify" && m === "POST") return registerVerify(request, env, url);
  if(p === "/api/auth/login/options" && m === "POST") return loginOptions(request, env, url);
  if(p === "/api/auth/login/verify" && m === "POST") return loginVerify(request, env, url);
  if(p === "/api/auth/logout" && m === "POST") return logout(request, env);
  if(p === "/api/sync" && m === "GET") return syncGet(request, env);
  if(p === "/api/sync" && m === "PUT") return syncPut(request, env);
  if(p === "/api/recipes" && m === "POST") return recipeUpload(request, env, url);
  if(p === "/api/recipe" && m === "GET") return recipeGet(request, env, url);
  if(p === "/api/recipe" && m === "PUT") return recipeUpdate(request, env);
  if(p === "/api/recipe/delete" && m === "POST") return recipeDelete(request, env);
  return json({ error: "Nicht gefunden" }, 404);
}

// ---------- Hilfen ----------
function json(data, status = 200, headers = {}){
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", ...headers }
  });
}
function fail(msg, status = 400){ const e = new Error(msg); e.status = status; throw e; }

function cookies(request){
  const out = {};
  (request.headers.get("Cookie") || "").split(/;\s*/).forEach(c=>{
    const i = c.indexOf("=");
    if(i > 0) out[c.slice(0, i)] = c.slice(i + 1);
  });
  return out;
}
function cookie(name, value, maxAge, path = "/"){
  return `${name}=${value}; Path=${path}; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Strict`;
}

async function hmacKey(env){
  let secret = env.SESSION_SECRET;
  if(!secret){
    secret = await env.KV.get("secret:session");
    if(!secret){
      secret = b64url.encode(randomBytes(32));
      await env.KV.put("secret:session", secret);
    }
  }
  return crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}
async function sign(env, payload){
  const body = b64url.encode(new TextEncoder().encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(env), new TextEncoder().encode(body));
  return `${body}.${b64url.encode(sig)}`;
}
async function unsign(env, token){
  if(!token || token.indexOf(".") < 0) return null;
  const [body, sig] = token.split(".");
  let ok = false;
  try{ ok = await crypto.subtle.verify("HMAC", await hmacKey(env), b64url.decode(sig), new TextEncoder().encode(body)); }catch{}
  if(!ok) return null;
  try{
    const data = JSON.parse(new TextDecoder().decode(b64url.decode(body)));
    if(!data.exp || data.exp < Date.now()) return null;
    return data;
  }catch{ return null; }
}

// ---------- Nutzer ----------
// KV-Schlüssel:
//   auth:owner            uid des Besitzers (darf Rezepte hochladen und einladen)
//   auth:users            [uid, …]
//   user:<uid>            { uid, name, role: "owner"|"member", created }
//   creds:<uid>           [{ id, jwk, counter, name, created, lastUsed }]
//   credmap:<credId>      uid
//   epoch:<uid>           Zähler für „überall abmelden“
//   sync:<uid>            { key: { v, t } }
//   invite:<token>        { created, expires } (läuft nach 7 Tagen ab, nur einmal nutzbar)

// Alte Einzelprofil-Daten (erste Version) in das neue Format übernehmen
async function migrate(env){
  if(await env.KV.get("auth:migrated")) return;
  const oldCreds = await env.KV.get("auth:credentials", "json");
  if(oldCreds && oldCreds.length && !(await env.KV.get("auth:owner"))){
    const profile = (await env.KV.get("auth:profile", "json")) || {};
    const uid = profile.userId || b64url.encode(randomBytes(16));
    await env.KV.put(`user:${uid}`, JSON.stringify({ uid, name: profile.name || "Ich", role: "owner", created: oldCreds[0].created || new Date().toISOString() }));
    await env.KV.put(`creds:${uid}`, JSON.stringify(oldCreds));
    for(const c of oldCreds) await env.KV.put(`credmap:${c.id}`, uid);
    const sync = await env.KV.get("sync:data");
    if(sync) await env.KV.put(`sync:${uid}`, sync);
    const epoch = await env.KV.get("auth:epoch");
    if(epoch) await env.KV.put(`epoch:${uid}`, epoch);
    await env.KV.put("auth:users", JSON.stringify([uid]));
    await env.KV.put("auth:owner", uid);
  }
  await env.KV.put("auth:migrated", "1");
}

const getUser = async (env, uid)=> uid ? await env.KV.get(`user:${uid}`, "json") : null;
const getCreds = async (env, uid)=> (await env.KV.get(`creds:${uid}`, "json")) || [];
const getUsers = async (env)=> (await env.KV.get("auth:users", "json")) || [];
const epochOf = async (env, uid)=> Number(await env.KV.get(`epoch:${uid}`)) || 0;

async function session(request, env){
  const data = await unsign(env, cookies(request)[SESSION_COOKIE]);
  if(!data || data.kind !== "session") return null;
  const uid = data.uid || await env.KV.get("auth:owner");   // Sitzungen aus der ersten Version
  const user = await getUser(env, uid);
  if(!user) return null;
  if((data.epoch || 0) !== await epochOf(env, uid)) return null;
  return { uid, user };
}
async function requireSession(request, env){
  const s = await session(request, env);
  if(!s) fail("Bitte zuerst anmelden.", 401);
  return s;
}
async function requireOwner(request, env){
  const s = await requireSession(request, env);
  if(s.user.role !== "owner") fail("Das darf nur der Besitzer des Kochbuchs.", 403);
  return s;
}

function safeEqual(a, b){
  a = String(a || ""); b = String(b || "");
  let d = a.length ^ b.length;
  for(let i = 0; i < Math.max(a.length, b.length); i++) d |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return d === 0;
}

async function readJson(request, limit = 1_000_000){
  const text = await request.text();
  if(text.length > limit) fail("Anfrage zu groß", 413);
  try{ return JSON.parse(text || "{}"); }catch{ fail("Ungültiges JSON"); }
}

// ---------- Profil ----------
async function me(request, env, url){
  const s = await session(request, env);
  const out = { loggedIn: !!s, setupDone: !!(await env.KV.get("auth:owner")) };
  const invite = url.searchParams.get("einladung");
  if(invite) out.inviteValid = !!(await validInvite(env, invite));
  if(!s) return json(out);
  const creds = await getCreds(env, s.uid);
  Object.assign(out, {
    uid: s.uid,
    name: s.user.name,
    role: s.user.role,
    devices: creds.map(c => ({ name: c.name, created: c.created, lastUsed: c.lastUsed })),
    canUpload: s.user.role === "owner" && !!env.GITHUB_TOKEN
  });
  out.household = await householdInfo(env, await household(env, s.user));
  const hhToken = url.searchParams.get("haushalt");
  if(hhToken && /^[A-Za-z0-9_-]{16,64}$/.test(hhToken)){
    const inv = await env.KV.get(`hhinvite:${hhToken}`, "json");
    const hh = inv && inv.expires > Date.now() ? await env.KV.get(`hh:${inv.hh}`, "json") : null;
    out.householdInvite = hh ? await householdInfo(env, hh) : false;
  }
  if(s.user.role === "owner"){
    out.pendingSuggestions = await pendingCount(env);
    const users = await Promise.all((await getUsers(env)).map(uid => getUser(env, uid)));
    out.members = users.filter(u => u && u.role !== "owner").map(u => ({ uid: u.uid, name: u.name, created: u.created }));
  }
  return json(out);
}

// ---------- Einladungen ----------
async function validInvite(env, token){
  if(!/^[A-Za-z0-9_-]{16,64}$/.test(String(token || ""))) return null;
  const inv = await env.KV.get(`invite:${token}`, "json");
  if(!inv || inv.expires < Date.now()) return null;
  return inv;
}
async function inviteCreate(request, env, url){
  await requireOwner(request, env);
  const token = b64url.encode(randomBytes(18));
  const expires = Date.now() + 7 * 86400000;
  await env.KV.put(`invite:${token}`, JSON.stringify({ created: Date.now(), expires }), { expirationTtl: 7 * 86400 });
  return json({ url: `${url.origin}/konto/?einladung=${token}`, expires });
}
async function memberRemove(request, env){
  const s = await requireOwner(request, env);
  const { uid } = await readJson(request);
  if(!uid || uid === s.uid) fail("Dieses Profil kann nicht entfernt werden.");
  const user = await getUser(env, uid);
  if(!user) fail("Profil nicht gefunden.", 404);
  const hh = await household(env, user);
  if(hh) await leaveHousehold(env, user, hh);
  for(const c of await getCreds(env, uid)) await env.KV.delete(`credmap:${c.id}`);
  await Promise.all([`user:${uid}`, `creds:${uid}`, `sync:${uid}`, `push:${uid}`].map(k => env.KV.delete(k)));
  await env.KV.put(`epoch:${uid}`, String((await epochOf(env, uid)) + 1));
  await env.KV.put("auth:users", JSON.stringify((await getUsers(env)).filter(x => x !== uid)));
  return json({ ok: true });
}

// ---------- Passkey registrieren ----------
async function challengeResponse(env, kind, extra, options){
  const challenge = b64url.encode(randomBytes(32));
  const token = await sign(env, { kind, c: challenge, exp: Date.now() + 5 * 60 * 1000, ...extra });
  return json({ ...options, challenge }, 200, { "Set-Cookie": cookie(CHALLENGE_COOKIE, token, 300, "/api/auth") });
}
async function readChallenge(request, env, kind){
  const data = await unsign(env, cookies(request)[CHALLENGE_COOKIE]);
  if(!data || data.kind !== kind) fail("Die Anfrage ist abgelaufen. Bitte noch einmal versuchen.");
  return data;
}

// Drei Wege: erste Einrichtung (SETUP_CODE → Besitzer), Einladung (→ Mitglied),
// angemeldet (weiterer Passkey für das eigene Profil)
async function registerOptions(request, env, url){
  const body = await readJson(request);
  const s = await session(request, env);
  let mode, uid, name, creds = [];
  if(s){
    mode = "add"; uid = s.uid; name = s.user.name; creds = await getCreds(env, uid);
  }else if(body.invite){
    if(!(await validInvite(env, body.invite))) fail("Die Einladung ist ungültig oder abgelaufen. Bitte um einen neuen Link.", 403);
    mode = "invite"; uid = b64url.encode(randomBytes(16));
  }else{
    if(await env.KV.get("auth:owner")) fail("Es ist bereits ein Profil eingerichtet. Melde dich mit deinem Passkey an oder nutze einen Einladungslink.", 403);
    if(!env.SETUP_CODE) fail("SETUP_CODE ist in Cloudflare noch nicht hinterlegt.", 503);
    if(!safeEqual(String(body.setupCode || "").trim(), env.SETUP_CODE)) fail("Der Einrichtungscode stimmt nicht.", 403);
    mode = "setup"; uid = b64url.encode(randomBytes(16));
  }
  if(mode !== "add"){
    name = String(body.name || "").trim().slice(0, 40);
    if(!name) fail("Bitte einen Namen eingeben.");
  }
  return challengeResponse(env, "register", { mode, uid, name, invite: mode === "invite" ? body.invite : undefined }, {
    rp: { id: url.hostname, name: "Tobis Kochbuch" },
    user: { id: uid, name, displayName: name },
    pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }],
    timeout: 120000,
    attestation: "none",
    authenticatorSelection: { residentKey: "required", requireResidentKey: true, userVerification: "required" },
    excludeCredentials: creds.map(c => ({ type: "public-key", id: c.id }))
  });
}

async function registerVerify(request, env, url){
  const body = await readJson(request);
  const chal = await readChallenge(request, env, "register");
  const s = await session(request, env);
  if(chal.mode === "add" && (!s || s.uid !== chal.uid)) fail("Bitte zuerst anmelden.", 401);
  if(chal.mode === "setup" && await env.KV.get("auth:owner")) fail("Es ist bereits ein Profil eingerichtet.", 403);
  if(chal.mode === "invite" && !(await validInvite(env, chal.invite))) fail("Die Einladung wurde schon benutzt oder ist abgelaufen.", 403);

  const cred = await verifyRegistration({ response: body.response || {}, challenge: chal.c, origins: [url.origin], rpId: url.hostname });
  if(await env.KV.get(`credmap:${cred.id}`)) fail("Dieser Passkey ist schon gespeichert.");
  const now = new Date().toISOString();

  if(chal.mode !== "add"){
    if(chal.mode === "invite") await env.KV.delete(`invite:${chal.invite}`);
    const role = chal.mode === "setup" ? "owner" : "member";
    await env.KV.put(`user:${chal.uid}`, JSON.stringify({ uid: chal.uid, name: chal.name, role, created: now }));
    await env.KV.put("auth:users", JSON.stringify([...(await getUsers(env)), chal.uid]));
    if(role === "owner") await env.KV.put("auth:owner", chal.uid);
  }
  const creds = await getCreds(env, chal.uid);
  creds.push({ ...cred, name: String(body.deviceName || "Gerät").slice(0, 40), created: now, lastUsed: now });
  await env.KV.put(`creds:${chal.uid}`, JSON.stringify(creds));
  await env.KV.put(`credmap:${cred.id}`, chal.uid);
  const user = await getUser(env, chal.uid);
  return newSession(env, user);
}

// ---------- Anmelden ----------
async function loginOptions(request, env, url){
  if(!(await env.KV.get("auth:owner"))) fail("Es ist noch kein Profil eingerichtet.", 404);
  return challengeResponse(env, "login", {}, {
    rpId: url.hostname,
    timeout: 120000,
    userVerification: "required",
    allowCredentials: []
  });
}

async function loginVerify(request, env, url){
  const body = await readJson(request);
  const chal = await readChallenge(request, env, "login");
  const uid = await env.KV.get(`credmap:${String(body.id || "")}`);
  const user = await getUser(env, uid);
  if(!user) fail("Dieser Passkey ist hier nicht (mehr) bekannt.", 403);
  const creds = await getCreds(env, uid);
  const cred = creds.find(c => c.id === body.id);
  if(!cred) fail("Dieser Passkey ist hier nicht bekannt.", 403);
  const { counter } = await verifyAuthentication({ response: body.response || {}, challenge: chal.c, origins: [url.origin], rpId: url.hostname, credential: cred });
  cred.counter = counter;
  cred.lastUsed = new Date().toISOString();
  await env.KV.put(`creds:${uid}`, JSON.stringify(creds));
  return newSession(env, user);
}

async function newSession(env, user){
  const token = await sign(env, { kind: "session", uid: user.uid, epoch: await epochOf(env, user.uid), exp: Date.now() + SESSION_DAYS * 86400000 });
  const headers = new Headers({ "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  headers.append("Set-Cookie", cookie(SESSION_COOKIE, token, SESSION_DAYS * 86400));
  headers.append("Set-Cookie", cookie(CHALLENGE_COOKIE, "", 0, "/api/auth"));
  return new Response(JSON.stringify({ ok: true, uid: user.uid, name: user.name, role: user.role }), { headers });
}

async function logout(request, env){
  const body = await readJson(request);
  if(body.everywhere){
    const s = await requireSession(request, env);
    await env.KV.put(`epoch:${s.uid}`, String((await epochOf(env, s.uid)) + 1));
  }
  return json({ ok: true }, 200, { "Set-Cookie": cookie(SESSION_COOKIE, "", 0) });
}

// ---------- Sync ----------
// sync:<uid> = { "kochbuch.stats": { v: <Wert>, ver: <Zahl>, t: <ms> }, … }
// Das Gerät schickt zu jeder Änderung die Version mit, auf der sie beruht („base“). Passt sie nicht mehr,
// war ein anderes Gerät schneller → Konflikt, das Gerät führt zusammen und sendet erneut.
// Die Einkaufsliste liegt bei Mitgliedern eines Haushalts gemeinsam unter hhsync:<hid>.
const SHOP = "kochbuch.shopping";
const verOf = (e)=> e ? (Number(e.ver) || (e.t ? 1 : 0)) : 0;

async function household(env, user){
  if(!user || !user.household) return null;
  const hh = await env.KV.get(`hh:${user.household}`, "json");
  if(!hh || !hh.members.includes(user.uid)) return null;
  return hh;
}
async function householdInfo(env, hh){
  if(!hh) return null;
  const users = await Promise.all(hh.members.map(uid => getUser(env, uid)));
  return { id: hh.id, members: users.filter(Boolean).map(u => u.name) };
}
async function loadSync(env, s){
  const data = (await env.KV.get(`sync:${s.uid}`, "json")) || {};
  const hh = await household(env, s.user);
  if(hh){
    const shared = await env.KV.get(`hhsync:${hh.id}`, "json");
    if(shared) data[SHOP] = shared; else delete data[SHOP];
  }
  for(const k of Object.keys(data)) data[k] = { v: data[k].v, ver: verOf(data[k]), t: data[k].t };
  return { data, hh };
}

async function syncGet(request, env){
  const s = await requireSession(request, env);
  const { data, hh } = await loadSync(env, s);
  return json({ data, household: await householdInfo(env, hh) });
}

async function syncPut(request, env){
  const s = await requireSession(request, env);
  const body = await readJson(request, 2_000_000);
  const { data, hh } = await loadSync(env, s);
  const conflicts = [];
  let personalChanged = false;
  for(const [k, entry] of Object.entries(body.changes || {})){
    if(!SYNC_KEYS.includes(k) || !entry || typeof entry.base !== "number") continue;
    if(verOf(data[k]) !== entry.base){ conflicts.push(k); continue; }
    const prev = data[k];
    const next = { v: entry.v, ver: verOf(data[k]) + 1, t: Date.now() };
    data[k] = next;
    if(k === SHOP && hh){
      await env.KV.put(`hhsync:${hh.id}`, JSON.stringify(next));
      await notifyShoppingAdded(request, env, s, hh, prev && prev.v, next.v);
    }
    else personalChanged = true;
  }
  if(personalChanged){
    const own = (await env.KV.get(`sync:${s.uid}`, "json")) || {};
    for(const [k, e] of Object.entries(data)) if(!(k === SHOP && hh)) own[k] = e;
    await env.KV.put(`sync:${s.uid}`, JSON.stringify(own));
  }
  return json({ data, conflicts, household: await householdInfo(env, hh) });
}

// ---------- Rezept per Link importieren (nur Besitzer) ----------
// Viele Rezeptseiten (HelloFresh, Chefkoch, Blogs mit WordPress-Rezeptplugins …) beschreiben ihr Rezept
// maschinenlesbar als schema.org/Recipe in JSON-LD. Das lesen wir aus und geben es fürs Formular zurück.
function findRecipe(node){
  if(!node || typeof node !== "object") return null;
  if(Array.isArray(node)){ for(const n of node){ const r = findRecipe(n); if(r) return r; } return null; }
  const t = node["@type"];
  if(t === "Recipe" || (Array.isArray(t) && t.includes("Recipe"))) return node;
  return findRecipe(node["@graph"]) || findRecipe(node.mainEntity) || null;
}
function isoMinutes(d){
  const m = String(d || "").match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?/i);
  if(!m) return 0;
  return (Number(m[1]) || 0) * 1440 + (Number(m[2]) || 0) * 60 + (Number(m[3]) || 0);
}
function fmtMinutes(min){
  if(!min) return "";
  if(min < 60) return `ca. ${min} Min`;
  const h = Math.floor(min / 60), r = min % 60;
  return `ca. ${h} Std${r ? ` ${r} Min` : ""}`;
}
function decodeEntities(s){
  return String(s || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/\s+/g, " ").trim();
}
function instructionsOf(ins){
  const steps = [];
  const walk = (x, section)=>{
    if(!x) return;
    if(typeof x === "string"){ x.split(/\n+/).map(decodeEntities).filter(Boolean).forEach(s => steps.push(s)); return; }
    if(Array.isArray(x)){ x.forEach(y => walk(y, section)); return; }
    if(x["@type"] === "HowToSection" || x.itemListElement){
      const before = steps.length;
      walk(x.itemListElement, x.name);
      if(x.name && steps.length > before) steps[before] = `**${decodeEntities(x.name)}:** ${steps[before]}`;
      return;
    }
    const text = decodeEntities(x.text || x.name || "");
    if(text) steps.push(text);
  };
  walk(ins);
  return steps.slice(0, 60);
}
function imageUrlOf(img){
  if(!img) return "";
  if(typeof img === "string") return img;
  if(Array.isArray(img)) return imageUrlOf(img[img.length - 1]) || imageUrlOf(img[0]);
  return img.url || img.contentUrl || "";
}
async function fetchLimited(target, limit, accept){
  const res = await fetch(target, { headers: { "User-Agent": "Mozilla/5.0 (Kochbuch-Import)", "Accept": accept }, redirect: "follow", cf: { cacheTtl: 0 } });
  if(!res.ok) fail(`Die Seite antwortet mit Fehler ${res.status}.`);
  const len = Number(res.headers.get("Content-Length") || 0);
  if(len > limit) fail("Die Seite ist zu groß.");
  const buf = new Uint8Array(await res.arrayBuffer());
  if(buf.length > limit) fail("Die Seite ist zu groß.");
  return { buf, type: res.headers.get("Content-Type") || "" };
}

// Keine Anfragen an lokale/interne Adressen (nur öffentliche Rezeptseiten)
function isPrivateHost(u){
  const h = u.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if(h === "localhost" || h.endsWith(".localhost") || h.endsWith(".local") || h.endsWith(".internal")) return true;
  if(/^\d+\.\d+\.\d+\.\d+$/.test(h)){
    const [a, b] = h.split(".").map(Number);
    return a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127);
  }
  if(h.includes(":")) return h === "::1" || h.startsWith("fc") || h.startsWith("fd") || h.startsWith("fe80");
  return !!u.port && u.port !== "80" && u.port !== "443";
}

async function recipeImport(request, env){
  await requireSession(request, env);
  const { url: target } = await readJson(request);
  let u;
  try{ u = new URL(String(target || "").trim()); }catch{ fail("Bitte einen gültigen Link einfügen."); }
  if(!/^https?:$/.test(u.protocol)) fail("Nur http- und https-Links.");
  if(!env.ALLOW_LOCAL_IMPORT && isPrivateHost(u)) fail("Diese Adresse ist nicht erlaubt.");
  const { buf } = await fetchLimited(u.toString(), 4_000_000, "text/html");
  const html = new TextDecoder().decode(buf);
  let recipe = null;
  for(const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)){
    try{ recipe = findRecipe(JSON.parse(m[1].trim())); }catch{}
    if(recipe) break;
  }
  if(!recipe) fail("Auf dieser Seite wurde kein Rezept gefunden. Nicht jede Seite stellt ihre Rezepte maschinenlesbar bereit.", 404);

  const yieldRaw = Array.isArray(recipe.recipeYield) ? recipe.recipeYield[0] : recipe.recipeYield;
  const servings = Number(String(yieldRaw || "").match(/\d+/)?.[0]) || 2;
  const min = isoMinutes(recipe.totalTime) || (isoMinutes(recipe.prepTime) + isoMinutes(recipe.cookTime));
  const kw = Array.isArray(recipe.keywords) ? recipe.keywords : String(recipe.keywords || "").split(",");
  const out = {
    title: decodeEntities(recipe.name).slice(0, 120),
    servings,
    time: fmtMinutes(min),
    ingredients: (Array.isArray(recipe.recipeIngredient) ? recipe.recipeIngredient : []).map(decodeEntities).filter(Boolean).slice(0, 100),
    steps: instructionsOf(recipe.recipeInstructions),
    tags: kw.map(decodeEntities).filter(Boolean).slice(0, 10),
    source: u.toString()
  };
  // Foto gleich mitliefern (der Browser darf fremde Bilder wegen CORS nicht direkt verarbeiten)
  const imgUrl = imageUrlOf(recipe.image);
  if(imgUrl){
    try{
      const { buf: ib, type } = await fetchLimited(new URL(imgUrl, u).toString(), 8_000_000, "image/*");
      if(/^image\//.test(type)){
        let s = "";
        for(let i = 0; i < ib.length; i += 0x8000) s += String.fromCharCode.apply(null, ib.subarray(i, i + 0x8000));
        out.image = { type, data: btoa(s) };
      }
    }catch{}
  }
  return json(out);
}

async function notifyShoppingAdded(request, env, s, hh, before, after){
  const key = (i) => `${String(i && i.item || "").trim().toLowerCase()}|${String(i && i.unit || "").trim().toLowerCase()}`;
  const had = new Set((Array.isArray(before) ? before : []).map(key));
  const added = (Array.isArray(after) ? after : []).filter(i => !had.has(key(i)) && !i.checked).map(i => String(i.item || "").trim()).filter(Boolean);
  if(!added.length) return;
  const throttle = `pushthrottle:${hh.id}:${s.uid}`;
  if(await env.KV.get(throttle)) return;
  await env.KV.put(throttle, "1", { expirationTtl: 600 });
  const list = added.slice(0, 4).join(", ") + (added.length > 4 ? " …" : "");
  for(const uid of hh.members){
    if(uid === s.uid) continue;
    notifyLater(request, env, uid, { title: "Einkaufsliste", body: `${s.user.name} hat ${added.length === 1 ? "etwas" : `${added.length} Sachen`} hinzugefügt: ${list}`, url: "/shopping/", tag: `shop-${hh.id}` });
  }
}

// ---------- Haushalt: gemeinsame Einkaufsliste ----------
async function householdCreate(request, env){
  const s = await requireSession(request, env);
  if(await household(env, s.user)) fail("Du bist schon in einem Haushalt.");
  const id = b64url.encode(randomBytes(12));
  await env.KV.put(`hh:${id}`, JSON.stringify({ id, members: [s.uid], created: Date.now() }));
  // Die eigene Liste wird zur gemeinsamen
  const own = (await env.KV.get(`sync:${s.uid}`, "json")) || {};
  if(own[SHOP]) await env.KV.put(`hhsync:${id}`, JSON.stringify({ v: own[SHOP].v, ver: 1, t: Date.now() }));
  await env.KV.put(`user:${s.uid}`, JSON.stringify({ ...s.user, household: id }));
  return json({ ok: true });
}
async function householdInvite(request, env, url){
  const s = await requireSession(request, env);
  const hh = await household(env, s.user);
  if(!hh) fail("Erstelle zuerst einen Haushalt.");
  const token = b64url.encode(randomBytes(18));
  await env.KV.put(`hhinvite:${token}`, JSON.stringify({ hh: hh.id, expires: Date.now() + 7 * 86400000 }), { expirationTtl: 7 * 86400 });
  return json({ url: `${url.origin}/konto/?haushalt=${token}` });
}
async function householdJoin(request, env){
  const s = await requireSession(request, env);
  const { token } = await readJson(request);
  if(!/^[A-Za-z0-9_-]{16,64}$/.test(String(token || ""))) fail("Ungültiger Link.");
  const inv = await env.KV.get(`hhinvite:${token}`, "json");
  const hh = inv && inv.expires > Date.now() ? await env.KV.get(`hh:${inv.hh}`, "json") : null;
  if(!hh) fail("Der Link ist ungültig oder abgelaufen. Bitte um einen neuen.", 403);
  const current = await household(env, s.user);
  if(current && current.id === hh.id) return json({ ok: true });
  if(current) await leaveHousehold(env, s.user, current);
  if(!hh.members.includes(s.uid)) hh.members.push(s.uid);
  await env.KV.put(`hh:${hh.id}`, JSON.stringify(hh));
  await env.KV.delete(`hhinvite:${token}`);
  await env.KV.put(`user:${s.uid}`, JSON.stringify({ ...(await getUser(env, s.uid)), household: hh.id }));
  return json({ ok: true });
}
async function leaveHousehold(env, user, hh){
  // Eine Kopie der gemeinsamen Liste wird wieder zur eigenen
  const shared = await env.KV.get(`hhsync:${hh.id}`, "json");
  const own = (await env.KV.get(`sync:${user.uid}`, "json")) || {};
  own[SHOP] = { v: shared ? shared.v : [], ver: verOf(own[SHOP]) + 1 + verOf(shared), t: Date.now() };
  await env.KV.put(`sync:${user.uid}`, JSON.stringify(own));
  hh.members = hh.members.filter(x => x !== user.uid);
  if(hh.members.length){ await env.KV.put(`hh:${hh.id}`, JSON.stringify(hh)); }
  else { await env.KV.delete(`hh:${hh.id}`); await env.KV.delete(`hhsync:${hh.id}`); }
  const fresh = await getUser(env, user.uid);
  if(fresh){ delete fresh.household; await env.KV.put(`user:${user.uid}`, JSON.stringify(fresh)); }
}
async function householdLeave(request, env){
  const s = await requireSession(request, env);
  const hh = await household(env, s.user);
  if(hh) await leaveHousehold(env, s.user, hh);
  return json({ ok: true });
}

// ---------- Rezept hochladen ----------
function slugify(s){
  return String(s).toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60).replace(/-+$/, "") || "rezept";
}
// Liquid-Tags im Text entschärfen, damit Jekyll nichts ausführt
// Texte aus Formular/Import entschärfen, bevor sie ins Repository gehen:
// - Liquid-Tags ({{ }}, {% %}) würde Jekyll ausführen
// - < und > würden als HTML ausgegeben (Titel, Zutaten, Markdown) → durch ähnlich aussehende Zeichen ersetzen
// - javascript:/data:-Links in Markdown unschädlich machen
function clean(s, max = 500){
  return String(s ?? "")
    .replace(/\{\{|\}\}|\{%|%\}/g, m => m.split("").join(" "))
    .replace(/</g, "‹").replace(/>/g, "›")
    .replace(/\b(javascript|vbscript|data)\s*:/gi, "$1 :")
    .replace(/[\u0000-\u0008\u000b-\u001f]/g, "")
    .trim().slice(0, max);
}
const q = (s) => JSON.stringify(s);

function buildMarkdown(r, imagePath, date, author){
  const lines = ["---"];
  lines.push(`title: ${q(r.title)}`);
  lines.push(`date: ${date || new Date().toISOString().slice(0, 10)}`);
  if(author) lines.push(`author: ${q(clean(author, 40))}`);
  lines.push(`category: ${q(r.category)}`);
  if(r.categories.length) lines.push(`categories: [${r.categories.map(q).join(", ")}]`);
  if(r.tags.length) lines.push(`tags: [${r.tags.map(q).join(", ")}]`);
  if(r.time) lines.push(`time: ${q(r.time)}`);
  if(imagePath) lines.push(`image: ${imagePath}`);
  lines.push(`servings: ${r.servings}`);
  lines.push("ingredients:");
  for(const i of r.ingredients){
    const qty = typeof i.qty === "number" ? String(i.qty) : q(i.qty);
    lines.push(`  - { qty: ${qty}, unit: ${q(i.unit)}, item: ${q(i.item)} }`);
  }
  // Bearbeiten: Zubereitung wird als Markdown-Text 1:1 übernommen
  if(r.markdown){ lines.push("---", "", r.markdown, ""); return lines.join("\n"); }
  lines.push("---", "", "## Schritte");
  r.steps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
  // Tipps: eigener Abschnitt; beginnt der Text schon mit einer Überschrift (z. B. „## Hinweise“), bleibt sie
  if(r.notes){ lines.push("", /^(#{2,3} |---)/.test(r.notes) ? r.notes : `## Tipps\n\n${r.notes}`); }
  lines.push("");
  return lines.join("\n");
}

function validateRecipe(b){
  const title = clean(b.title, 120);
  if(!title) fail("Bitte einen Titel angeben.");
  const category = clean(b.category, 60);
  if(!category) fail("Bitte eine Kategorie wählen.");
  const servings = Math.round(Number(b.servings));
  if(!(servings >= 1 && servings <= 100)) fail("Portionen: bitte eine Zahl zwischen 1 und 100.");
  const ingredients = (Array.isArray(b.ingredients) ? b.ingredients : []).slice(0, 100).map(i => {
    const n = typeof i.qty === "number" ? i.qty : Number(String(i.qty ?? "").replace(",", "."));
    const qty = (String(i.qty ?? "").trim() !== "" && isFinite(n)) ? Math.round(n * 1000) / 1000 : clean(i.qty, 20);
    return { qty, unit: clean(i.unit, 20), item: clean(i.item, 120) };
  }).filter(i => i.item);
  if(!ingredients.length) fail("Bitte mindestens eine Zutat angeben.");
  const steps = (Array.isArray(b.steps) ? b.steps : []).map(s => clean(s, 1000).replace(/\s*\n\s*/g, " ")).filter(Boolean).slice(0, 60);
  const markdown = clean(String(b.markdown || "").replace(/\r\n?/g, "\n"), 30000);
  if(!steps.length && !markdown) fail("Bitte mindestens einen Schritt angeben.");
  const list = (a, n, max) => (Array.isArray(a) ? a : []).map(x => clean(x, max)).filter(Boolean).slice(0, n);
  return {
    title, category, servings, ingredients, steps, markdown,
    categories: list(b.categories, 10, 60).filter(c => c !== category),
    tags: list(b.tags, 20, 40),
    time: clean(b.time, 160),
    notes: clean(b.notes, 3000)
  };
}

function b64Size(s){ return Math.floor(String(s || "").length * 3 / 4); }

function imageFiles(img, stem){
  const files = [];
  if(!img || !img.jpg) return { files, imagePath: "" };
  if(b64Size(img.jpg) > 8_000_000) fail("Das Foto ist zu groß.");
  files.push({ path: `recipes/images/${stem}.jpg`, content: img.jpg });
  if(img.webp480 && img.webp960 && b64Size(img.webp480) < 2_000_000 && b64Size(img.webp960) < 4_000_000){
    files.push({ path: `recipes/images/${stem}-480.webp`, content: img.webp480 });
    files.push({ path: `recipes/images/${stem}-960.webp`, content: img.webp960 });
  }
  return { files, imagePath: `/recipes/images/${stem}.jpg` };
}

function github(env){
  if(!env.GITHUB_TOKEN) fail("GITHUB_TOKEN ist in Cloudflare noch nicht hinterlegt.", 503);
  return new GitHub(env.GITHUB_TOKEN, env.GITHUB_REPO || "tbsxxl/Kochen", env.GITHUB_BRANCH || "main", env.GITHUB_API);
}
function checkRecipePath(path){
  path = String(path || "");
  if(!/^_recipes\/[^/\\]+\.md$/.test(path) || path.includes("..")) fail("Ungültiger Rezeptpfad.");
  return path;
}
function checkPdfPath(path){
  path = String(path || "");
  return /^assets\/pdf\/[a-z0-9-]+\.pdf$/.test(path) ? path : "";
}
// Zum Rezept gehörende Bilddateien (JPG + WebP-Varianten) aus dem Markdown ermitteln
function imagePathsOf(md){
  const m = String(md).match(/^image:\s*"?\/?(recipes\/images\/[^"\s]+)"?\s*$/m);
  if(!m || m[1].includes("..")) return [];
  const stem = m[1].replace(/\.(jpe?g|png)$/i, "");
  return [m[1], `${stem}-480.webp`, `${stem}-960.webp`];
}

// ---------- Rezept bearbeiten / löschen (nur Besitzer) ----------
async function recipeGet(request, env, url){
  await requireOwner(request, env);
  const path = checkRecipePath(url.searchParams.get("path"));
  const file = await github(env).read(path);
  if(!file) fail("Rezept nicht gefunden.", 404);
  return json({ path, sha: file.sha, content: file.text });
}

async function recipeUpdate(request, env){
  await requireOwner(request, env);
  const body = await readJson(request, 15_000_000);
  const path = checkRecipePath(body.path);
  const gh = github(env);
  const current = await gh.read(path);
  if(!current) fail("Rezept nicht gefunden.", 404);
  if(body.sha && body.sha !== current.sha) fail("Das Rezept wurde inzwischen geändert. Bitte die Seite neu laden.", 409);
  const r = validateRecipe(body);

  const files = [];
  const oldImages = imagePathsOf(current.text);
  let imagePath = oldImages.length ? "/" + oldImages[0] : "";
  if(body.removeImage) imagePath = "";
  if(body.image && body.image.jpg){
    // Neuer Dateiname, damit Browser und Service Worker nicht das alte Bild aus dem Cache zeigen
    const res = imageFiles(body.image, `${slugify(r.title)}-${Date.now().toString(36)}`);
    files.push(...res.files);
    imagePath = res.imagePath;
  }
  if(imagePath !== (oldImages.length ? "/" + oldImages[0] : "")){
    for(const p of oldImages) if(await gh.exists(p)) files.push({ path: p, delete: true });
  }
  const date = (current.text.match(/^date:\s*(\S+)/m) || [])[1];
  const author = fmString(current.text, "author");
  files.unshift({ path, content: b64FromText(buildMarkdown(r, imagePath, date, author)) });
  // Vorab erzeugtes PDF ist jetzt veraltet → entfernen (die Seite erzeugt es dann live)
  const pdf = checkPdfPath(body.pdf);
  if(pdf && await gh.exists(pdf)) files.push({ path: pdf, delete: true });
  const sha = await gh.commit(files, `Rezept bearbeitet: ${r.title}\n\nÜber die Kochbuch-Seite geändert.`);
  return json({ ok: true, commit: sha });
}

async function recipeDelete(request, env){
  await requireOwner(request, env);
  const body = await readJson(request);
  const path = checkRecipePath(body.path);
  const gh = github(env);
  const current = await gh.read(path);
  if(!current) fail("Rezept nicht gefunden.", 404);
  if(body.sha && body.sha !== current.sha) fail("Das Rezept wurde inzwischen geändert. Bitte die Seite neu laden.", 409);
  const files = [{ path, delete: true }];
  for(const p of imagePathsOf(current.text)) if(await gh.exists(p)) files.push({ path: p, delete: true });
  const pdf = checkPdfPath(body.pdf);
  if(pdf && await gh.exists(pdf)) files.push({ path: pdf, delete: true });
  const title = (current.text.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] || path;
  const sha = await gh.commit(files, `Rezept gelöscht: ${title}\n\nÜber die Kochbuch-Seite gelöscht.`);
  return json({ ok: true, commit: sha });
}

// Einfacher Text-Wert aus dem Front Matter (title/author …), auch in Anführungszeichen
function fmString(md, key){
  const m = String(md).match(new RegExp(`^${key}:\\s*(.*?)\\s*$`, "m"));
  if(!m) return "";
  try{ return m[1].startsWith('"') ? JSON.parse(m[1]) : m[1]; }catch{ return m[1].replace(/^"|"$/g, ""); }
}

async function recipeUpload(request, env){
  const s = await requireOwner(request, env);
  const body = await readJson(request, 15_000_000);
  const r = validateRecipe(body);
  const gh = github(env);
  // Freigabe eines Vorschlags: Autor ist die Person, die ihn eingereicht hat
  let sug = null;
  if(body.suggestion){
    sug = await env.KV.get(`sug:${String(body.suggestion)}`, "json");
    if(!sug || sug.status !== "pending") fail("Dieser Vorschlag ist nicht mehr offen.", 404);
  }
  const author = sug ? sug.name : s.user.name;

  let slug = slugify(r.title);
  for(let i = 2; await gh.exists(`_recipes/${slug}.md`); i++){
    if(i > 20) fail("Es gibt schon zu viele Rezepte mit diesem Namen.");
    slug = `${slugify(r.title)}-${i}`;
  }

  const { files, imagePath } = imageFiles(body.image, slug);
  const md = buildMarkdown(r, imagePath, null, author);
  files.unshift({ path: `_recipes/${slug}.md`, content: b64FromText(md) });
  const msg = sug ? `Neues Rezept: ${r.title}\n\nVorschlag von ${sug.name}, über die Kochbuch-Seite freigegeben.` : `Neues Rezept: ${r.title}\n\nÜber die Kochbuch-Seite hochgeladen.`;
  const sha = await gh.commit(files, msg);
  if(sug){
    await env.KV.put(`sug:${sug.id}`, JSON.stringify({ ...sug, image: null, status: "approved", url: `/rezepte/${slug}/`, decided: Date.now() }), { expirationTtl: 30 * 86400 });
    await changePending(env, -1);
    notifyLater(request, env, sug.uid, { title: "Dein Rezept ist im Kochbuch 🎉", body: `${r.title} – in ein paar Minuten online`, url: `/rezepte/${slug}/`, tag: `sug-${sug.id}` });
  }
  return json({ ok: true, slug, url: `/rezepte/${slug}/`, commit: sha });
}

// ---------- Mitteilungen (Web Push) ----------
// push:<uid> = [{ endpoint, keys: { p256dh, auth }, created }]
async function pushSubscribe(request, env){
  const s = await requireSession(request, env);
  const { subscription } = await readJson(request);
  const ep = String(subscription && subscription.endpoint || "");
  if(!(/^https:\/\//.test(ep) || (env.ALLOW_LOCAL_IMPORT && /^http:\/\/127\.0\.0\.1:/.test(ep))) || !subscription.keys || !subscription.keys.p256dh || !subscription.keys.auth) fail("Ungültiges Abo.");
  const list = ((await env.KV.get(`push:${s.uid}`, "json")) || []).filter(x => x.endpoint !== ep);
  list.push({ endpoint: ep, keys: { p256dh: String(subscription.keys.p256dh), auth: String(subscription.keys.auth) }, created: Date.now() });
  await env.KV.put(`push:${s.uid}`, JSON.stringify(list.slice(-10)));
  return json({ ok: true });
}
async function pushUnsubscribe(request, env){
  const s = await requireSession(request, env);
  const { endpoint } = await readJson(request);
  const list = ((await env.KV.get(`push:${s.uid}`, "json")) || []).filter(x => x.endpoint !== endpoint);
  await env.KV.put(`push:${s.uid}`, JSON.stringify(list));
  return json({ ok: true });
}
// Mitteilung an alle Geräte eines Profils; tote Abos werden entfernt
async function notifyUser(env, uid, message, subject){
  const list = (await env.KV.get(`push:${uid}`, "json")) || [];
  if(!list.length) return 0;
  const keep = [];
  let sent = 0;
  for(const sub of list){
    try{
      const status = await sendPush(env, sub, message, subject);
      if(status === 404 || status === 410) continue;
      if(status < 300) sent++;
      keep.push(sub);
    }catch{ keep.push(sub); }
  }
  if(keep.length !== list.length) await env.KV.put(`push:${uid}`, JSON.stringify(keep));
  return sent;
}
// Im Hintergrund senden, damit die eigentliche Antwort nicht wartet
function notifyLater(request, env, uid, message){
  const subject = new URL(request.url).origin;
  const job = notifyUser(env, uid, message, subject).catch(() => {});
  const ctx = BG.get(request);
  if(ctx) ctx.waitUntil(job);
}
async function pushTest(request, env, url){
  const s = await requireSession(request, env);
  const sent = await notifyUser(env, s.uid, { title: "Tobis Kochbuch", body: "Mitteilungen sind eingerichtet 👍", url: "/konto/" }, url.origin);
  if(!sent) fail("Keine Mitteilung zugestellt. Sind Mitteilungen auf diesem Gerät erlaubt?");
  return json({ ok: true, sent });
}

// ---------- Timer: Mitteilung, wenn ein Kochmodus-Timer abläuft ----------
// Das Gerät meldet gestartete Timer; bemerkt es den Ablauf selbst (Seite sichtbar), sagt es ab.
// Sonst (Bildschirm gesperrt, App im Hintergrund) schickt das Durable Object kurz nach Ablauf eine Push-Mitteilung.
const TIMER_GRACE = 4000;   // ms Vorsprung fürs Gerät, damit bei offener Seite keine doppelte Meldung kommt
// Aufruf ans Durable Object über fetch (ohne „cloudflare:workers“-Import, damit Node den Worker laden kann)
function timerCall(env, uid, action, data){
  const stub = env.TIMERS.get(env.TIMERS.idFromName(uid));
  return stub.fetch("https://timers/" + action, { method: "POST", body: JSON.stringify(data) });
}
async function timerSet(request, env, url){
  const s = await requireSession(request, env);
  if(!env.TIMERS) return json({ ok: false });
  const b = await readJson(request, 4000);
  const id = String(b.id || "");
  const end = Number(b.end);
  if(!/^[a-z0-9]{4,24}$/.test(id)) fail("Ungültiger Timer");
  if(!isFinite(end) || end < Date.now() - 60000 || end > Date.now() + 48 * 3600e3) fail("Ungültige Zeit");
  const path = String(b.url || "");
  const timer = {
    id, end,
    label: String(b.label || "Timer").slice(0, 80),
    title: String(b.title || "").slice(0, 120),
    url: /^\/(?!\/)[^\s]{0,300}$/.test(path) ? path : "/",
    origin: url.origin
  };
  await timerCall(env, s.uid, "set", { uid: s.uid, timer });
  return json({ ok: true });
}
async function timerCancel(request, env){
  const s = await requireSession(request, env);
  if(!env.TIMERS) return json({ ok: false });
  const b = await readJson(request, 1000);
  await timerCall(env, s.uid, "cancel", { id: String(b.id || "").slice(0, 24) });
  return json({ ok: true });
}
export class TimerAlarms {
  constructor(ctx, env){ this.ctx = ctx; this.env = env; }
  async fetch(request){
    const action = new URL(request.url).pathname.slice(1);
    const d = await request.json();
    if(action === "set") await this.set(d.uid, d.timer);
    else if(action === "cancel") await this.cancel(d.id);
    return new Response("ok");
  }
  async list(){ return (await this.ctx.storage.get("timers")) || []; }
  async save(list){
    await this.ctx.storage.put("timers", list);
    if(list.length) await this.ctx.storage.setAlarm(Math.min(...list.map(t => t.end)) + TIMER_GRACE);
    else await this.ctx.storage.deleteAlarm();
  }
  async set(uid, timer){
    await this.ctx.storage.put("uid", uid);
    const list = (await this.list()).filter(t => t.id !== timer.id && t.end > Date.now() - 3600e3);
    list.push(timer);
    await this.save(list.slice(-20));
  }
  async cancel(id){
    const list = await this.list();
    const rest = list.filter(t => t.id !== id);
    if(rest.length !== list.length) await this.save(rest);
  }
  async alarm(){
    const uid = await this.ctx.storage.get("uid");
    const now = Date.now();
    const list = await this.list();
    const due = list.filter(t => t.end + TIMER_GRACE <= now + 1000);
    await this.save(list.filter(t => !due.includes(t)));
    for(const t of due){
      if(!uid) break;
      await notifyUser(this.env, uid, {
        title: "Timer abgelaufen",
        body: t.title ? `${t.label} · ${t.title}` : t.label,
        url: t.url, tag: `timer-${t.id}`, timer: true
      }, t.origin).catch(() => {});
    }
  }
}

// ---------- Komplettsicherung (nur Besitzer) ----------
// Alle Profile mit ihren synchronisierten Daten, Haushalte und offene Vorschläge (ohne Fotos).
async function exportAll(request, env){
  await requireOwner(request, env);
  const users = [];
  for(const uid of await getUsers(env)){
    const u = await getUser(env, uid);
    if(!u) continue;
    users.push({ ...u, credentials: await getCreds(env, uid), sync: (await env.KV.get(`sync:${uid}`, "json")) || {} });
  }
  const households = [];
  const seen = new Set();
  for(const u of users){
    if(!u.household || seen.has(u.household)) continue;
    seen.add(u.household);
    households.push({ ...(await env.KV.get(`hh:${u.household}`, "json")), shopping: await env.KV.get(`hhsync:${u.household}`, "json") });
  }
  const suggestions = (await listSuggestions(env)).map(x => ({ ...x, image: x.image ? "(Foto nicht enthalten)" : null }));
  const day = new Date().toISOString().slice(0, 10);
  return json({ version: 1, created: new Date().toISOString(), owner: await env.KV.get("auth:owner"), users, households, suggestions }, 200,
    { "Content-Disposition": `attachment; filename="kochbuch-komplettsicherung-${day}.json"` });
}

// ---------- Vorschläge von Mitgliedern ----------
// sug:<id> = { id, uid, name, created, status: pending|approved|rejected, recipe, image, url?, reason? }
// Anzahl offener Vorschläge als gespeicherter Zähler: /api/me wird bei jedem Seitenaufruf des Besitzers
// abgefragt, eine KV-Auflistung dort würde das Gratis-Kontingent (1.000 Auflistungen/Tag) schnell aufbrauchen.
// Er wird beim Einreichen/Entscheiden hoch- bzw. runtergezählt (KV-Auflistungen sind bis zu 60 s verzögert)
// und jedes Mal richtiggestellt, wenn der Besitzer die Vorschläge-Seite öffnet.
async function pendingCount(env){
  const v = await env.KV.get("sugcount:pending");
  if(v !== null) return Math.max(0, Number(v) || 0);
  const n = (await listSuggestions(env)).filter(x => x.status === "pending").length;
  await env.KV.put("sugcount:pending", String(n));
  return n;
}
async function changePending(env, delta){
  await env.KV.put("sugcount:pending", String(Math.max(0, (await pendingCount(env)) + delta)));
}

async function listSuggestions(env){
  const out = [];
  let cursor;
  do{
    const page = await env.KV.list({ prefix: "sug:", cursor });
    for(const k of page.keys){ const v = await env.KV.get(k.name, "json"); if(v) out.push(v); }
    cursor = page.list_complete ? null : page.cursor;
  }while(cursor);
  return out.sort((a, b) => b.created - a.created);
}
const sugMeta = (x)=> ({ id: x.id, name: x.name, uid: x.uid, created: x.created, status: x.status, url: x.url, reason: x.reason, title: x.recipe.title, category: x.recipe.category, time: x.recipe.time, ingredients: x.recipe.ingredients.length, hasImage: !!(x.image && x.image.jpg) });

async function suggestionCreate(request, env){
  const s = await requireSession(request, env);
  const body = await readJson(request, 15_000_000);
  const recipe = validateRecipe(body);
  const img = body.image && body.image.jpg ? body.image : null;
  if(img && b64Size(img.jpg) > 8_000_000) fail("Das Foto ist zu groß.");
  const mine = (await listSuggestions(env)).filter(x => x.uid === s.uid && x.status === "pending");
  if(mine.length >= 20) fail("Du hast schon 20 offene Vorschläge. Warte, bis sie angeschaut wurden.");
  const id = b64url.encode(randomBytes(12));
  await env.KV.put(`sug:${id}`, JSON.stringify({ id, uid: s.uid, name: s.user.name, created: Date.now(), status: "pending", recipe, image: img }));
  await changePending(env, +1);
  const owner = await env.KV.get("auth:owner");
  if(owner && owner !== s.uid) notifyLater(request, env, owner, { title: "Neuer Rezeptvorschlag", body: `${s.user.name}: ${recipe.title}`, url: "/vorschlaege/", tag: `sug-${id}` });
  return json({ ok: true, id });
}
async function suggestionList(request, env){
  const s = await requireSession(request, env);
  const all = await listSuggestions(env);
  const list = s.user.role === "owner" ? all.filter(x => x.status === "pending") : all.filter(x => x.uid === s.uid);
  if(s.user.role === "owner") await env.KV.put("sugcount:pending", String(list.length));
  return json({ suggestions: list.map(sugMeta) });
}
async function suggestionGet(request, env, id, part){
  const s = await requireSession(request, env);
  const x = await env.KV.get(`sug:${id}`, "json");
  if(!x || (s.user.role !== "owner" && x.uid !== s.uid)) fail("Vorschlag nicht gefunden.", 404);
  if(part === "image"){
    if(!x.image || !x.image.jpg) fail("Kein Foto.", 404);
    const bin = atob(x.image.jpg);
    return new Response(Uint8Array.from(bin, c => c.charCodeAt(0)), { headers: { "Content-Type": "image/jpeg", "Cache-Control": "private, max-age=3600", "X-Content-Type-Options": "nosniff", "Content-Security-Policy": "default-src 'none'" } });
  }
  return json({ ...sugMeta(x), recipe: x.recipe, image: x.image });
}
async function suggestionReject(request, env, id){
  await requireOwner(request, env);
  const { reason } = await readJson(request);
  const x = await env.KV.get(`sug:${id}`, "json");
  if(!x || x.status !== "pending") fail("Dieser Vorschlag ist nicht mehr offen.", 404);
  await env.KV.put(`sug:${id}`, JSON.stringify({ ...x, image: null, status: "rejected", reason: clean(reason, 300), decided: Date.now() }), { expirationTtl: 30 * 86400 });
  await changePending(env, -1);
  notifyLater(request, env, x.uid, { title: "Vorschlag nicht übernommen", body: reason ? `${x.recipe.title}: ${clean(reason, 120)}` : x.recipe.title, url: "/vorschlaege/", tag: `sug-${id}` });
  return json({ ok: true });
}
async function suggestionWithdraw(request, env, id){
  const s = await requireSession(request, env);
  const x = await env.KV.get(`sug:${id}`, "json");
  if(!x || x.uid !== s.uid) fail("Vorschlag nicht gefunden.", 404);
  await env.KV.delete(`sug:${id}`);
  if(x.status === "pending") await changePending(env, -1);
  return json({ ok: true });
}

function b64FromText(text){
  const bytes = new TextEncoder().encode(text);
  let s = "";
  for(let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}
