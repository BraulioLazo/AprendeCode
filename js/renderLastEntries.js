const lastEntriesFrontend = [
    {
        title: "Incorporando y Personalizando Videos en HTML: Una Guía Completa",
        description: "Descubre cómo incorporar y personalizar videos en HTML eficazmente. Desde formatos hasta controles, esta guía te lleva paso a paso hacia una experiencia web óptima.",
        imageUrl: "/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/images/equipo-desarrolladores-aplicacion-web.webp",
        imageAlt: "Equipo de desarrolladores trabajando en una aplicación web, con dos miembros codificando activamente mientras otros discuten temas relacionados.",
        link: "/frontend/incorporando-y-personalizando-videos-en-html-una-guia-completa/",
    },
    {
        title: "Manipulando el DOM: Creación y Adición de Elementos HTML con JavaScript",
        description: "Descubre cómo manipular el DOM con JavaScript de manera eficiente. En esta entrada, profundizamos en la creación y adición dinámica de elementos HTML, proporcionando ejemplos claros y técnicas prácticas.",
        imageUrl: "/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/images/desarrolladores-manipulacion-dom.webp",
        imageAlt: "Desarrollador y desarrolladora trabajando en la manipulación del DOM utilizando JavaScript",
        link: "/frontend/manipulando-el-dom-creacion-y-adicion-de-elementos-html-con-javascript/",
    },
    {
        title: "Descubre Cómo Mejorar la Comunicación Entre Funciones en JavaScript",
        description: "Aprende a mejorar la comunicación entre funciones en JavaScript para llevar tu código al siguiente nivel. Este tutorial te guiará a través de técnicas efectivas para escribir funciones más limpias y organizadas.",
        imageUrl: "/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/images/comunicacion-entre-funciones-javascrcript.webp",
        imageAlt: "Una pareja tumbada en cómodos sillones, la chica está escribiendo código mientras su pareja la observa; representando una buena comunicación entre funciones en JavaScript.",
        link: "/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/",
    },
];

const renderEntryContent = (cardContent) => {
    return `
    <div class="card">
       <a href="${cardContent.link}">
           <div class="card__image-container">
               <img src="${cardContent.imageUrl}" alt="${cardContent.imageAlt}" class="card__image" decoding="async" loading="lazy">
           </div>
       </a>
       <h3 class="card__title">${cardContent.title}</h3>
       <p class="card__description">${cardContent.description}</p>
       <div class="btn-link-container">
           <a href="${cardContent.link}" class="btn-link">
               <span>Leer Más</span>
           </a>
       </div>
    </div>
    `;
};

function renderLastEntries() {
    const lastEntriesFrontendContainer = document.querySelector(".latest-entries-frontend__cards-container");
    lastEntriesFrontendContainer.innerHTML = "";

    for (let index = 0; index < lastEntriesFrontend.length; index++) {
        lastEntriesFrontendContainer.innerHTML += renderEntryContent(lastEntriesFrontend[index]);
    }
}
renderLastEntries();