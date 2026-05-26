let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 },
];
function recargarTarjetas(){
const Tarjetas = document.querySelectorAll(".tarjeta-producto")
Tarjetas.forEach(function(e){
e.addEventListener("click", function(){
e.classList.toggle("producto-seleccionado")

});

});

}

recargarTarjetas()

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
