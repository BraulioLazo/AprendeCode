/* 
1. Definir todos los enlaces con funcionalidad de "scrollIntoView":
   PARA CADA enlace CON atributo "data-target":
     A. El valor del "data-target" es el selector del destino, por ejemplo "#miSeccion".
     B. Asegurarse de que este enlace apunte al destino deseado (ya sea en la página actual o en otra página).

2. Definir todos los destinos que los enlaces apuntan:
   PARA CADA sección o destino:
     A. Deben tener un ID que coincida con el valor del "data-target" sin el "#".
     B. Este ID se usará para desplazarse suavemente hacia esa sección.

3. Si un enlace apunta a otra página PERO quiere desplazarse a una sección específica en esa página:
   A. Asegurarse de que el enlace tenga el "data-target" con el selector del destino en la página externa.
   B. Asegurarse de que la página externa también tenga el mismo script y el elemento con el ID correspondiente.
*/

document.querySelectorAll("[data-target]").forEach(btn => {
    btn.addEventListener("click", function (e) {
        const targetSelector = btn.getAttribute('data-target');
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }

        else {
            const destinationUrl = btn.getAttribute('href');
            if (destinationUrl) {
                e.preventDefault();
                window.location.href = destinationUrl + "?target=" + targetSelector.substring(1);
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const urlParams = new URLSearchParams(window.location.search);
        const target = urlParams.get("target");
        if (target) {
            const elemento = document.querySelector("#" + target);
            if (elemento) {
                elemento.scrollIntoView({ behavior: 'smooth' });
                history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }, 100);
});

