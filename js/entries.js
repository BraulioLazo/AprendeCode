function copiarAlPortaPapeles() {
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-copy-target');
            const target = document.querySelector(targetId);
            navigator.clipboard.writeText(target.textContent)
                .then(() => console.log('Copiado al portapapeles!'))
                .catch(err => console.log('Error al copiar al portapapeles', err));
        });
    });
}


window.addEventListener("DOMContentLoaded", () => {
    copiarAlPortaPapeles();
})

