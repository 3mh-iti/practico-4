// Datos de ejemplo (se usan si no existe persistencia)
const ejemplo = [
  { id: crypto.randomUUID(), nombre: "Guitarra Clásica", precio: 15000 },
  { id: crypto.randomUUID(), nombre: "Amplificador 15W", precio: 8500 },
  { id: crypto.randomUUID(), nombre: "Set de Cuerdas", precio: 800 },
];

let inventario = [];

const formulario = document.querySelector("#formulario-producto");
const inptNombre = document.querySelector("#nombre");
const inptPrecio = document.querySelector("#precio");
const inptId = document.querySelector("#id");

function guardarInventario() {
  localStorage.setItem('inventario', JSON.stringify(inventario));
}

function cargarInventario() {
  const raw = localStorage.getItem('inventario');
  if (raw) {
    try {
      inventario = JSON.parse(raw);
    } catch (err) {
      inventario = ejemplo.slice();
      guardarInventario();
    }
  } else {
    inventario = ejemplo.slice();
    guardarInventario();
  }
}

function guardarSesionFormulario() {
  const estado = { nombre: inptNombre.value, precio: inptPrecio.value, id: inptId.value };
  sessionStorage.setItem('formProducto', JSON.stringify(estado));
}

function restaurarSesionFormulario() {
  const raw = sessionStorage.getItem('formProducto');
  if (!raw) return;
  try {
    const estado = JSON.parse(raw);
    if (estado.nombre) inptNombre.value = estado.nombre;
    if (estado.precio) inptPrecio.value = estado.precio;
    if (estado.id) {
      inptId.value = estado.id;
      formulario.querySelector("button").textContent = "Modificar articulo";
    }
  } catch (err) {
    // ignore
  }
}

inptNombre.addEventListener('input', guardarSesionFormulario);
inptPrecio.addEventListener('input', guardarSesionFormulario);

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = inptNombre.value.trim();
  const precio = inptPrecio.value;
  const id = inptId.value;
  if (id) {
    inventario = inventario.map(function (producto) {
      if (producto.id === id)
        return { nombre: nombre, precio: precio, id: id };
      return producto;
    });
    inptId.value = "";
    formulario.reset();
    sessionStorage.removeItem('formProducto');
    guardarInventario();
    renderizarInventario();
    formulario.querySelector("button").textContent = "Guardar Artículo";
    return;
  }
  const producto = { nombre, precio, id: crypto.randomUUID() };
  inventario.push(producto);
  guardarInventario();
  renderizarInventario();
  formulario.reset();
  sessionStorage.removeItem('formProducto');
});

function renderizarInventario() {
  let contenedor = document.getElementById("listado");
  contenedor.innerHTML = "";

  inventario.forEach(function (producto) {
    const tarjeta = document.createElement("li");
    tarjeta.dataset.productId = producto.id;
    tarjeta.classList.add("tarjeta-producto");
    const nombre = document.createElement("p");
    nombre.classList.add("tarjeta-nombre");
    const precio = document.createElement("p");
    precio.classList.add('tarjeta-precio');
    const modificar = document.createElement("button");
    modificar.classList.add("tarjeta-button");
    const eliminar = document.createElement("button");
    eliminar.classList.add("tarjeta-button", "tarjeta-eliminar");

    nombre.textContent = producto.nombre;
    precio.textContent = "$" + producto.precio;
    modificar.textContent = "Editar";
    eliminar.textContent = "Eliminar";

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(modificar);
    tarjeta.appendChild(eliminar);
    contenedor.append(tarjeta);

    tarjeta.addEventListener("click", function (e) {
      e.preventDefault();
      tarjeta.classList.toggle("producto-seleccionado");
    });

    modificar.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      inptNombre.value = producto.nombre;
      inptPrecio.value = producto.precio;
      inptId.value = producto.id;
      formulario.querySelector("button").textContent = "Modificar articulo";
      guardarSesionFormulario();
    });

    eliminar.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!confirm('¿Eliminar este artículo?')) return;
      inventario = inventario.filter(p => p.id !== producto.id);
      guardarInventario();
      renderizarInventario();
    });
  });
}

// Carga inicial
cargarInventario();
restaurarSesionFormulario();
renderizarInventario();
