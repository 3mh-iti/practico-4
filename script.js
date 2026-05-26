const formulario = document.querySelector("#formulario-producto");
const buscador = document.querySelector("#buscador");
const popup = document.querySelector("#dialogo-confirmacion");
const btnConfirmar = document.querySelector("#confirmar-eliminar");
const btnCancelar = document.querySelector("#cancelar-eliminar");
const mensaje = document.querySelector("#mensaje");
let idParaBorrar = null;

let inventario = JSON.parse(localStorage.getItem("inventario")) || [
  { nombre: "Guitarra Clásica", precio: 15000, id: 1 },
  { nombre: "Amplificador 15W", precio: 8500, id: 2 },
  { nombre: "Set de Cuerdas", precio: 800, id: 3 },
];

let idEditando = null;

function guardarEnLocalStorage() {
  localStorage.setItem("inventario", JSON.stringify(inventario));
}

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

    let BtnBorrar = document.createElement("button");
    BtnBorrar.classList.add("tarjeta-btn-borrar");
    BtnBorrar.textContent = "Borrar";

    BtnEditar.dataset.id = articulo.id;
    BtnBorrar.dataset.id = articulo.id;

    section.appendChild(artNombre);
    section.appendChild(artPrecio);
    section.appendChild(BtnEditar);
    section.appendChild(BtnBorrar);
    contenedor.appendChild(section);
  });
}

renderizarInventario();

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombreInput = document.getElementById("nombre");
  let precioInput = document.getElementById("precio");

  sessionStorage.setItem("ultimoNombre", nombreInput.value);
  sessionStorage.setItem("ultimoPrecio", precioInput.value);

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

  guardarEnLocalStorage();
  renderizarInventario();

  nombreInput.value = "";
  precioInput.value = "";
});

buscador.addEventListener("keyup", function () {
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

// Manejo de clicks en el listado (Corregido)
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

  if (event.target.classList.contains("tarjeta-btn-borrar")) {
    if (idEditando !== null) {
      return;
    }
    idParaBorrar = event.target.dataset.id;

    const articuloAEliminar = inventario.find(
      (articulo) => articulo.id == idParaBorrar,
    );
    mensaje.textContent =
      "¿Confirma que desea eliminar " + articuloAEliminar.nombre + "?";
    popup.showModal();
    return;
  }

  let tarjeta = event.target.closest(".tarjeta-producto");
  if (tarjeta) {
    tarjeta.classList.toggle("producto-seleccionado");
  }
});

btnConfirmar.addEventListener("click", function () {
  if (idParaBorrar !== null) {
    inventario = inventario.filter((articulo) => articulo.id != idParaBorrar);

    guardarEnLocalStorage();
    renderizarInventario();

    popup.close();
    idParaBorrar = null;
  }
});

btnCancelar.addEventListener("click", function () {
  popup.close();
  idParaBorrar = null;
});
