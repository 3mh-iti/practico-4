const formulario = document.querySelector("#formulario-producto");
const buscador = document.querySelector("#buscador");

let inventario = [
  { nombre: "Guitarra Clásica", precio: 15000, id: 1 },
  { nombre: "Amplificador 15W", precio: 8500, id: 2 },
  { nombre: "Set de Cuerdas", precio: 800, id: 3 },
];

let idEditando = null;

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

    let BtnEditar = document.createElement("button");
    BtnEditar.classList.add("tarjeta-btn-editar");
    BtnEditar.textContent = "Editar";

    BtnEditar.dataset.id = articulo.id;

    section.appendChild(artNombre);
    section.appendChild(artPrecio);
    section.appendChild(BtnEditar);
    contenedor.appendChild(section);
  });
}

renderizarInventario();

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombreInput = document.getElementById("nombre");
  let precioInput = document.getElementById("precio");

  if (idEditando !== null) {
    let articulo = inventario.find((articulo) => articulo.id == idEditando);
    if (articulo) {
      articulo.nombre = nombreInput.value;
      articulo.precio = Number(precioInput.value);
    }
    idEditando = null;
  } else {
    let nuevoId = inventario.lastIndexOf(inventario[inventario.length - 1]) + 2;
    let nuevoArticulo = {
      nombre: nombreInput.value,
      precio: Number(precioInput.value),
      id: nuevoId,
    };
    inventario.push(nuevoArticulo);
  }

  renderizarInventario();

  nombreInput.value = "";
  precioInput.value = "";
});

buscador.addEventListener("keyup", function (e) {
  let textoBuscado = buscador.value.toLowerCase();

  if (textoBuscado === "") {
    renderizarInventario();
    2;
    return;
  }

  let filtrado = inventario.filter(function (articulo) {
    return articulo.nombre.toLowerCase().includes(textoBuscado);
  });

  renderizarInventario(filtrado);
});

document.getElementById("listado").addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("tarjeta-btn-editar")) {
    let id = event.target.dataset.id;
    const encontrado = inventario.find((articulo) => articulo.id == id);

    formulario.nombre.value = encontrado.nombre;
    formulario.precio.value = encontrado.precio;

    idEditando = encontrado.id;

    return;
  }

  let tarjeta = event.target.closest(".tarjeta-producto");
  if (tarjeta) {
    tarjeta.classList.toggle("producto-seleccionado");
  }
});
