const lastEntriesFrontend = [
    {
        title: "Automatiza el año de tu pie de página con JavaScript",
        description: "¿Cansado de cambiar manualmente el año en el pie de página cada enero? Descubre cómo automatizar esta tarea y olvídate de esa molestia anual. ¡Dale un respiro a tu rutina y ahorra tiempo con este sencillo truco de JavaScript!",
        imageUrl: "/frontend/automatiza-el-ano-de-tu-pie-de-pagina-con-javascript/images/automatizar-pie-de-pagina-con-javascript.webp",
        imageAlt: "Desarrolladora sonriendo mientras trabaja en su computadora, implementando la automatización del año en el pie de página de su sitio web.",
        link: "/frontend/automatiza-el-ano-de-tu-pie-de-pagina-con-javascript/",
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

const lastEntriesArduino = [
    {
        title: "Explorando el Corazón de Arduino: Un Recorrido por sus Componentes Esenciales",
        description: "¡Da tus primeros pasos en el emocionante mundo de la electrónica y la programación! Explora los componentes esenciales, aprende sobre los pines digitales y analógicos, y abre un mundo lleno de posibilidades.",
        imageUrl: "/arduino/explorando-el-corazón-de-arduino-un-recorrido-por-sus-componentes-esenciales/images/Componentes-Placa-Arduino-UNO.webp",
        imageAlt: "Joven creando un proyecto con la placa Arduino UNO",
        link: "/arduino/explorando-el-corazón-de-arduino-un-recorrido-por-sus-componentes-esenciales/",
    },
    {
        title: "Iniciando con Arduino: Preparación del Entorno y Plataformas",
        description: "Descubre cómo preparar tu entorno de trabajo en Arduino con esta guía introductoria. Desde plataformas virtuales hasta primeros pasos con el IDE.",
        imageUrl: "/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/images/muchacho-trabajando-robot-arduino.webp",
        imageAlt: "Imagen de un joven trabajando en la construcción y programación de un robot utilizando Arduino.",
        link: "/arduino/iniciando-con-arduino-preparacion-del-entorno-y-plataformas/",
    },
    {
        title: "Arduino: Sumérgete en el Universo de la Creación Electrónica",
        description: "Descubre el fascinante Universo de Arduino, una plataforma de creación electrónica que te permite explorar y crear proyectos desde tu imaginación ...",
        imageUrl: "/arduino/arduino-sumergente-en-el-universo-de-la-creacion-electronica/images/joven-disenando-carrito-con-Arduino.webp",
        imageAlt: "Joven diseñando un carrito en la computadora sobre el escritorio.",
        link: "/arduino/arduino-sumergente-en-el-universo-de-la-creacion-electronica/",
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

function renderEntries(containerSelector, entries) {
    const container = document.querySelector(containerSelector);
    const html = entries.map(entry => renderEntryContent(entry)).join('');
    container.innerHTML = html;
}

function renderLastEntries() {
    renderEntries(".latest-entries-frontend__cards-container", lastEntriesFrontend);
    renderEntries(".latest-entries-arduino__cards-container", lastEntriesArduino);
}

window.addEventListener('DOMContentLoaded', renderLastEntries);
