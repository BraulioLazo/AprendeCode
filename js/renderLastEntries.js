const lastEntriesFrontend = [
    {
        keywords: "menú,com, hacer, un, menu, desplegable, con, html, css, desplegable,  javascript, tutorial, entrada, responsive, ocultar, mostrar, contenido",
        title: "Cómo hacer un menú desplegable con HTML, CSS y JavaScript?",
        description: "Dale vida a tu sitio web con un menú desplegable interactivo. En esta guía paso a paso, exploraremos cómo crear un menú desplegable adaptable utilizando HTML, CSS y JavaScript.",
        imageUrl: "/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/images/menu-desplegable-html-css-javascript.jpg",
        imageAlt: "Chica explorando el emocionante mundo del menú desplegable en su PC de escritorio: una guía completa de HTML, CSS y JavaScript para crear un menú interactivo y adaptable en AprendeCode.",
        link: "/frontend/como-hacer-un-menu-desplegable-con-html-css-y-javascript/",
    },
    {
        keywords: "como, ocultar, mostrar, contenido, con, javascript, NodeList, forEach, optimización, if-else, tutorial, entrada, blog, comentarios, testimonios",
        title: "¿Cómo ocultar y mostrar contenido con JavaScript?",
        description: "Descubre cómo ocultar y mostrar contenido con JavaScript de manera eficiente. Desde la preparación de tu HTML y CSS, hasta la implementación de Event Listeners y estructuras condicionales con if-else.",
        imageUrl: "/frontend/como-ocultar-y-mostrar-contenido-con-javascript/images/mujer-entendiendo-codigo-para-ocultar-mostrar-contenido-javascript.jpg",
        imageAlt: "Mujer analizando líneas de código en su computadora para ocultar y mostrar contenido con JavaScript",
        link: "/frontend/como-ocultar-y-mostrar-contenido-con-javascript/",
    },
    {
        title: "CSS Grid desde Cero: Diseños Adaptables Sin Necesidad de Media Queries",
        description: "Descubre el poder del CSS Grid. Sumérgete en una guía completa, desde lo básico hasta conseguir diseños responsive. ¡No esperes más y amplía tus habilidades de diseño web!",
        imageUrl: "/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/images/desarrollando-layout-css-grid.jpg",
        imageAlt: "Ilustración de un chico concentrado escribiendo en su laptop en un entorno de trabajo, destacando la implementación de CSS Grid para diseños adaptables en desarrollo web.",
        link: "/frontend/css-grid-desde-cero-disenos-adaptables-sin-necesidad-de-media-queries/",
    },
    {
        title: "Descubre las Media Queries: La Clave para un Diseño Web Responsivo",
        description: "¡Profundiza con nosotros en el fascinante mundo de las Media Queries! Descubre cómo transforman el diseño web y por qué son esenciales para tu viaje de aprendizaje.",
        imageUrl: "/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/images/equipo-desarrolladores.jpg",
        imageAlt: "Equipo de desarrolladores trabajando en una mesa, con una chica explicando código a un chico a su lado",
        link: "/frontend/descubre-las-media-queries-la-clave-para-un-diseno-web-responsivo/",
    }
];

const renderEntryContent = (cardContent) => {
    return `
    <div class="entry-card">
       <div class="entry-card__image-container">
           <img src="${cardContent.imageUrl}" loading="lazy" decoding="async" alt="${cardContent.imageAlt}">
       </div>
       <div class="entry-card__bottom-position">
           <h3>${cardContent.title}</h3>
           <div class="entry-card__button-container">
               <a class="btn-link" href="${cardContent.link}"><span>Ver Más</span></a>
           </div>
       </div>
    </div>`;
};

function renderLastEntries() {
    const lastEntriesFrontendContainer = document.querySelector(".latest-entries-frontend__cards-container");
    lastEntriesFrontendContainer.innerHTML = "";

    for (let index = 0; index < 4; index++) {
        lastEntriesFrontendContainer.innerHTML += renderEntryContent(lastEntriesFrontend[index]);
    }
}
renderLastEntries();