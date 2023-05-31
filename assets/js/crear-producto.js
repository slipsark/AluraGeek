import { datosServidor } from "../js/index.js"

const formAgregarProducto = document.querySelector("#form-producto");

formAgregarProducto.addEventListener("submit", (e)=> {
  e.preventDefault();

  const urlProducto = document.querySelector("#add").value;
  const categoriaProducto = document.querySelector("#categoria").value;
  const nombreProducto = document.querySelector("#producto-name").value;
  const precioProducto = document.querySelector("#precio").value;

  datosServidor.crearProducto(
    urlProducto,
    categoriaProducto,
    nombreProducto,
    precioProducto
  ).then(()=> {
    window.location.href = "../Inventario/index.html";
  }).catch(error => console.log(error))
})