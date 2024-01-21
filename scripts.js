if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/webapp/service-worker.js')
        .then((reg) => console.log('Service Worker Registered', reg))
        .catch((err) => console.log('Service Worker Not Registered', err));
}
// Placez ici tout code JavaScript que vous souhaitez exécuter après le chargement de la page
document.getElementById('support-button').addEventListener('click', function() {
    // Ici, vous pourriez ajouter la logique pour ouvrir le lien de don Buymeacoffee
    window.open('https://www.buymeacoffee.com/yourpage', '_blank');
});


