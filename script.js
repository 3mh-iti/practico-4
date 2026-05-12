const formulario = document.querySelector("#seccion-formulario");

let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
];

function renderizarInventario() {
    let contenedor = document.getElementById("listado");
    let htmlGenerado = "";

    for (let i = 0; i < inventario.length; i++) {
        let articulo = inventario[i];
        htmlGenerado += "<div class='tarjeta-producto' data-indice='" + i + "'>";
        htmlGenerado += "<div class='tarjeta-nombre'>" + articulo.nombre + "</div>";
        htmlGenerado += "<div class='tarjeta-precio'>$" + articulo.precio + "</div>";
        htmlGenerado += "</div>";
    }

    contenedor.innerHTML = htmlGenerado;
}

// Carga inicial
renderizarInventario();

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    // Obtener los valores del formulario
    let nombreInput = document.getElementById("nombre");
    let precioInput = document.getElementById("precio");

    // Crear un nuevo artículo y agregarlo al inventario

    let nuevoArticulo = {
        nombre: nombreInput.value,
        precio: precioInput.value
    };

    inventario.push(nuevoArticulo);
    renderizarInventario();

    // Limpiar los campos del formulario
    nombreInput.value = "";
    precioInput.value = "";
});