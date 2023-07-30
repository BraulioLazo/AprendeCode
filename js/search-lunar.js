document.addEventListener("DOMContentLoaded", () => {

     // Obtener el contenedor de las tarjetas
     const cardContainer = document.querySelector(".cards");

     const cards = cardContainer.querySelectorAll(".card");
 
     // Iterar sobre las tarjetas y asignarles el atributo data-id
     cards.forEach((card, index) => {
         card.setAttribute("data-id", index);
     });

    let documents = Array.from(document.querySelectorAll(".card")).map((card) => {
        const keywords = card.getAttribute("data-keywords").split(","); // Divide las palabras clave en un array
        const title = card.getAttribute("data-title").split(",");

        return {
            id: card.getAttribute("data-id"),
            title: title,
            keywords: keywords, // Usa el array de palabras clave
        };

    });

    documents = documents.reverse();


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

        let cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            card.style.display = 'none';
        });

        let results = idx.search(query);
        results.forEach((result) => {
            let card = cards[result.ref];
            card.style.display = 'flex';
            console.log(card);
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
            let results = idx.search("category-" + category); // Agrega el prefijo "category-" a la categoría
            results.forEach(result => {
                let card = cards[result.ref];
                card.style.display = "flex";
                console.log(result);
            });
        }
    }
    

})

