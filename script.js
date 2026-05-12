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
        htmlGenerado += "<article class='tarjeta-producto' data-indice='" + i + "'>";
        htmlGenerado += "<li class='tarjeta-nombre'>" + articulo.nombre + "</li>";
        htmlGenerado += "<li class='tarjeta-precio'>$" + articulo.precio + "</li>";
        htmlGenerado += "</article>";
    }

    contenedor.innerHTML = htmlGenerado;
}

// Carga inicial
renderizarInventario();
