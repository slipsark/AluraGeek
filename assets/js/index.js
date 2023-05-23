/* Funcionalidad head search */
const searchClick = document.querySelector(".search__accion");
const searchInput = document.querySelector(".search__descripcion");

searchClick.addEventListener("click", ()=> {
  searchInput.classList.toggle("search__show")
})