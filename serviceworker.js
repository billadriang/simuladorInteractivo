const assets = ["/","index.html","main.js","style.css"]
// Intento de cache
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("assets").then( cache => {
            cache.addAll(assets);
        })
    );
})

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then( response => {
            if (response) {
                return response;
            } else {
                return fetch(event.request);
            }
        })
    );
})