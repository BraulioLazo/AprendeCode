


const fetchAndDisplayCodeSnippets = (entryName, totalSnippets) => {

    const snippets = [];

    for (let i = 1; i <= totalSnippets; i++) {
        const snippetId = `snippet${i}`;
        const snippetUrl = `/frontend/${entryName}/snippets/${snippetId}.txt`;

        snippets.push({ snippetId, snippetUrl });
    }

    snippets.forEach(item => {
        fetch(item.snippetUrl)
            .then(response => response.text())
            .then(data => {
                let preElement = document.getElementById(item.snippetId);
                if (preElement) {
                    preElement.textContent = data;

                    Prism.highlightElement(preElement);
                }
            })
            .catch(error => console.error('Error:', error));
    });
};

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



const snippetFixHeight = () => {
    const javascriptSnippts = document.querySelectorAll(".snippet-javascript");
    javascriptSnippts.forEach(snippet => {
        const snippetPre = snippet.querySelector('pre');
        const snippetPreHeight = window.getComputedStyle(snippetPre).height;
        if (window.innerWidth >= 1024 && snippetPreHeight >= 320) {
            snippetPre.style.maxHeight = '320px';
            snippetPre.style.minHeight = '320px';

            console.log(window.getComputedStyle(snippetPre).height); 
        }
    });
};
