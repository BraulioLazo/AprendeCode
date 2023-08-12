document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".cards");

    let documents = entries.map((doc, index) => {
        return {
            ...doc,
            id: index
        };
    });

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

        let query = document.querySelector('#search-input').value;

        const cards = cardContainer.querySelectorAll(".card");
        cards.forEach((card) => {
            card.style.display = 'none';
        });

        let results = idx.search(query);
        results.forEach((result) => {
            let card = cards[result.ref];
            card.style.display = 'flex';
        });

        document.querySelector('#search-input').value = "";
    });

    let searchButtons = [
        { name: "Todos", category: "all" },
        { name: "FrontEnd", category: "frontend" },
        { name: "Arduino", category: "arduino" },
    ];

    searchButtons.forEach(button => {
        let btn = document.createElement("button");
        btn.classList.add("card-search");

        btn.textContent = button.name;
        btn.addEventListener("click", function () {
            performSearch(button.category);
        });

        document.querySelector("#search-buttons").appendChild(btn);
    });

    function performSearch(category) {
        const cards = cardContainer.querySelectorAll(".card");
        cards.forEach(card => {
            card.style.display = "none";
        });

        if (category === "all") {
            cards.forEach(card => {
                card.style.display = "flex";
            });
        } else {
            let results = idx.search(category); // Buscamos directamente por categoría
            results.forEach(result => {
                let card = cards[result.ref];
                card.style.display = "flex";
            });
        }
    }
});
