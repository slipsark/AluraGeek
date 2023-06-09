import { datosServidor } from "./index.js";

const formEditar = document.querySelector(".add_editar");

const obtenerInformacion = ()=> {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    console.log("Se ha producido un error");
  }

  const urlProducto = document.querySelector("#add");
  const categoriaProducto = document.querySelector("#categoria");
  const nombreProducto = document.querySelector("#producto-name");
  const precioProducto = document.querySelector("#precio");

  datosServidor.detallesProductos(id)
    .then(({url,categoria, nombre, precio})=> {
      urlProducto.value = url;
      categoriaProducto.value = categoria;
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
  const categoriaProducto = document.querySelector("#categoria").value;
  const nombreProducto = document.querySelector("#producto-name").value;
  const precioProducto = document.querySelector("#precio").value;

  datosServidor.actualizarDatos(urlProducto, categoriaProducto, nombreProducto, precioProducto, id)
    .then(()=> {
      window.location.href = "../Inventario/index.html";
    })
})