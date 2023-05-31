import { datosServidor } from "./index.js";

const formEditar = document.querySelector(".add_editar");

const obtenerInformacion = ()=> {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    console.log("Se ha producido un error");
  }

  const urlProducto = document.querySelector("#add");
  const nombreProducto = document.querySelector("#producto-name");
  const precioProducto = document.querySelector("#precio");

  datosServidor.detallesProductos(id)
    .then(({url, nombre, precio})=> {
      urlProducto.value = url;
      nombreProducto.value = nombre;
      precioProducto.value = precio;
    })
};

obtenerInformacion();

formEditar.addEventListener("submit", (e)=> {
  e.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const urlProducto = document.querySelector("#add").value;
  const nombreProducto = document.querySelector("#producto-name").value;
  const precioProducto = document.querySelector("#precio").value;

  datosServidor.actualizarDatos(urlProducto, nombreProducto, precioProducto, id)
    .then(()=> {
      window.location.href = "../Inventario/index.html";
    })
})