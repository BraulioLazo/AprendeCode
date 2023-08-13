// renderEntries.js

let loaded = 0;

const container = document.querySelector('.cards');
container.innerHTML = "";

const loader = document.createElement('div');
loader.id = 'loader';
container.appendChild(loader);

function renderEntry(entry) {
    const card = document.createElement('div');
    card.classList.add('card');

    const anchorForImage = document.createElement('a');
    anchorForImage.href = entry.link;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('card__image-container');

    const image = document.createElement('img');
    image.src = entry.imageUrl;
    image.alt = entry.altText;
    image.classList.add('card__image');
    image.setAttribute('decoding', 'async');
    image.setAttribute('loading', 'async');
    image.setAttribute('alt', entry.imageAlt)

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

    container.insertBefore(card, loader);
}

function loadMoreCards() {
    const newEntries = entriesElements.slice(loaded, loaded + 9);
    newEntries.forEach(renderEntry);
    loaded += newEntries.length;

    // If all entries are loaded, unobserve the loader.
    if (loaded >= entriesElements.length) {
        observer.unobserve(loader);
    }
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            loadMoreCards();
        }
    });
}, options);

observer.observe(loader);
