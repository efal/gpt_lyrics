
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open('lyrics-pwa-v1').then(cache => {
    return cache.addAll(['/','/index.html','/manifest.json']);
  }));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
