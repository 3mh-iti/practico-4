const formulario = document.querySelector("#formulario-producto");
const buscador = document.querySelector("#buscador");

let inventario = [
  { nombre: "Guitarra Clásica", precio: 15000 },
  { nombre: "Amplificador 15W", precio: 8500 },
  { nombre: "Set de Cuerdas", precio: 800 },
];

function renderizarInventario(listaProductos = inventario) {
  let contenedor = document.querySelector("#listado");
  contenedor.replaceChildren();

  listaProductos.forEach((articulo) => {
    let section = document.createElement("section");
    section.classList.add("tarjeta-producto");

    let artNombre = document.createElement("article");
    artNombre.classList.add("tarjeta-nombre");
    artNombre.textContent = articulo.nombre;

    let artPrecio = document.createElement("article");
    artPrecio.classList.add("tarjeta-precio");
    artPrecio.textContent = "$" + articulo.precio;

    section.appendChild(artNombre);
    section.appendChild(artPrecio);
    contenedor.appendChild(section);
  });
}

renderizarInventario();

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombreInput = document.getElementById("nombre");
  let precioInput = document.getElementById("precio");

  let nuevoArticulo = {
    nombre: nombreInput.value,
    precio: Number(precioInput.value),
  };

  inventario.push(nuevoArticulo);
  renderizarInventario();

  nombreInput.value = "";
  precioInput.value = "";
});

buscador.addEventListener("keyup", function (e) {
  let textoBuscado = buscador.value.toLowerCase();

  if (textoBuscado === "") {
    renderizarInventario();
    return;
  }

  let filtrado = inventario.filter(function (articulo) {
    return articulo.nombre.toLowerCase().includes(textoBuscado);
  });

  renderizarInventario(filtrado);
});

document.getElementById("listado").addEventListener("click", function (event) {
  event.preventDefault();

  let tarjeta = event.target.closest(".tarjeta-producto");
  if (tarjeta) {
    tarjeta.classList.toggle("producto-seleccionado");
  }
});
