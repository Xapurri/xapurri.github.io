let cache_version = cache_v013

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cache_version).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/about.html',
        '/graficos.html',
        '/about.css',
        '/nav-style.css',
        '/style-graficos.css',
        '/styles-about.css',
        '/barrios.js',
        '/datos_graficos.js',
        '/main.js',
        '/mapa.js',
        // ... añade otros archivos y recursos que quieras cachear
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  var cacheWhitelist = [cache_version]; // añade los nombres de caché que quieres mantener

  event.waitUntil(
      caches.keys().then((cacheNames) => {
          return Promise.all(
              cacheNames.map((cacheName) => {
                  if (cacheWhitelist.indexOf(cacheName) === -1) {
                      return caches.delete(cacheName);
                  }
              })
          );
      })
  );
});



