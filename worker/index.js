// Tobis Kochbuch – Worker für /api/*: Anmeldung per Passkey (Face ID), Sync der Browserdaten
// und Hochladen neuer Rezepte ins GitHub-Repository. Alle anderen Pfade liefert Cloudflare
// direkt als statische Dateien aus (siehe run_worker_first in wrangler.jsonc).
//
// Einstellungen (Cloudflare → Worker „kochbuch“ → Settings → Variables and Secrets):
//   SETUP_CODE    Secret: Code für die allererste Einrichtung des Passkeys
//   GITHUB_TOKEN  Secret: Fine-grained Token, nur dieses Repo, „Contents: Read and write“
//   GITHUB_REPO / GITHUB_BRANCH stehen als vars in wrangler.jsonc.
// Speicher: KV-Namespace mit Binding KV (wird beim Deploy automatisch angelegt).

import { b64url, randomBytes, verifyRegistration, verifyAuthentication } from "./webauthn.js";
import { GitHub } from "./github.js";

const SESSION_COOKIE = "kb_session";
const CHALLENGE_COOKIE = "kb_chal";
const SESSION_DAYS = 180;
const SYNC_KEYS = ["kochbuch.stats", "kochbuch.freezer", "kochbuch.shopping", "kochbuch.plan"];

export default {
  async fetch(request, env){
    const url = new URL(request.url);
    if(!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    try{
      if(!env.KV) return json({ error: "Speicher (KV) ist nicht eingerichtet." }, 503);
      if(request.method !== "GET" && request.method !== "HEAD"){
        const origin = request.headers.get("Origin");
        if(origin !== url.origin) return json({ error: "Ungültige Herkunft" }, 403);
      }
      return await route(request, env, url);
    }catch(err){
      return json({ error: String(err && err.message || err) }, err && err.status || 500);
    }
  }
};

async function route(request, env, url){
  const p = url.pathname, m = request.method;
  if(p === "/api/me" && m === "GET") return me(request, env);
  if(p === "/api/auth/register/options" && m === "POST") return registerOptions(request, env, url);
  if(p === "/api/auth/register/verify" && m === "POST") return registerVerify(request, env, url);
  if(p === "/api/auth/login/options" && m === "POST") return loginOptions(request, env, url);
  if(p === "/api/auth/login/verify" && m === "POST") return loginVerify(request, env, url);
  if(p === "/api/auth/logout" && m === "POST") return logout(request, env);
  if(p === "/api/sync" && m === "GET") return syncGet(request, env);
  if(p === "/api/sync" && m === "PUT") return syncPut(request, env);
  if(p === "/api/recipes" && m === "POST") return recipeUpload(request, env, url);
  return json({ error: "Nicht gefunden" }, 404);
}

// ---------- Hilfen ----------
function json(data, status = 200, headers = {}){
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...headers }
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

async function getCredentials(env){ return (await env.KV.get("auth:credentials", "json")) || []; }
async function getProfile(env){ return (await env.KV.get("auth:profile", "json")) || { name: "" }; }
async function sessionEpoch(env){ return Number(await env.KV.get("auth:epoch")) || 0; }

async function session(request, env){
  const data = await unsign(env, cookies(request)[SESSION_COOKIE]);
  if(!data || data.kind !== "session") return null;
  if(data.epoch !== await sessionEpoch(env)) return null;
  return data;
}
async function requireSession(request, env){
  const s = await session(request, env);
  if(!s) fail("Bitte zuerst anmelden.", 401);
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
async function me(request, env){
  const s = await session(request, env);
  const creds = await getCredentials(env);
  const profile = await getProfile(env);
  return json({
    loggedIn: !!s,
    name: s ? profile.name : undefined,
    devices: s ? creds.map(c => ({ name: c.name, created: c.created, lastUsed: c.lastUsed })) : undefined,
    setupDone: creds.length > 0,
    canUpload: !!s && !!env.GITHUB_TOKEN
  });
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

async function registerOptions(request, env, url){
  const body = await readJson(request);
  const creds = await getCredentials(env);
  const s = await session(request, env);
  if(!s){
    // Ohne Anmeldung nur die allererste Einrichtung – und nur mit dem Einrichtungscode
    if(creds.length) fail("Es ist bereits ein Profil eingerichtet. Melde dich mit deinem Passkey an.", 403);
    if(!env.SETUP_CODE) fail("SETUP_CODE ist in Cloudflare noch nicht hinterlegt.", 503);
    if(!safeEqual(String(body.setupCode || "").trim(), env.SETUP_CODE)) fail("Der Einrichtungscode stimmt nicht.", 403);
  }
  const profile = await getProfile(env);
  const name = String(body.name || profile.name || "Ich").trim().slice(0, 40) || "Ich";
  let userId = profile.userId;
  if(!userId) userId = b64url.encode(randomBytes(16));
  return challengeResponse(env, "register", { name, userId }, {
    rp: { id: url.hostname, name: "Tobis Kochbuch" },
    user: { id: userId, name, displayName: name },
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
  const creds = await getCredentials(env);
  const s = await session(request, env);
  if(!s && creds.length) fail("Es ist bereits ein Profil eingerichtet.", 403);
  const cred = await verifyRegistration({ response: body.response || {}, challenge: chal.c, origins: [url.origin], rpId: url.hostname });
  if(creds.some(c => c.id === cred.id)) fail("Dieser Passkey ist schon gespeichert.");
  const now = new Date().toISOString();
  creds.push({ ...cred, name: String(body.deviceName || "Gerät").slice(0, 40), created: now, lastUsed: now });
  await env.KV.put("auth:credentials", JSON.stringify(creds));
  const profile = await getProfile(env);
  await env.KV.put("auth:profile", JSON.stringify({ ...profile, name: chal.name, userId: chal.userId }));
  return newSession(env, { ok: true, name: chal.name });
}

// ---------- Anmelden ----------
async function loginOptions(request, env, url){
  const creds = await getCredentials(env);
  if(!creds.length) fail("Es ist noch kein Profil eingerichtet.", 404);
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
  const creds = await getCredentials(env);
  const cred = creds.find(c => c.id === body.id);
  if(!cred) fail("Dieser Passkey ist hier nicht bekannt.", 403);
  const { counter } = await verifyAuthentication({ response: body.response || {}, challenge: chal.c, origins: [url.origin], rpId: url.hostname, credential: cred });
  cred.counter = counter;
  cred.lastUsed = new Date().toISOString();
  await env.KV.put("auth:credentials", JSON.stringify(creds));
  const profile = await getProfile(env);
  return newSession(env, { ok: true, name: profile.name });
}

async function newSession(env, data){
  const token = await sign(env, { kind: "session", epoch: await sessionEpoch(env), exp: Date.now() + SESSION_DAYS * 86400000 });
  const headers = new Headers({ "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  headers.append("Set-Cookie", cookie(SESSION_COOKIE, token, SESSION_DAYS * 86400));
  headers.append("Set-Cookie", cookie(CHALLENGE_COOKIE, "", 0, "/api/auth"));
  return new Response(JSON.stringify(data), { headers });
}

async function logout(request, env){
  const body = await readJson(request);
  if(body.everywhere){
    await requireSession(request, env);
    await env.KV.put("auth:epoch", String((await sessionEpoch(env)) + 1));
  }
  return json({ ok: true }, 200, { "Set-Cookie": cookie(SESSION_COOKIE, "", 0) });
}

// ---------- Sync ----------
// Pro Schlüssel gewinnt der neueste Stand: { "kochbuch.stats": { v: <Wert>, t: <ms> }, … }
async function syncGet(request, env){
  await requireSession(request, env);
  return json({ data: (await env.KV.get("sync:data", "json")) || {} });
}

async function syncPut(request, env){
  await requireSession(request, env);
  const body = await readJson(request, 2_000_000);
  const data = (await env.KV.get("sync:data", "json")) || {};
  let changed = false;
  for(const [k, entry] of Object.entries(body.changes || {})){
    if(!SYNC_KEYS.includes(k) || !entry || typeof entry.t !== "number") continue;
    if(!data[k] || entry.t > data[k].t){ data[k] = { v: entry.v, t: Math.min(entry.t, Date.now() + 60000) }; changed = true; }
  }
  if(changed) await env.KV.put("sync:data", JSON.stringify(data));
  return json({ data });
}

// ---------- Rezept hochladen ----------
function slugify(s){
  return String(s).toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60).replace(/-+$/, "") || "rezept";
}
// Liquid-Tags im Text entschärfen, damit Jekyll nichts ausführt
function clean(s, max = 500){
  return String(s ?? "").replace(/\{\{|\}\}|\{%|%\}/g, m => m.split("").join(" ")).replace(/[\u0000-\u0008\u000b-\u001f]/g, "").trim().slice(0, max);
}
const q = (s) => JSON.stringify(s);

function buildMarkdown(r, imagePath){
  const lines = ["---"];
  lines.push(`title: ${q(r.title)}`);
  lines.push(`date: ${new Date().toISOString().slice(0, 10)}`);
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
  lines.push("---", "", "## Schritte");
  r.steps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
  if(r.notes){ lines.push("", "## Tipps", "", r.notes); }
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
  if(!steps.length) fail("Bitte mindestens einen Schritt angeben.");
  const list = (a, n, max) => (Array.isArray(a) ? a : []).map(x => clean(x, max)).filter(Boolean).slice(0, n);
  return {
    title, category, servings, ingredients, steps,
    categories: list(b.categories, 10, 60).filter(c => c !== category),
    tags: list(b.tags, 20, 40),
    time: clean(b.time, 40),
    notes: clean(b.notes, 3000)
  };
}

function b64Size(s){ return Math.floor(String(s || "").length * 3 / 4); }

async function recipeUpload(request, env){
  await requireSession(request, env);
  if(!env.GITHUB_TOKEN) fail("GITHUB_TOKEN ist in Cloudflare noch nicht hinterlegt.", 503);
  const body = await readJson(request, 15_000_000);
  const r = validateRecipe(body);
  const gh = new GitHub(env.GITHUB_TOKEN, env.GITHUB_REPO || "tbsxxl/Kochen", env.GITHUB_BRANCH || "main", env.GITHUB_API);

  let slug = slugify(r.title);
  for(let i = 2; await gh.exists(`_recipes/${slug}.md`); i++){
    if(i > 20) fail("Es gibt schon zu viele Rezepte mit diesem Namen.");
    slug = `${slugify(r.title)}-${i}`;
  }

  const files = [];
  let imagePath = "";
  const img = body.image || {};
  if(img.jpg){
    if(b64Size(img.jpg) > 8_000_000) fail("Das Foto ist zu groß.");
    imagePath = `/recipes/images/${slug}.jpg`;
    files.push({ path: `recipes/images/${slug}.jpg`, content: img.jpg });
    if(img.webp480 && img.webp960 && b64Size(img.webp480) < 2_000_000 && b64Size(img.webp960) < 4_000_000){
      files.push({ path: `recipes/images/${slug}-480.webp`, content: img.webp480 });
      files.push({ path: `recipes/images/${slug}-960.webp`, content: img.webp960 });
    }
  }
  const md = buildMarkdown(r, imagePath);
  files.unshift({ path: `_recipes/${slug}.md`, content: b64FromText(md) });
  const sha = await gh.commit(files, `Neues Rezept: ${r.title}\n\nÜber die Kochbuch-Seite hochgeladen.`);
  return json({ ok: true, slug, url: `/rezepte/${slug}/`, commit: sha });
}

function b64FromText(text){
  const bytes = new TextEncoder().encode(text);
  let s = "";
  for(let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}
