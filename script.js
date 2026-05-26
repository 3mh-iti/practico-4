const form = document.querySelector("form")
const inputNombre = document.getElementById("nombre")
const inputPrecio = document.getElementById("precio")

let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
];

let tarjetas
function actualizarTarjetas() {
    tarjetas = document.querySelectorAll(".tarjeta-producto")
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
        elemento.innerHTML += "<button id='modificar'>Modificar</button>"

        contenedor.appendChild(elemento)

        const btnModificar = elemento.querySelector("button#modificar")
        btnModificar.addEventListener("click", function (event) {
            elemento.classList.toggle("producto-seleccionado")
            form.setAttribute("modificar", true)
            form.setAttribute("data-indice", i)
            console.log("activo" + i)

            modificarForm()
        })
        form.setAttribute("modificar", false)
    })

    actualizarTarjetas()
}

// Carga inicial
renderizarInventario();

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const modificar = form.getAttribute("modificar")

    if (modificar === "true") {
        const indice = form.getAttribute("data-indice")
        inventario[indice].nombre = inputNombre.value
        inventario[indice].precio = inputPrecio.value

        renderizarInventario()
        
        inputNombre.value = ""
        inputPrecio.value = ""
    }else{
        let nombre = inputNombre.value
        let precio = parseInt(inputPrecio.value)

        inventario.push({nombre: nombre, precio: precio})

        renderizarInventario()

        inputNombre.value = ""
        inputPrecio.value = ""
    }
})

function modificarForm(i) {
    const modificar = form.getAttribute("modificar")
    if (modificar === "true") {
        const indice = form.getAttribute("data-indice")
        inputNombre.value = inventario[indice].nombre
        inputPrecio.value = inventario[indice].precio

    }
}