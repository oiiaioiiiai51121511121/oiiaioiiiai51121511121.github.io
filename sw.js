const CACHE_NAME = 'electricity-pwa-v3';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600&display=swap',
    // Payment logos
    'https://upload.wikimedia.org/wikipedia/commons/6/6d/Faster_Payment_System_%28HK%29_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/59/Octopus_card.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/PayMe_by_HSBC_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/f/fd/Alipay.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/WeChat_Pay_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/33/UnionPay_logo.svg'
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