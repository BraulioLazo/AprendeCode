function registerServiceWorkers() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/js/globals/serviceWorkers.js').then(function () {
            console.log("Registro Exitoso");
        }).catch(error => {
            console.error(`Hemos tenido un inconveniente al registrar el service Worker: `, error);
        });
    } else {
        console.error("Su navegador no es compatible con Service Workers");
    }
}
window.addEventListener('load', registerServiceWorkers);