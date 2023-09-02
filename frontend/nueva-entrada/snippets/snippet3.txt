var iconoMenu = document.querySelector(".icono_menu_desplegable");

function desplegarMenu(){
    var menuDesplegable = document.querySelector(".contenedor_paginas");
    menuDesplegable.classList.toggle("desplegar_menu");

}

iconoMenu.addEventListener("click", desplegarMenu);