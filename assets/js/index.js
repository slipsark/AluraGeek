/* Funcionalidad head search */
const searchClick = document.querySelector(".search__accion");
const searchInput = document.querySelector(".search__descripcion");

searchClick.addEventListener("click", ()=> {
  searchInput.classList.toggle("search__show")
})

//todo:: GET
const servidorProductos = ()=> {
  return fetch("http://localhost:3000/Productos")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
};

//todo:: POST
const crearProducto =(url, categoria, nombre, precio)=> {
  return fetch("http://localhost:3000/Productos", {
    method: "POST",
    headers:{
      "content-type": "application/json"
    },
    body: JSON.stringify({
      url,
      categoria,
      nombre, 
      precio,
      id: uuid.v4()
    })
  }).then(respuesta => {
    if(respuesta.ok) {
      return respuesta.body
    }
  })
  throw new Error("No se puede crear un producto")
} ; 

const eliminarProducto = (id)=> {
  return fetch (`http://localhost:3000/Productos/${id}`, {
    method: "DELETE"
  })
};

const detallesProductos = (id)=> {
  return fetch(`http://localhost:3000/Productos/${id}`)
  .then(respuesta=> respuesta.json())
};

const actualizarDatos = (url,categoria, nombre, precio, id)=> {
  return fetch(`http://localhost:3000/Productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({url,categoria, nombre, precio, id})
  })
    .then(respuesta=> respuesta)
    .catch(error=> console.log("Error"))
};

export const datosServidor = {
  servidorProductos,
  crearProducto,
  eliminarProducto,
  detallesProductos,
  actualizarDatos
};