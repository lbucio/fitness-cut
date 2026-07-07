// Bump this on every deploy — it forces old caches to be cleared for anyone
// with the app already installed on their home screen.
const CACHE_NAME = 'fitnesscut-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];
// Note: Tesseract.js and its language data load from a CDN at runtime and are
// intentionally not pre-cached here — they're fetched (and then browser-cached)
// the first time OCR is used, per the README.

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first: always try to fetch the latest version when online, and only
// fall back to the cached copy if the network request fails (i.e. offline).
// This is what makes the installed home-screen app pick up updates instead of
// being stuck on whatever was cached when it was first installed.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
