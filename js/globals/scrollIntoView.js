/* 
   Función para realizar un desplazamiento suave (SMOOTH SCROLL) hacia secciones o puntos específicos del sitio.
   Instrucciones de uso:
   1. Añade la clase "scrollTo" al elemento desde el cual deseas activar el desplazamiento.
   2. Asigna un atributo "data-target" al mismo elemento, indicando el ID de la sección destino.
   Ejemplo: Si deseas desplazarte a una sección con el ID "miSeccion", tu elemento debe lucir así:
   <a href="#" class="scrollTo" data-target="#miSeccion">Ir a Mi Sección</a>
*/

document.querySelectorAll(".scrollTo").forEach(btn => {
    btn.addEventListener("click", function () {
        const targetSelector = btn.getAttribute('data-target');
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});