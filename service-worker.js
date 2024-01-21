self.addEventListener('install', event => {
    // Cache assets
    const CACHE_NAME = 'v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/loader.css',
  '/index.css',
  '/scripts.js',
  '/icon/path.png', // Ajoutez le chemin vers vos images ici
  // Vous pouvez ajouter autant d'images que vous voulez mettre en cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Your files were cached');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

});

self.addEventListener('fetch', event => {
    // Répondre avec des éléments en cache
    self.addEventListener('fetch', event => {
        event.respondWith(
          caches.match(event.request)
            .then(response => {
              // La ressource est en cache, on la retourne
              if (response) {
                return response;
              }
              // Sinon, on essaie de la récupérer via le réseau
              return fetch(event.request);
            }
          )
        );
      });
      
});
