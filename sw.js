const CACHE_NAME = 'click-me-pwa-v1';
const APP_FILES = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './image/icon192.png',
  './image/icon512.png'
].map((path) => new URL(path, self.registration.scope).href);


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      const oldAppCaches = cacheNames.filter((name) =>
        name.startsWith('click-me-pwa-') && name !== CACHE_NAME
      );
      return Promise.all(oldAppCaches.map((name) => caches.delete(name)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  if (event.request.method !== 'GET' || requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match(new URL('./index.html', self.registration.scope).href);
        }
        return Response.error();
      });
    })
  );
});
