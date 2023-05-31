import { datosServidor } from "./index.js";

const bodyCard = document.querySelector(".inventario__productos");

const crearCard = (url, nombre, precio, id)=> {
  const linea = document.createElement("div");
  const body = `
    <img src="${url}" alt="${nombre}" class="card__img">
    <span class="card__descripcion">${nombre}</span>
    <span class="card__precio">${precio}</span>
    <span class="id">${id}</span>
    <button class="eliminar card__accion"></button>
    <a href="../Editar-producto/index.html" class="editar card__accion"></a>
    
  `;
  linea.classList.add("producto__card")
  linea.classList.add("card")
  linea.innerHTML = body;

  return linea;
};

const listaProductos = ()=> {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();

    http.open("GET", "http://localhost:3000/Productos");
    http.send();
    http.onload = ()=> {
      const response = JSON.parse(http.response);

      http.status >= 400 ?reject(response) : resolve(response);

    }
  });;

  return promise;
};

listaProductos().then(data=> {
  data.forEach(({url, nombre, precio, id}) => {
    const crearbodyCard = crearCard(url, nombre, precio, id);

    bodyCard.appendChild(crearbodyCard);
  });
}).catch(error=> console.log("Ocurrió un error"))