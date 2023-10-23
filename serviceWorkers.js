const cacheName = 'APRENDECODE_CACHE_VERSION_0.4';

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
    '/arduino/arduino-sumergente-en-el-universo-de-la-creacion-electronica/images/joven-disenando-carrito-con-Arduino.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/Tinkercad-Interfaz.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/Arduino-IDE-Interfaz.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/unirse-tinkercad.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/tinkercad-vista-crear-circuito.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/tinkercad-opcion-crear-circuito.webp',
    '/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/muchacho-trabajando-robot-arduino.webp',
    '/arduino/explorando-el-corazón-de-arduino-un-recorrido-por-sus-componentes-esenciales/images/Componentes-Placa-Arduino-UNO.webp',
    '/arduino/explorando-el-corazón-de-arduino-un-recorrido-por-sus-componentes-esenciales/images/MicroControlador-Arduino-UNO.webp',
    '/arduino/explorando-el-corazón-de-arduino-un-recorrido-por-sus-componentes-esenciales/images/Pines-Arduino-Digitales-Analogicos.webp',
    '/arduino/explorando-el-corazón-de-arduino-un-recorrido-por-sus-componentes-esenciales/images/Pines-Alimentacion-Arduino.webp',
    '/arduino/explorando-el-corazón-de-arduino-un-recorrido-por-sus-componentes-esenciales/images/Puerto-USB-Boton-Reset-Arduino-UNO.webp'
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
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/images/resultado-final-clip-path.webp',

    '/frontend/variables-en-css-un-vistazo-a-las-propiedades-personalizadas/images/css-variables-cover.webp',
    '/frontend/variables-en-css-un-vistazo-a-las-propiedades-personalizadas/images/diseno-original-sombra-bordes.webp',
    '/frontend/variables-en-css-un-vistazo-a-las-propiedades-personalizadas/images/diseno-modificado-propiedades-personalizadas.webp',

    '/frontend/como-crear-una-tabla-en-html/images/mujer-hombre-desarrolladores-discusion.webp',
    '/frontend/como-crear-una-tabla-en-html/images/tabla-html-basica.webp',
    '/frontend/como-crear-una-tabla-en-html/images/tabla-html-estilizada.webp',

    '/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/images/desarrolladores-discusion-propiedad-clear.webp',
    '/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/images/cajas-hijas-sin-propiedad-clear.webp',
    '/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/images/cajas-hijas-con-propiedad-clear.webp',

    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/images/desarrollador-desarrolladora-mirando-pantalla.webp',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/images/ejemplo-enlaces-resultado.webp',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/images/ejemplo-enlace-correo.webp',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/images/ejemplo-cambios-estilos-enlaces.webp',

    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/images/equipo-desarrolladores.webp',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/images/puntos-de-quiebre-media-query.webp',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/images/declaracion-media-query.webp',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/images/media-query-ideas.webp',

    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/desarrollando-layout-css-grid.webp',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/css-grid-layout.webp',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/css-grid-gap.webp',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/css-grid-repeat.webp',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/css-grid-lineas.webp',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/css-grid-row-column.webp',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/css-grid-span.webp',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/css-grid-minmax.webp',

    '/frontend/como-ocultar-y-mostrar-contenido-con-javascript/images/mujer-entendiendo-codigo-para-ocultar-mostrar-contenido-javascript.webp',
    '/frontend/como-ocultar-y-mostrar-contenido-con-javascript/images/ocultar-mostrar-contenido-javascript.webp',

    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/images/menu-desplegable-html-css-javascript.webp',

    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/images/icono-menu-desplegable-javascript.webp',

    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/images/galeria-responsive-css-grid.webp',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/images/codigo-inicial-galeria-responsive-css-grid.webp',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/images/cajas-con-imagenes-cargadas-css-object-fit-cover.webp',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/images/galeria-completa-posicionada-css-grid-escritorio.webp',

    '/frontend/como-hacer-efecto-scroll-con-javascript/images/chica-en-escritorio-trabajando-en-efecto-scroll.webp',

    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/images/hombre-codificando-efecto-fade-in-javascript.webp',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/images/ejemplo-scroll-fade-in.webp',

    '/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/images/comunicacion-entre-funciones-javascrcript.webp',

    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/images/desarrolladores-manipulacion-dom.webp',
    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/images/codigo-partida-manipulacion-dom.webp',

    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/images/equipo-desarrolladores-aplicacion-web.webp',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/images/codigo-inicial-videos-html.webp',

    '/frontend/como-hacer-un-slider-con-javascript/images/equipo-desarrollando-un-slider-con-javascript.webp',
    '/frontend/como-hacer-un-slider-con-javascript/images/como-un-hacer-slider-con-javascript.webp',

    '/frontend/como-hacer-un-slider-con-html-css-y-javascript/images/slider-con-html-css-javascript.webp',

    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/images/desarrollador-trabajando-local-session-storage.webp',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/images/codigo-inicial-local-storage-session-storage.webp',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/images/ubicacion-items-local-storage-inspector.webp',

    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/images/desarrolladoras-revisando-indexeddb-en-pantalla-y-movil.webp',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/images/localizar-base-de-datos-indexeddb-inspector.webp',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/images/codigo-completo-para-abrir-base-de-datos-indexeddb.webp',

    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/images/desarrollador-indexeddb-codigo.webp',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/images/indexeddb-key-propiedad-diferencia.webp',

    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/images/Desarrolladores-asombrados-indexeddb.webp',

    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/images/editar-objetos-indexeddb.webp',

    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/images/busqueda-indexeddb-desarrolladores.webp',

    '/frontend/limpia-tu-indexeddb-aprende-a-eliminar-objetos-facilmente/images/eliminar-objetos-indexeddb.webp',

    '/frontend/animacion-de-texto-con-javscript/images/animacion-texto-javascript.webp',

    '/frontend/como-utilizar-la-api-wake-lock-con-javascript/images/api-wake-lock-javascript.webp',

    '/frontend/automatiza-el-ano-de-tu-pie-de-pagina-con-javascript/images/automatizar-pie-de-pagina-con-javascript.webp'
];

const snippetsFrontend = [
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/snippets/snippet1.txt',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/snippets/snippet2.txt',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/snippets/snippet3.txt',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/snippets/snippet4.txt',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/snippets/snippet5.txt',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/snippets/snippet6.txt',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/snippets/snippet7.txt',
    '/frontend/convierte-tu-web-en-un-espacio-dinamico-con-flexbox/snippets/snippet8.txt',

    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/snippets/snippet1.txt',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/snippets/snippet2.txt',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/snippets/snippet3.txt',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/snippets/snippet4.txt',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/snippets/snippet5.txt',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/snippets/snippet6.txt',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/snippets/snippet7.txt',
    '/frontend/cajas-flotantes-un-vistazo-a-su-versatilidad-en-el-diseno-web/snippets/snippet8.txt',

    '/frontend/dominando-las-imagenes-de-fondo-en-css-guia-paso-a-paso/snippets/snippet1.txt',
    '/frontend/dominando-las-imagenes-de-fondo-en-css-guia-paso-a-paso/snippets/snippet2.txt',
    '/frontend/dominando-las-imagenes-de-fondo-en-css-guia-paso-a-paso/snippets/snippet3.txt',
    '/frontend/dominando-las-imagenes-de-fondo-en-css-guia-paso-a-paso/snippets/snippet4.txt',

    '/frontend/domina-la-propiedad-object-fit-en-css/snippets/snippet1.txt',
    '/frontend/domina-la-propiedad-object-fit-en-css/snippets/snippet2.txt',
    '/frontend/domina-la-propiedad-object-fit-en-css/snippets/snippet3.txt',
    '/frontend/domina-la-propiedad-object-fit-en-css/snippets/snippet4.txt',
    '/frontend/domina-la-propiedad-object-fit-en-css/snippets/snippet5.txt',
    '/frontend/domina-la-propiedad-object-fit-en-css/snippets/snippet6.txt',

    '/frontend/creando-columnas-estilizadas-en-css-una-guia-paso-a-paso/snippets/snippet1.txt',
    '/frontend/creando-columnas-estilizadas-en-css-una-guia-paso-a-paso/snippets/snippet2.txt',
    '/frontend/creando-columnas-estilizadas-en-css-una-guia-paso-a-paso/snippets/snippet3.txt',
    '/frontend/creando-columnas-estilizadas-en-css-una-guia-paso-a-paso/snippets/snippet4.txt',

    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/snippets/snippet1.txt',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/snippets/snippet2.txt',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/snippets/snippet3.txt',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/snippets/snippet4.txt',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/snippets/snippet5.txt',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/snippets/snippet6.txt',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/snippets/snippet7.txt',
    '/frontend/creacion-de-un-menu-web-guia-completa-para-principiantes/snippets/snippet8.txt',

    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/snippets/snippet1.txt',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/snippets/snippet2.txt',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/snippets/snippet3.txt',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/snippets/snippet4.txt',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/snippets/snippet5.txt',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/snippets/snippet6.txt',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/snippets/snippet7.txt',
    '/frontend/introduccion-al-clip-path-dando-formas-creativas-a-tu-pagina-web/snippets/snippet8.txt',

    '/frontend/variables-en-css-un-vistazo-a-las-propiedades-personalizadas/snippets/snippet1.txt',
    '/frontend/variables-en-css-un-vistazo-a-las-propiedades-personalizadas/snippets/snippet2.txt',
    '/frontend/variables-en-css-un-vistazo-a-las-propiedades-personalizadas/snippets/snippet3.txt',
    '/frontend/variables-en-css-un-vistazo-a-las-propiedades-personalizadas/snippets/snippet4.txt',

    '/frontend/como-crear-una-tabla-en-html/snippets/snippet1.txt',
    '/frontend/como-crear-una-tabla-en-html/snippets/snippet2.txt',
    '/frontend/como-crear-una-tabla-en-html/snippets/snippet3.txt',
    '/frontend/como-crear-una-tabla-en-html/snippets/snippet4.txt',

    '/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/snippets/snippet1.txt',
    '/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/snippets/snippet2.txt',
    '/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/snippets/snippet3.txt',
    '/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/snippets/snippet4.txt',

    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet1.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet2.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet3.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet4.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet5.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet6.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet7.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet8.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet9.txt',
    '/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/snippets/snippet10.txt',

    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/snippets/snippet1.txt',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/snippets/snippet2.txt',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/snippets/snippet3.txt',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/snippets/snippet4.txt',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/snippets/snippet5.txt',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/snippets/snippet6.txt',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/snippets/snippet7.txt',
    '/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/snippets/snippet8.txt',

    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet1.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet2.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet3.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet4.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet5.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet6.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet7.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet8.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet9.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet10.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet11.txt',
    '/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/snippets/snippet12.txt',

    '/frontend/como-ocultar-y-mostrar-contenido-con-javascript/snippets/snippet1.txt',
    '/frontend/como-ocultar-y-mostrar-contenido-con-javascript/snippets/snippet2.txt',
    '/frontend/como-ocultar-y-mostrar-contenido-con-javascript/snippets/snippet3.txt',
    '/frontend/como-ocultar-y-mostrar-contenido-con-javascript/snippets/snippet4.txt',
    '/frontend/como-ocultar-y-mostrar-contenido-con-javascript/snippets/snippet5.txt',

    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet1.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet2.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet3.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet4.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet5.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet6.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet7.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet8.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet9.txt',
    '/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/snippets/snippet10.txt',

    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/snippets/snippet1.txt',
    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/snippets/snippet2.txt',
    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/snippets/snippet3.txt',
    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/snippets/snippet4.txt',
    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/snippets/snippet5.txt',
    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/snippets/snippet6.txt',
    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/snippets/snippet7.txt',
    '/frontend/transicion-en-el-icono-del-menu-como-hacerlo/snippets/snippet8.txt',

    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet1.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet2.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet3.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet4.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet5.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet6.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet7.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet8.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet9.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet10.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet11.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet12.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet13.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet14.txt',
    '/frontend/como-crear-una-galeria-responsive-con-css-grid-guia-paso-a-paso/snippets/snippet15.txt',

    '/frontend/como-hacer-efecto-scroll-con-javascript/snippets/snippet1.txt',
    '/frontend/como-hacer-efecto-scroll-con-javascript/snippets/snippet2.txt',
    '/frontend/como-hacer-efecto-scroll-con-javascript/snippets/snippet3.txt',
    '/frontend/como-hacer-efecto-scroll-con-javascript/snippets/snippet4.txt',

    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet1.txt',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet2.txt',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet3.txt',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet4.txt',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet5.txt',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet6.txt',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet7.txt',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet8.txt',
    '/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/snippets/snippet9.txt',

    '/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/snippets/snippet1.txt',
    '/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/snippets/snippet2.txt',
    '/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/snippets/snippet3.txt',
    '/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/snippets/snippet4.txt',
    '/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/snippets/snippet5.txt',
    '/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/snippets/snippet6.txt',

    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/snippets/snippet1.txt',
    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/snippets/snippet2.txt',
    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/snippets/snippet3.txt',
    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/snippets/snippet4.txt',
    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/snippets/snippet5.txt',
    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/snippets/snippet6.txt',
    '/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/snippets/snippet7.txt',

    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet1.txt',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet2.txt',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet3.txt',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet4.txt',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet5.txt',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet6.txt',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet7.txt',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet8.txt',
    '/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/snippets/snippet9.txt',

    '/frontend/como-hacer-un-slider-con-javascript/snippets/snippet1.txt',
    '/frontend/como-hacer-un-slider-con-javascript/snippets/snippet2.txt',
    '/frontend/como-hacer-un-slider-con-javascript/snippets/snippet3.txt',
    '/frontend/como-hacer-un-slider-con-javascript/snippets/snippet4.txt',
    '/frontend/como-hacer-un-slider-con-javascript/snippets/snippet5.txt',
    '/frontend/como-hacer-un-slider-con-javascript/snippets/snippet6.txt',
    '/frontend/como-hacer-un-slider-con-javascript/snippets/snippet7.txt',
    '/frontend/como-hacer-un-slider-con-javascript/snippets/snippet8.txt',

    '/frontend/como-hacer-un-slider-con-html-css-y-javascript/snippets/snippet1.txt',
    '/frontend/como-hacer-un-slider-con-html-css-y-javascript/snippets/snippet2.txt',
    '/frontend/como-hacer-un-slider-con-html-css-y-javascript/snippets/snippet3.txt',
    '/frontend/como-hacer-un-slider-con-html-css-y-javascript/snippets/snippet4.txt',
    '/frontend/como-hacer-un-slider-con-html-css-y-javascript/snippets/snippet5.txt',
    '/frontend/como-hacer-un-slider-con-html-css-y-javascript/snippets/snippet6.txt',
    '/frontend/como-hacer-un-slider-con-html-css-y-javascript/snippets/snippet7.txt',

    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet1.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet2.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet3.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet4.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet5.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet6.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet7.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet8.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet9.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet10.txt',
    '/frontend/dominando-el-almacenamiento-web-local-storage-y-session-storage/snippets/snippet11.txt',

    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet1.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet2.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet3.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet4.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet5.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet6.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet7.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet8.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet9.txt',
    '/frontend/como-crear-una-base-de-datos-en-el-front-end-con-indexeddb-y-javascript/snippets/snippet10.txt',

    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet1.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet2.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet3.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet4.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet5.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet6.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet7.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet8.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet9.txt',
    '/frontend/indexeddb-y-el-arte-de-almacenar-objetos-todo-lo-que-necesitas-saber/snippets/snippet10.txt',

    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet1.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet2.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet3.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet4.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet5.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet6.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet7.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet8.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet9.txt',
    '/frontend/indexeddb-descubre-como-acceder-y-leer-objetos-almacenados/snippets/snippet10.txt',

    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet1.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet2.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet3.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet4.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet5.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet6.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet7.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet8.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet9.txt',
    '/frontend/editar-objetos-en-indexeddb-pasos-simples-y-detallados/snippets/snippet10.txt',

    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet1.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet2.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet3.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet4.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet5.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet6.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet7.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet8.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet9.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet10.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet11.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet12.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet13.txt',
    '/frontend/como-buscar-objetos-en-indexeddb-consejos-y-trucos-practicos/snippets/snippet14.txt',

    '/frontend/limpia-tu-indexeddb-aprende-a-eliminar-objetos-facilmente/snippets/snippet1.txt',
    '/frontend/limpia-tu-indexeddb-aprende-a-eliminar-objetos-facilmente/snippets/snippet2.txt',
    '/frontend/limpia-tu-indexeddb-aprende-a-eliminar-objetos-facilmente/snippets/snippet3.txt',
    '/frontend/limpia-tu-indexeddb-aprende-a-eliminar-objetos-facilmente/snippets/snippet4.txt',
    '/frontend/limpia-tu-indexeddb-aprende-a-eliminar-objetos-facilmente/snippets/snippet5.txt',
    '/frontend/limpia-tu-indexeddb-aprende-a-eliminar-objetos-facilmente/snippets/snippet6.txt',
    '/frontend/limpia-tu-indexeddb-aprende-a-eliminar-objetos-facilmente/snippets/snippet7.txt',

    '/frontend/animacion-de-texto-con-javscript/snippets/snippet1.txt',
    '/frontend/animacion-de-texto-con-javscript/snippets/snippet2.txt',
    '/frontend/animacion-de-texto-con-javscript/snippets/snippet3.txt',
    '/frontend/animacion-de-texto-con-javscript/snippets/snippet4.txt',
    '/frontend/animacion-de-texto-con-javscript/snippets/snippet5.txt',
    '/frontend/animacion-de-texto-con-javscript/snippets/snippet6.txt',
    '/frontend/animacion-de-texto-con-javscript/snippets/snippet7.txt',

    '/frontend/como-utilizar-la-api-wake-lock-con-javascript/snippets/snippet1.txt',
    '/frontend/como-utilizar-la-api-wake-lock-con-javascript/snippets/snippet2.txt',
    '/frontend/como-utilizar-la-api-wake-lock-con-javascript/snippets/snippet3.txt',
    '/frontend/como-utilizar-la-api-wake-lock-con-javascript/snippets/snippet4.txt',
    '/frontend/como-utilizar-la-api-wake-lock-con-javascript/snippets/snippet5.txt',
    '/frontend/como-utilizar-la-api-wake-lock-con-javascript/snippets/snippet6.txt',
    '/frontend/como-utilizar-la-api-wake-lock-con-javascript/snippets/snippet7.txt',

    '/frontend/automatiza-el-ano-de-tu-pie-de-pagina-con-javascript/snippets/snippet1.txt',
    '/frontend/automatiza-el-ano-de-tu-pie-de-pagina-con-javascript/snippets/snippet2.txt',
    '/frontend/automatiza-el-ano-de-tu-pie-de-pagina-con-javascript/snippets/snippet3.txt',
];

const mainResources = [
    '/js/components/menu.js',
    '/js/components/footer.js'
];

const cachingResources = [...arduinoImages, ...globalImages, ...frontendImages, ...snippetsFrontend, ...mainResources];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cachingResources);
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhiteList = [cacheName];

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
