self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
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
  