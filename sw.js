const CACHE_NAME = 'electricity-pwa-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600&display=swap',
    // Add all payment logo URLs here
    'https://www.hkma.gov.hk/media/eng/doc/key-functions/financial-infrastructure/retail-payment/fps/logo/fps_logo_2017_eng.png',
    'https://www.octopus.com.hk/img/logo.svg',
    'https://www.payme.hsbc.com.hk/images/payme_logo.svg',
    'https://www.apple.com/apple-pay/images/overview/icon_applepay.png',
    'https://developer.samsung.com/one/samsungpay/images/samsung_pay_logo_blue_rgb.png',
    'https://pay.google.com/about/static/images/social/og_image.jpg',
    'https://www.alipay.com/h5app/static/image/logo.png',
    'https://pay.weixin.qq.com/images/wechat_pay/wechatpay_logo_icon.png',
    'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg',
    'https://www.visa.com.hk/dam/VCOM/regional/ap/hongkong/global-elements/images/visa-logo-800x450.jpg',
    'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png',
    'https://www.unionpayintl.com/en/img/logo2x.png'
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