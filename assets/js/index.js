/* Funcionalidad head search */
const searchClick = document.querySelector(".search__accion");
const searchInput = document.querySelector(".search__descripcion");

searchClick.addEventListener("click", ()=> {
  searchInput.classList.toggle("search__show")
})

/* Validació en acceso */
const usuario = document.querySelector(".user");
const pass = document.querySelector(".password");
const formAction = document.querySelector(".submit");
const alerta = document.querySelector(".alertas");

formAction.addEventListener("submit", (e)=> {
  e.preventDefault();
  const user = usuario.value;
  const passw = pass.value;

  user === "admin" && passw === "admin" ? window.location = "../Inventario/index.html" :
    alerta.innerHTML = "El usuario o la contraseña son incorrectos";
})