const cacheImagesName = 'CACHE_IMAGES_V0.2';

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

const frontendImages = [
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/images/Flexbox-Maquetado-Responsivo.webp',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/images/estructura-cajas-position.webp',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/images/cajas-flex-1-ejemplo.webp',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/images/cajas-flex-2-centro-ejemplo.webp',

    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/images/Diseno-Responsivo-Con-Cajas-Flotantes.webp',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/images/estructura-cajas-flotantes.webp',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/images/tres-cajas-flotantes-contenedor.webp',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/images/centrando-cajas-flotantes-truco.webp',

    '/frontend/dominando-las-imagenes-de-fondo-en-css-guia-paso-a-paso/images/dominar-imagenes-fondo-css.webp',

    '/frontend/domina-la-propiedad-object-fit-en-css/images/desarrollador-codificando-tarjeta-blog.webp',
    '/frontend/domina-la-propiedad-object-fit-en-css/images/imagenes-antes-object-fit.webp',
    '/frontend/domina-la-propiedad-object-fit-en-css/images/comparacion-object-fit.webp',
    '/frontend/domina-la-propiedad-object-fit-en-css/images/imagenes-con-object-fit-aplicado.webp',

    '/frontend/creando-columnas-estilizadas-en-css-una-guia-paso-a-paso/images/desarrollador-trabajando-en-columnas-css.webp',
    '/frontend/creando-columnas-estilizadas-en-css-una-guia-paso-a-paso/images/parrafo-comun-css.webp',
    '/frontend/creando-columnas-estilizadas-en-css-una-guia-paso-a-paso/images/parrafo-estilizado-columnas-css.webp',

    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/images/creacion-menu-web-desarrolladores.webp',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/images/inicio-menu-ejemplo.webp',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/images/menu-contenedores.webp',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/images/menu-estilizado.webp',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/images/menu-finalizado.webp',

    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/images/clip-path-tutorial-header.webp',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/images/codigo-partida-contenedor.webp',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/images/imagen-circular-clip-path.webp',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/images/interfaz-clippy-tool.webp',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/images/imagen-poligono-clip-path.webp',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/images/resultado-final-clip-path.webp'

];


const cachingResources = [...arduinoImages, ...globalImages, ...frontendImages];

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
