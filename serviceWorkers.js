const cacheImagesName = 'CACHE_IMAGES_V0.1';

const globalImages = [
    '/assets/hero/presentation-image.webp',
    '/assets/topics/icono-desarrollo-frontend.webp',
    '/assets/topics/icono-placa-arduino.webp',
    '/assets/topics/icono-comunidad.webp',
    '/assets/topics/contacto-aprendecode.webp',
    '/assets/benefits/tecnology-circle-aprendecode.webp',
    '/assets/about/founder-image.webp',
    '/assets/global/youtube-icono.webp',
    '/assets/global/blog-icono.webp',
    '/assets/global/email-icono.webp',
    '/assets/global/atencion-icono.webp',
    '/assets/global/contacto-icono.webp',
    '/assets/global/global-header-aprendecode.webp',
    '/assets/about/about-aprendecode.webp',
    '/assets/global/aprendecode-canal-youtube.webp',
    '/assets/global/aprendecode-youtube-canal.webp'
];

const arduinoImages = [
    '/arduino/arduino-sumergente-en-el-universo-de-la-creacion-electronica/images/Placas-Principales-Arduino.webp',
    '/arduino/arduino-sumergente-en-el-universo-de-la-creacion-electronica/images/Arduino-IDE-Interfaz.webp',
    '/arduino/arduino-sumergente-en-el-universo-de-la-creacion-electronica/images/joven-diseñando-carrito-con-Arduino.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/Tinkercad-Interfaz.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/Arduino-IDE-Interfaz.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/unirse-tinkercad.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/tinkercad-vista-crear-circuito.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/tinkercad-opcion-crear-circuito.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/muchacho-trabajando-robot-arduino.webp'
];


const cachingResources = [...arduinoImages, ...globalImages];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheImagesName).then((cache) => {
            return cache.addAll(cachingResources);
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhiteList = [cacheImagesName];

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
