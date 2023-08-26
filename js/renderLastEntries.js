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
        lastEntriesFrontendContainer.innerHTML += renderEntryContent(frontendCardContent[index]);
    }
}
renderLastEntries();