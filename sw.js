const cacheName = 'ola-pwa';

var filesToCache = [
    './',
    './manifest.webmanifest',
    './index.html',
    './js/main.js'
]

self.addEventListener('install',event => {

    event.waitUntill(
        caches.open(cacheName)
        .then(cache=> 
            cache.addAll(filesToCache) )
        );
});

self.addEventListener( 'fetch',event => {
    event.respondWih(
        caches.match(event.request)
            .then(Response=> {
                 return Response || fetch(event.request);
            }
        )
    );
});