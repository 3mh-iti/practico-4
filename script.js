let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
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
    let htmlGenerado = "";

    for (let i = 0; i < inventario.length; i++) {
        let articulo = inventario[i];
        htmlGenerado += "<li class='tarjeta-producto' data-indice='" + i + "'>";
        htmlGenerado += "<p class='tarjeta-nombre'>" + articulo.nombre + "</p>";
        htmlGenerado += "<p class='tarjeta-precio'>$" + articulo.precio + "</p>";
        htmlGenerado += "</li>";
    }
    contenedor.innerHTML = htmlGenerado;

    const productos = document.querySelectorAll(".tarjeta-producto");
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        producto.addEventListener("click", function (e) {
            producto.classList.toggle("producto-seleccionado");
        });
    }
}

// Carga inicial
renderizarInventario();
