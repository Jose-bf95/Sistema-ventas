// ═══════════════════════════════════════════════════════════
// SERVICE WORKER v3 — POS Universal Jose Becerra
// ═══════════════════════════════════════════════════════════
const CACHE = 'pos-jb-v3';
const CORE  = ['/index.html', '/'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(CORE.filter(u => u.startsWith('/'))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // No interceptar Firebase ni APIs externas
  const url = e.request.url;
  if (url.includes('firebase') || url.includes('googleapis') ||
      url.includes('gstatic') || url.includes('cdnjs')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(res => {
        if (res && res.status === 200) {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
