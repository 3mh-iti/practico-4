const form = document.querySelector("form")
const inputNombre = document.getElementById("nombre")
const inputPrecio = document.getElementById("precio")

let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
];

function actualizarTarjetas() {
    let tarjetas = document.querySelectorAll(".tarjeta-producto")
    tarjetas.forEach(function (e) {
        e.addEventListener("click", function () {
            e.classList.toggle("producto-seleccionado")
        })
    })
}

actualizarTarjetas()

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

    actualizarTarjetas()
}

// Carga inicial
renderizarInventario();

form.addEventListener("submit", function (e) {
    e.preventDefault()

    let nombre = inputNombre.value
    let precio = parseInt(inputPrecio.value)

    inventario.push({nombre: nombre, precio: precio})

    renderizarInventario()

    inputNombre.value = ""
    inputPrecio.value = ""
})