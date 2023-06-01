import { datosServidor } from "./index.js";


const bodyCardHome = (url, nombre, precio, id)=> {
  const linea = document.createElement("div");
  const bodyHome = `

    <img src="${url}" alt="${nombre}" class="card__img">
    <span class="card__descripcion">${nombre}</span>
    <span class="card__precio">${precio}</span>
    <a href="#" class="card__enlace">Ver producto</a>

  `;

  linea.classList.add("producto__card");
  linea.classList.add("card");
  linea.innerHTML = bodyHome;

  return linea
};

const homeListaProductos = ()=> {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();

    http.open("GET", "http://localhost:3000/Productos");
    http.send();
    http.onload = ()=> {
      const response = JSON.parse(http.response);

      http.status >= 400 ? reject(response) : resolve(response);
    }
  });

  return promise
};

homeListaProductos().then(data=> {
  data.forEach(({url, categoria, nombre, precio, id}) => {
    const cardHome = bodyCardHome(url, nombre, precio, id);
    const carnicos = document.querySelector("#carnicos");
    const lacteos = document.querySelector("#lacteos");
    const snacks = document.querySelector("#snacks");

    if (categoria === "Cárnicos") {
      carnicos.appendChild(cardHome)
    }
    if (categoria === "Lácteos") {
      lacteos.appendChild(cardHome)
    }
    if (categoria === "Snacks") {
      snacks.appendChild(cardHome)
    }

  });
}).catch(error=> console.log(error))