
const fetchAndDisplayCodeSnippets = () => {
    const snippets = [
        { snippetId: "snippet1", snippetUrl: `/blog/entrada-uno/snippets/snippet1.txt` },
        { snippetId: "snippet2", snippetUrl: `/blog/entrada-uno/snippets/snippet2.txt` },
        { snippetId: "snippet3", snippetUrl: `/blog/entrada-uno/snippets/snippet3.txt` },
        { snippetId: "snippet4", snippetUrl: `/blog/entrada-uno/snippets/snippet4.txt` },
        { snippetId: "snippet5", snippetUrl: `/blog/entrada-uno/snippets/snippet5.txt` },
        { snippetId: "snippet6", snippetUrl: `/blog/entrada-uno/snippets/snippet6.txt` },
        { snippetId: "snippet7", snippetUrl: `/blog/entrada-uno/snippets/snippet7.txt` },
        { snippetId: "snippet8", snippetUrl: `/blog/entrada-uno/snippets/snippet8.txt` }
    ];

    for(let item of snippets){
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
    }     
};

window.addEventListener("DOMContentLoaded", fetchAndDisplayCodeSnippets);