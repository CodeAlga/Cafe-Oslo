function nav() {
  const lanz = document.querySelector("#enlace-menu");
  lanz.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu() {
  var despl = document.querySelector("#menu");
  despl.classList.toggle("menu-desplegado");
}

nav();
