const lastEntriesFrontend = [
    {
        title: "ScrollIntoView: La Clave para un Desplazamiento Suave Dentro de Tu Página Web",
        description: "Descubre cómo implementar un smooth scroll en tu página web con scrollIntoView. Aprende a crear transiciones suaves y mantener una URL limpia, mejorando significativamente la experiencia del usuario...",
        imageUrl: "/frontend/scrollintoview-la-clave-para-un-desplazamiento-suave-dentro-de-tu-pagina-web/images/scrollIntoView-misma-pagina.webp",
        imageAlt: "Una desarrolladora sonriente, concentrada en hacer testing del método scrollIntoView en su tablet.",
        link: "/frontend/scrollintoview-la-clave-para-un-desplazamiento-suave-dentro-de-tu-pagina-web/",
    },
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
];

const lastEntriesArduino = [
    {
        title: "Luz a la Obra: Conectando tu Primer LED Externo al Microcontrolador",
        description: "Aventúrate en el práctico aprendizaje de conectar un LED externo a tu microcontrolador en esta entrada. Cubriremos la aplicación de la Ley de Ohm, la selección de la resistencia adecuada y los pasos detallados para crear un circuito luminoso. ",
        imageUrl: "/arduino/luz-a-la-obra-conectando-tu-primer-led-externo-al-microcontrolador/images/Encender-LED-Externo-Arduino.webp",
        imageAlt: "Mano conectando un LED externo a una placa Arduino y probando su funcionamiento",
        link: "/arduino/luz-a-la-obra-conectando-tu-primer-led-externo-al-microcontrolador/",
    },
    {
        title: "Un Guiño Luminoso: Aprendiendo a Hacer Parpadear un LED con Arduino",
        description: "En esta entrada, damos nuestros primeros pasos haciendo parpadear un LED. Es simple, divertido y el comienzo de un fascinante viaje. ¡Acompáñame!",
        imageUrl: "/arduino/un-guino-luminoso-aprendiendo-a-hacer-parpadear-un-led-con-arduino/images/Encender-LED-Incorporado-Arduino.webp",
        imageAlt: "LED encendido junto a una placa Arduino",
        link: "/arduino/un-guino-luminoso-aprendiendo-a-hacer-parpadear-un-led-con-arduino/",
    },
    {
        title: "Explorando el Corazón de Arduino: Un Recorrido por sus Componentes Esenciales",
        description: "¡Da tus primeros pasos en el emocionante mundo de la electrónica y la programación! Explora los componentes esenciales, aprende sobre los pines digitales y analógicos, y abre un mundo lleno de posibilidades.",
        imageUrl: "/arduino/explorando-el-corazon-de-arduino-un-recorrido-por-sus-componentes-esenciales/images/Componentes-Placa-Arduino-UNO.webp",
        imageAlt: "Joven creando un proyecto con la placa Arduino UNO",
        link: "/arduino/explorando-el-corazon-de-arduino-un-recorrido-por-sus-componentes-esenciales/",
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
