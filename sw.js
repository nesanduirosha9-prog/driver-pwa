const CACHE_NAME = "driver-app-cache-v1";
const urlsToCache = [
  "./index.html",
  "./manifest.json",
  "./icons/discount.png",
  "./icons/QR.png",
  "./icons/arrow.png",
  "./icons/lankaQR.jpg",
  "./icons/upi.jpg",
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

// Fetch cached assets
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});
