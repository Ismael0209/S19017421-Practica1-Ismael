document
    .getElementById("menu_hamburguesa")
    .addEventListener("click", mostrar_Menu);

function mostrar_Menu() {
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_cosa");
    var elemento2 = document.getElementById("icon_cosa2");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
};
