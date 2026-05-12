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
    contenedor.innerHTML = ""
    
    inventario.forEach(function (e, i) {
        const elemento = document.createElement("article")
        elemento.classList.add("tarjeta-producto")
        elemento.setAttribute("data-indice", i)
        elemento.innerHTML += "<article class='tarjeta-nombre'>" + e.nombre + "</article>"
        elemento.innerHTML += "<article class='tarjeta-precio'>$" + e.precio + "</article>"

        contenedor.appendChild(elemento)
    })

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