let inventario = [
  { nombre: "Guitarra Clásica", precio: 15000, id: 0 },
  { nombre: "Amplificador 15W", precio: 8500, id: 1 },
  { nombre: "Set de Cuerdas", precio: 800, id: 2 },
];

const formulario = document.querySelector("form");
const inptNombre = document.querySelector("#nombre");
const inptPrecio = document.querySelector("#precio");
const busqueda = document.querySelector("#busqueda");
const ideado = document.querySelector("#ideado");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = inptNombre.value;
  const precio = inptPrecio.value;
  const id = ideado.value;
  if (ideado) {
    let ids = ideado.value;
    cambiar(ids);
    ideado.value = "";
    renderizarInventario(inventario);
    formulario.reset();
    return;
  }
  const idnuevo = inventario.length;

  const producto = {
    nombre,
    precio,
    id: idnuevo,
  };
  inventario.push(producto);
  renderizarInventario(inventario);
  formulario.reset();
});

function renderizarInventario(arreglo) {
  const contenedor = document.getElementById("listado");
  contenedor.innerHTML = "";

  arreglo.forEach((i, index) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-producto";
    tarjeta.setAttribute("data-indice", i.id);

    const nombre = document.createElement("p");
    nombre.className = "tarjeta-nombre";
    nombre.textContent = i.nombre;

    const precio = document.createElement("p");
    precio.className = "tarjeta-precio";
    precio.textContent = "$" + i.precio;

    const edit = document.createElement("button");
    edit.textContent = "Editar";

    const borrar = document.createElement("button");
    borrar.textContent = "Borrar";
    borrar.style.backgroundColor = "red";

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(edit);
    tarjeta.appendChild(borrar);

    tarjeta.addEventListener("click", function (e) {
      tarjeta.classList.toggle("producto-seleccionado");
    });

    edit.addEventListener("click", function (e) {
      e.preventDefault();
      tarjeta.classList.toggle("producto-seleccionado");

      inptNombre.value = i.nombre;
      inptPrecio.value = i.precio;
      ideado.value = i.id;
    });

    borrar.addEventListener("click", function (e) {
      inventario.splice(index, 1);
      renderizarInventario(inventario);
    });

    contenedor.appendChild(tarjeta);
  });
}

function cambiar(id) {
  inventario[id].precio = inptPrecio.value;
  inventario[id].nombre = inptNombre.value;
}

busqueda.addEventListener("keyup", function (e) {
  let texto = busqueda.value.toLowerCase();
  if (texto == "") {
    renderizarInventario(inventario);
    return;
  }
  let filtrados = inventario.filter(function (inventario) {
    return (
      inventario.nombre.toLowerCase().includes(texto) ||
      inventario.precio == texto
    );
  });
  console.log(filtrados);
  renderizarInventario(filtrados);
});

// Carga inicial
renderizarInventario(inventario);
