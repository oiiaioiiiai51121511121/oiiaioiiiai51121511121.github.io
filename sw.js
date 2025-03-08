const CACHE_NAME = 'electricity-pwa-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600&display=swap',
    'https://upload.wikimedia.org/wikipedia/en/5/5f/Faster_Payment_System_logo.svg',
    'https://www.octopus.com.hk/en/business/merchant-support/branding-guideline/images/ocl-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/PayMe_from_HSBC_wordmark.svg',
    'https://www.logo.wine/a/logo/Alipay/Alipay-Logo.wine.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7a/WeChat_Pay.png',
    'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});