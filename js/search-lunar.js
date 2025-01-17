document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".cards");

    // Determinar la categoría basada en la URL
    let category = "frontend"; // por defecto
    if (location.href.includes("/arduino/")) {
        category = "arduino";
    }

    // Filtrar las entradas según la categoría
    let entriesForCategory;
    if (category === "frontend") {
        entriesForCategory = frontendCardContent;
    } else if (category === "arduino") {
        entriesForCategory = arduinoCardContent;
    }

    const documents = entriesForCategory.map((doc, index) => ({
        ...doc,
        id: index
    }));

    let idx = lunr(function () {
        this.ref("id");
        this.field("title");
        this.field("keywords");

        documents.forEach((doc) => {
            this.add(doc);
        }, this);
    });

    document.querySelector('#search-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const query = document.querySelector('#search-input').value;
        const results = idx.search(query);

        // Limpiar tarjetas anteriores
        cardContainer.innerHTML = "";

        if (results.length > 0) {
            results.forEach((result) => {
                renderEntry(documents[result.ref]); // Usar la función renderEntry que ya tienes definida
            });
        } else {
            cardContainer.innerHTML = "<p>¡Hey, <strong>Coder</strong>! Parece que no hay <strong>coincidencias</strong> para tu búsqueda. ¿Qué tal si <strong>pruebas</strong> con otra <strong>palabra clave</strong>?</p>";
        }

        document.querySelector('#search-input').value = "";
    });
});
