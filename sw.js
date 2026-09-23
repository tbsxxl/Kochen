/* Tobis Kochbuch — Service Worker */
const VERSION = 'kochbuch-v5';
const ASSET_CACHE = `${VERSION}-assets`;
const PAGE_CACHE = `${VERSION}-pages`;

const PRECACHE = [
  '/',
  '/rezeptindex/',
  '/shopping/',
  '/assets/styles.css',
  '/assets/utils.js',
  '/assets/logo.svg?v=2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(ASSET_CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => !k.startsWith(VERSION)).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

function putIfOk(cacheName, req, res){
  if (res && res.ok) {
    const clone = res.clone();
    caches.open(cacheName).then(c => c.put(req, clone));
  }
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Assets (css/js/images): stale-while-revalidate
  if (/\.(css|js|png|jpg|jpeg|webp|avif|svg|ico|woff2?)$/.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(hit => {
        const net = fetch(req).then(res => putIfOk(ASSET_CACHE, req, res)).catch(() => hit);
        return hit || net;
      })
    );
    return;
  }

  // Pages: network-first, fall back to cache when offline
  e.respondWith(
    fetch(req)
      .then(res => putIfOk(PAGE_CACHE, req, res))
      .catch(() => caches.match(req).then(hit => hit || caches.match('/')))
  );
});
