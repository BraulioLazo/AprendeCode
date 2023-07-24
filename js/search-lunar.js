document.addEventListener("DOMContentLoaded", () => {
    let documents = Array.from(document.querySelectorAll('.card')).map((card) => {
        return {
            id: card.getAttribute('data-id'),
            title: card.getAttribute('data-title'),
            keywords: card.getAttribute('data-keywords')
        };
    });

    let idx = lunr(function () {
        this.ref('id');
        this.field('title');
        this.field('keywords');

        documents.forEach((doc) => {
            this.add(doc);
        }, this);
    });


    document.querySelector('#search-form').addEventListener('submit', (event) => {
        event.preventDefault();

        let query = document.querySelector('#search-input').value;
        let words = query.split(" ");

        let cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            card.style.display = 'none';
        });

        words.forEach(word => {
            let results = idx.search(word);
            results.forEach((result) => {
                let card = cards[result.ref];
                card.style.display = 'block';
            });
        });
    });


    let serachButtons = [
        { name: "Todos", category: "all" },
        { name: "FrontEnd", category: "frontend" },
        { name: "Arduino", category: "arduino" },
    ];

    serachButtons.forEach(button => {
        let btn = document.createElement("button");
        btn.classList.add("card-search");

        btn.textContent = button.name;
        btn.addEventListener("click", function () {
            performSearch(button.category);
        });

        document.querySelector("#search-buttons").appendChild(btn);
    });

    function performSearch(category) {
        let cards = document.querySelectorAll('.card');
    
        cards.forEach(card => {
            card.style.display = "none";
        });
    
        if (category === "all") {
            cards.forEach(card => {
                card.style.display = "flex";
            });
        } else {
            let results = idx.search(category);
            results.forEach(result => {
                let card = cards[result.ref];
                card.style.display = "flex";
            });
        }
    }
    
})

