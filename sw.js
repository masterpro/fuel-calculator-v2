const CACHE_NAME = 'fuel-calculator-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://i.postimg.cc/2SXWR93n/car-192.png',
  'https://i.postimg.cc/BZzF8VJD/car.png'
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
