const CACHE_NAME = 'electricity-pwa-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    // Add paths to your icons here
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});