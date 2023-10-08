let loaded = 0;

const container = document.querySelector('.cards');
container.innerHTML = "";

const loader = document.createElement('div');
loader.id = 'loader';
container.appendChild(loader);

function getStorageKeyPrefix() {
    const pathName = window.location.pathname.split("/").filter(part => part !== "").pop();
    return pathName + "_";
}

function getEntriesByURL() {
    let pathName = window.location.pathname.split("/").filter(part => part !== "");
    
    if(pathName[pathName.length - 1] === "index.html") {
        pathName.pop();
    }

    pathName = pathName.pop();

    switch (pathName) {
        case "frontend":
            return frontendCardContent;
        case "arduino":
            return arduinoCardContent;
        default:
            return [];
    }
}

const entriesElements = getEntriesByURL();

function renderEntry(entry) {
    const card = document.createElement('div');
    card.classList.add('card');

    const anchorForImage = document.createElement('a');
    anchorForImage.href = entry.link;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('card__image-container');

    const image = document.createElement('img');
    image.src = entry.imageUrl;
    image.classList.add('card__image');
    image.setAttribute('decoding', 'async');
    image.setAttribute('loading', 'lazy');
    image.setAttribute('alt', entry.imageAlt);

    imageContainer.appendChild(image);
    anchorForImage.appendChild(imageContainer);
    card.appendChild(anchorForImage);

    const title = document.createElement('h3');
    title.classList.add('card__title');
    title.textContent = entry.title;

    const description = document.createElement('p');
    description.classList.add('card__description');
    description.textContent = entry.description;

    const btnLinkContainer = document.createElement('div');
    btnLinkContainer.classList.add('btn-link-container');

    const anchorForButton = document.createElement('a');
    anchorForButton.href = entry.link;
    anchorForButton.classList.add('btn-link');

    const spanForButton = document.createElement('span');
    spanForButton.textContent = "Leer Más";

    anchorForButton.appendChild(spanForButton);
    btnLinkContainer.appendChild(anchorForButton);

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(btnLinkContainer);

    if (loader.parentNode === container) {
        container.insertBefore(card, loader);
    } else {
        container.appendChild(card);
    }
}

function initializeObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerInstance = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMoreCards();
            }
        });
    }, options);

    observerInstance.observe(loader);

    return observerInstance;
}
const observer = initializeObserver();

function loadInitialCards() {
    // Obtener el número de tarjetas cargadas previamente
    const previouslyLoaded = parseInt(sessionStorage.getItem(getStorageKeyPrefix() + 'cardsLoaded') || "0");

    // Si el usuario ya había cargado algunas tarjetas, cargar ese número. Si no, cargar el valor predeterminado.
    let cardsToLoad = previouslyLoaded > 0 ? previouslyLoaded : (window.matchMedia("(max-width: 768px)").matches ? 3 : 6);

    if (loaded + cardsToLoad > entriesElements.length) {
        cardsToLoad = entriesElements.length - loaded;
    }

    const newEntries = entriesElements.slice(loaded, loaded + cardsToLoad);
    newEntries.forEach(renderEntry);
    loaded += newEntries.length;

    if (loaded >= entriesElements.length && observer) {
        observer.unobserve(loader);
    }

    // Si ya hemos visitado la página y hemos hecho scroll, ir a esa posición
    if (previouslyLoaded > 0 && sessionStorage.getItem(getStorageKeyPrefix() + 'userScroll')) {
        const userScroll = parseInt(sessionStorage.getItem(getStorageKeyPrefix() + 'userScroll'));
        setTimeout(() => {
            window.scrollTo({
                top: userScroll,
                behavior: 'smooth'
            });
        }, 100);
    }
}

function loadMoreCards() {
    let cardsToLoad = window.matchMedia("(max-width: 768px)").matches ? 3 : 6;

    if (loaded + cardsToLoad > entriesElements.length) {
        cardsToLoad = entriesElements.length - loaded;
    }

    const newEntries = entriesElements.slice(loaded, loaded + cardsToLoad);
    newEntries.forEach(renderEntry);
    loaded += newEntries.length;

    if (loaded >= entriesElements.length && observer) {
        observer.unobserve(loader);
    }

    // Guardar el número de tarjetas cargadas en sessionStorage
    sessionStorage.setItem(getStorageKeyPrefix() + 'cardsLoaded', loaded);
}
loadMoreCards();

// Cargar tarjetas iniciales
loadInitialCards();

// Escuchar scroll para almacenar la posición
window.addEventListener('scroll', () => {
    sessionStorage.setItem(getStorageKeyPrefix() + 'userScroll', window.scrollY);
});


