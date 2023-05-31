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