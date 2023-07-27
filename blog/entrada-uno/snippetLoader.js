window.addEventListener('DOMContentLoaded', (event) => {
    fetch('/blog/entrada-uno/snippets/snippet1.txt')
    .then(response => response.text())
    .then(data => {
        let preElement = document.querySelector('#snippet1');
        preElement.textContent = data;
    
        // Haz que Prisma.js resalte el nuevo código
        Prism.highlightElement(preElement);
    })
    .catch(error => console.error('Error:', error));
});
