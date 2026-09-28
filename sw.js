/* Tobis Kochbuch — Service Worker
   Offline: Seiten „netzwerk-zuerst“, aber nach 3 s Warten (schlechter Empfang im Supermarkt) aus dem Cache.
   CSS/JS/Bilder „Cache zuerst“, im Hintergrund aktualisieren. /api/ nie cachen. */
const VERSION = 'kochbuch-v8';
const ASSET_CACHE = `${VERSION}-assets`;
const IMAGE_CACHE = `${VERSION}-images`;
const PAGE_CACHE = `${VERSION}-pages`;
const MAX_IMAGES = 150;
const PAGE_TIMEOUT = 3000;

// Grundausstattung für unterwegs: wichtigste Seiten und Skripte
const PRECACHE_PAGES = ['/', '/rezeptindex/', '/shopping/', '/wochenplan/', '/was-koche-ich/', '/kuehltruhe/', '/kategorien/'];
const PRECACHE_ASSETS = [
  '/assets/styles.css', '/assets/utils.js', '/assets/account.js', '/assets/shopping.js', '/assets/plan.js',
  '/assets/recipe.js', '/assets/cook-timer.js', '/assets/home-reco.js', '/assets/cards.js', '/assets/what-to-cook.js', '/assets/freezer.js',
  '/assets/logo.svg?v=2', '/assets/fonts/inter.woff2', '/assets/fonts/fraunces.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const assets = await caches.open(ASSET_CACHE);
    const pages = await caches.open(PAGE_CACHE);
    // Einzeln laden: fehlt eine Datei, soll nicht die ganze Installation scheitern
    await Promise.all([
      ...PRECACHE_ASSETS.map(u => assets.add(u).catch(() => {})),
      ...PRECACHE_PAGES.map(u => pages.add(u).catch(() => {}))
    ]);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => !k.startsWith(VERSION)).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()).then(cacheAllRecipes)
  );
});

// Alle Rezeptseiten (ohne Bilder) für unterwegs speichern – nacheinander, damit es nicht bremst
async function cacheAllRecipes(){
  try{
    const res = await fetch('/offline.json', { cache: 'no-store' });
    if (!res.ok) return;
    const { pages } = await res.json();
    const c = await caches.open(PAGE_CACHE);
    for (const u of pages) {
      if (await c.match(u)) continue;
      try { const r = await fetch(u); if (r.ok) await c.put(u, r); } catch { return; }
    }
  }catch{}
}

function putIfOk(cacheName, req, res){
  if (res && res.ok && res.type === 'basic') {
    const clone = res.clone();
    caches.open(cacheName).then(c => c.put(req, clone)).then(() => cacheName === IMAGE_CACHE && trimImages());
  }
  return res;
}

async function trimImages(){
  const c = await caches.open(IMAGE_CACHE);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - MAX_IMAGES; i++) await c.delete(keys[i]);
}

// Gleiche Datei mit anderem ?v= (nach einem Update) gilt offline als Treffer
async function cached(req){
  return (await caches.match(req)) || (await caches.match(req, { ignoreSearch: true }));
}

function timeout(ms){ return new Promise(r => setTimeout(() => r(null), ms)); }

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.startsWith('/api/')) return;   // Anmeldung, Sync, Upload nie cachen

  // Bilder, CSS, JS, Schriften: Cache zuerst, im Hintergrund aktualisieren
  if (/\.(css|js|png|jpg|jpeg|webp|avif|svg|ico|woff2?)$/.test(url.pathname)) {
    const cacheName = /\.(png|jpe?g|webp|avif)$/.test(url.pathname) ? IMAGE_CACHE : ASSET_CACHE;
    e.respondWith((async () => {
      const exact = await caches.match(req);
      const net = fetch(req).then(res => putIfOk(cacheName, req, res)).catch(() => null);
      if (exact) { e.waitUntil(net); return exact; }
      return (await net) || (await cached(req)) || Response.error();
    })());
    return;
  }

  // Seiten: Netz zuerst; bei Funkloch oder mehr als 3 s Wartezeit die gespeicherte Fassung
  e.respondWith((async () => {
    const net = fetch(req).then(res => putIfOk(PAGE_CACHE, req, res)).catch(() => null);
    const fast = await Promise.race([net, timeout(PAGE_TIMEOUT)]);
    if (fast) return fast;
    const hit = await cached(req);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || (await caches.match('/')) || Response.error();
  })());
});

// ---------- Mitteilungen ----------
self.addEventListener('push', (e) => {
  let m = {};
  try { m = e.data ? e.data.json() : {}; } catch { m = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(m.title || 'Tobis Kochbuch', {
    body: m.body || '',
    icon: '/assets/icon-512-v2.png',
    badge: '/assets/icon-512-v2.png',
    tag: m.tag || undefined,
    data: { url: m.url || '/' }
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || '/', self.location.origin).href;
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const w of wins) {
      if ('focus' in w) { await w.focus(); if ('navigate' in w) await w.navigate(url); return; }
    }
    await self.clients.openWindow(url);
  })());
});
