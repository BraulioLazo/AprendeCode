const lastEntriesFrontend = [
    {
        title: "Descubre Cómo Mejorar la Comunicación Entre Funciones en JavaScript",
        description: "Aprende a mejorar la comunicación entre funciones en JavaScript para llevar tu código al siguiente nivel. Este tutorial te guiará a través de técnicas efectivas para escribir funciones más limpias y organizadas.",
        imageUrl: "/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/images/comunicacion-entre-funciones-javascrcript.webp",
        imageAlt: "Una pareja tumbada en cómodos sillones, la chica está escribiendo código mientras su pareja la observa; representando una buena comunicación entre funciones en JavaScript.",
        link: "/frontend/descubre-como-mejorar-la-comunicacion-entre-funciones-en-javascript/",
    },
    {
        title: "Crear un Efecto Fade In Asombroso en JavaScript: Todo lo que Necesitas Saber",
        description: "Aprende a crear un efecto Fade In asombroso usando JavaScript con nuestro tutorial detallado. Esta guía te llevará paso a paso a través del proceso para hacer que tu sitio web se destaque.",
        imageUrl: "/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/images/hombre-codificando-efecto-fade-in-javascript.webp",
        imageAlt: "Hombre joven con audífonos sentado frente a una laptop, codificando un efecto Fade In en JavaScript.",
        link: "/frontend/crear-un-efecto-fade-in-asombroso-en-javascript/",
    },
    {
        title: "¿Cómo hacer Efecto Scroll con JavaScript?",
        description: "Descubre cómo añadir un toque dinámico y atractivo a tu sitio web con efectos de desplazamiento (Scroll) en JavaScript. Sumérgete en este tutorial detallado que te guiará paso a paso para implementar un efecto de scroll en el menú de tu página.",
        imageUrl: "/frontend/como-hacer-efecto-scroll-con-javascript/images/chica-en-escritorio-trabajando-en-efecto-scroll.webp",
        imageAlt: "Chica sentada en su escritorio mirando el efecto de desplazamiento que ha implementado en su sitio web.",
        link: "/frontend/como-hacer-efecto-scroll-con-javascript/",
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

    for (let index = 0; index < 3; index++) {
        lastEntriesFrontendContainer.innerHTML += renderEntryContent(lastEntriesFrontend[index]);
    }
}
renderLastEntries();