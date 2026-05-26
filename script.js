let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 },
];

const formulario = document.querySelector("form");
const inptNombre = document.querySelector("#nombre");
const inptPrecio = document.querySelector("#precio");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = inptNombre.value;
    const precio = inptPrecio.value;
    const producto = {
        nombre,
        precio,
    }
    inventario.push(producto);
    renderizarInventario();
    formulario.reset();
});

function renderizarInventario() {
    let contenedor = document.getElementById("listado");
    contenedor.innerHTML = "";

    inventario.forEach(function(producto){
      const tarjeta = document.createElement("li");
      tarjeta.classList.add("tarjeta-producto");
      const nombre = document.createElement("p");
      nombre.classList.add("tarjeta-nombre");
      const precio = document.createElement("p");
      precio.classList.add('tarjeta-precio');

      nombre.textContent = producto.nombre;
      precio.textContent = "$"+producto.precio;

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(precio);
      contenedor.append(tarjeta);

      tarjeta.addEventListener("click", function(e){
        e.preventDefault();
        tarjeta.classList.toggle("producto-seleccionado");
      });
    });
}

// Carga inicial
renderizarInventario();
