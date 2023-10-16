const lastEntriesFrontend = [
    {
        title: "Automatiza el año de tu pie de página con JavaScript",
        description: "¿Cansado de cambiar manualmente el año en el pie de página cada enero? Descubre cómo automatizar esta tarea y olvídate de esa molestia anual. ¡Dale un respiro a tu rutina y ahorra tiempo con este sencillo truco de JavaScript!",
        imageUrl: "/frontend/automatiza-el-año-de-tu-pie-de-pagina-con-javascript/images/automatizar-pie-de-pagina-con-javascript.webp",
        imageAlt: "Desarrolladora sonriendo mientras trabaja en su computadora, implementando la automatización del año en el pie de página de su sitio web.",
        link: "/frontend/automatiza-el-año-de-tu-pie-de-pagina-con-javascript/",
    },
    {
        title: "¿Cómo utilizar la API Wake Lock con JavaScript?",
        description: "Descubre el poder del API Wake Lock y cómo puede mejorar la experiencia del usuario al evitar que la pantalla de su dispositivo se duerma mientras utiliza tu aplicación. Acompañanos en un viaje detallado a través de este recurso esencial.",
        imageUrl: "/frontend/como-utilizar-la-api-wake-lock-con-javascript/images/api-wake-lock-javascript.webp",
        imageAlt: "Tres desarrolladores, un chico y dos chicas, trabajando juntos frente a un ordenador, explorando el API Wake Lock.",
        link: "/frontend/como-utilizar-la-api-wake-lock-con-javascript/",
    },
    {
        title: "Animación de texto con JavaScript",
        description: "Adéntrate en el fascinante mundo de las animaciones de texto en JavaScript. Descubre cómo crear efectos llamativos en tu sitio web con la guía de nuestro tutorial paso a paso. ¡No te lo pierdas!",
        imageUrl: "/frontend/animacion-de-texto-con-javscript/images/animacion-texto-javascript.webp",
        imageAlt: "Desarrollador sentado frente a una PC de escritorio mientras una desarrolladora le explica, algo relacionado con animaciones de texto en JavaScript.",
        link: "/frontend/animacion-de-texto-con-javscript/",
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