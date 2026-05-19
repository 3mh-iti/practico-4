const formulario = document.querySelector("#formulario-producto");

let inventario = [
  { nombre: "Guitarra Clásica", precio: 15000 },
  { nombre: "Amplificador 15W", precio: 8500 },
  { nombre: "Set de Cuerdas", precio: 800 },
];

function renderizarInventario() {
  let contenedor = document.querySelector("#listado");
  contenedor.replaceChildren();

  // Se recorre el inventario y se crean las tarjetas de producto
  inventario.forEach((articulo) => {
    let section = document.createElement("section");
    section.classList.add("tarjeta-producto");

    let artNombre = document.createElement("article");
    artNombre.classList.add("tarjeta-nombre");
    artNombre.textContent = articulo.nombre;

    let artPrecio = document.createElement("article");
    artPrecio.classList.add("tarjeta-precio");
    artPrecio.textContent = "$" + articulo.precio;
    // Se agregan los elementos a la tarjeta y luego al contenedor
    section.appendChild(artNombre);
    section.appendChild(artPrecio);
    contenedor.appendChild(section);
  });
}

renderizarInventario();

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  // Obtener los valores del formulario
  let nombreInput = document.getElementById("nombre");
  let precioInput = document.getElementById("precio");

  // Crear un nuevo artículo y agregarlo al inventario

  let nuevoArticulo = {
    nombre: nombreInput.value,
    precio: precioInput.value,
  };

  inventario.push(nuevoArticulo);
  renderizarInventario();

  // Limpiar los campos del formulario
  nombreInput.value = "";
  precioInput.value = "";
});

// Agregar evento de clic a las tarjetas de producto
document.getElementById("listado").addEventListener("click", function (event) {
  event.preventDefault();

  let tarjeta = event.target.closest(".tarjeta-producto");
  if (tarjeta) {
    tarjeta.classList.toggle("producto-seleccionado");
  }
});
