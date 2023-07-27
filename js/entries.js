function copyToClipboard() {
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-copy-target');
            const target = document.querySelector(targetId);

            navigator.clipboard.writeText(target.textContent)
                .then(() => {
                    button.textContent = "Copiado"; 
                })
                .catch(err => console.log('Error copying to clipboard', err));

            setTimeout(() => {
                button.textContent = "Copiar"; 
            }, 3000);  
        });
    });
}

window.addEventListener("DOMContentLoaded", copyToClipboard);
