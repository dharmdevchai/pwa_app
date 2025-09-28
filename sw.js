self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // Simple cache-first strategy (optional)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
