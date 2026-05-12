const formulario = document.querySelector("#formulario-producto");
const nombre = document.querySelector("#nombre")
const precio = document.querySelector("#precio")

let datos = {
    nombre: nombre.input,
    precio: precio.input
}

let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 } 
];

formulario.addEventListener('submit', function submit(){
    event.preventDefault;
    inventario.push(datos);
    renderizarInventario();
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

// Carga inicial
renderizarInventario();
