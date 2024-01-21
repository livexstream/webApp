if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/webapp/service-worker.js')
        .then((reg) => console.log('Service Worker Registered', reg))
        .catch((err) => console.log('Service Worker Not Registered', err));
};


