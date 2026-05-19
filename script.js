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
    let htmlGenerado = "";

    for (let i = 0; i < inventario.length; i++) {
        let articulo = inventario[i];
        htmlGenerado += "<article class='tarjeta-producto' data-indice='" + i + "'>";
        htmlGenerado += "<article class='tarjeta-nombre'>" + articulo.nombre + "</article>";
        htmlGenerado += "<article class='tarjeta-precio'>$" + articulo.precio + "</article>";
        htmlGenerado += "</article>";
    }
    contenedor.innerHTML = htmlGenerado;
}
const formulario = document.getElementById("formulario-producto");

formulario.addEventListener("submit", function(evento) {
    
    evento.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const nuevoProducto = { nombre, precio };
    
    inventario.push(nuevoProducto);
    
    renderizarInventario();
    asignarEventosATarjetas();  
    formulario.reset();
});
function clicktarjetas() {
    const tarjetas = document.querySelectorAll(".tarjeta-producto");
    
    for (let i = 0; i < tarjetas.length; i++) {
        tarjetas[i].addEventListener("click", function() {
            tarjetas[i].classList.toggle("producto-seleccionado");
        });
    }
}

// Carga inicial
renderizarInventario();

clicktarjetas();