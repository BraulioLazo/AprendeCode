const lastEntriesFrontend = [
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
    },
    {
        title: "Navegando el Diseño Web: Guía Completa sobre Enlaces en HTML y CSS",
        description: "Descubre cómo crear enlaces impactantes en tu diseño web con nuestra guía completa sobre enlaces en HTML y CSS.",
        imageUrl: "/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/images/desarrollador-desarrolladora-mirando-pantalla.jpg",
        imageAlt: "Desarrollador y desarrolladora mirando la pantalla, con expresiones concentradas mientras intentan solucionar un error en el código.",
        link: "/frontend/navegando-el-diseno-web-guia-completa-sobre-enlaces-en-html-y-css/",
    },
    {
        title: "Entendiendo la Propiedad 'Clear' en CSS: Controla Tus Cajas Flotantes",
        description: "Sumérgete en el mundo de CSS y descubre el poder de la propiedad Clear. Aprende a dominar las cajas flotantes y evitar problemas comunes de diseño",
        imageUrl: "/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/images/desarrolladores-discusion-propiedad-clear.jpg",
        imageAlt: "Hombre explicando algo de programación a una chica mientras ambos miran atentamente la pantalla del ordenador.",
        link: "/frontend/entendiendo-la-propiedad-clear-en-css-controla-tus-cajas-flotantes/",
    },
];

const renderEntryContent = (cardContent) => {
    return `
    <div class="entry-card">
       <div class="entry-card__image-container">
           <img src="${cardContent.imageUrl}" loading="lazy" alt="${cardContent.imageAlt}">
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