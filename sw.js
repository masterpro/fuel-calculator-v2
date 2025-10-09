const CACHE_NAME = 'fuel-calculator-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://placehold.co/192x192/4F46E5/FFFFFF?text=⛽',
  'https://placehold.co/512x512/4F46E5/FFFFFF?text=⛽'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});