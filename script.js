const form = document.querySelector("form")
const inputNombre = document.getElementById("nombre")
const inputPrecio = document.getElementById("precio")

let arrEjemplo = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
];

let inventario = [{ nombre: "Guitarra Clásica", precio: 15000 }]

const inventarioAlmacenado = sessionStorage.getItem("inventario")
if (inventarioAlmacenado) {
    inventario = JSON.parse(inventarioAlmacenado)
}

let alertaMostrada = false

function getArrayEnUso() {
    if (inventario.length === 0) {
        if (arrEjemplo.length === 3 && alertaMostrada === false) {
            alert("inventario vacio cargando ejemplo")
            alertaMostrada = true
            return arrEjemplo
        }
        return arrEjemplo
    }else{
        return inventario
    }
}

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
    arrayEnUso = getArrayEnUso()
    let contenedor = document.getElementById("listado");
    contenedor.innerHTML = ""
    
    arrayEnUso.forEach(function (e, i) {
        const elemento = document.createElement("article")
        elemento.classList.add("tarjeta-producto")
        elemento.setAttribute("data-indice", i)
        elemento.innerHTML += "<article class='tarjeta-nombre'>" + e.nombre + "</article>"
        elemento.innerHTML += "<article class='tarjeta-precio'>$" + e.precio + "</article>"
        elemento.innerHTML += "<button id='modificar'>Modificar</button>"
        elemento.innerHTML += "<button id='eliminar'>Eliminar</button>"

        contenedor.appendChild(elemento)

        const btnModificar = elemento.querySelector("button#modificar")
            btnModificar.addEventListener("click", function (event) {
            elemento.classList.toggle("producto-seleccionado")
            form.setAttribute("modificar", true)
            form.setAttribute("data-indice", i)
            console.log("activo" + i)

            modificarForm()
        })


        const btnEliminar = elemento.querySelector("button#eliminar")
            btnEliminar.addEventListener("click", function () {
            elemento.classList.toggle("producto-seleccionado")
            const indice = elemento.getAttribute("data-indice")
            arrayEnUso.splice(indice, 1)

            sessionStorage.setItem("inventario", JSON.stringify(inventario))
            renderizarInventario()
        })
        form.setAttribute("modificar", false)
    })

    actualizarTarjetas()
}

// Carga inicial
renderizarInventario();

inputNombre.addEventListener("input", function () {
    sessionStorage.setItem("nombre", inputNombre.value)
})

inputPrecio.addEventListener("input", function () {
    sessionStorage.setItem("precio", inputPrecio.value)
})

document.addEventListener("DOMContentLoaded", function () {
    inputNombre.value = sessionStorage.getItem("nombre") || ""
    inputPrecio.value = sessionStorage.getItem("precio") || ""
})

//TODO - que se guarde los inputs

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const modificar = form.getAttribute("modificar")

    if (modificar === "true") {
        const indice = form.getAttribute("data-indice")


        arrayEnUso[indice].nombre = sessionStorage.getItem("nombre")
        arrayEnUso[indice].precio = sessionStorage.getItem("precio")

        sessionStorage.setItem("inventario", JSON.stringify(inventario))
        renderizarInventario()
        
        inputNombre.value = ""
        inputPrecio.value = ""
    }else{
        let nombre = inputNombre.value
        let precio = parseInt(inputPrecio.value)

        inventario.push({ nombre: nombre, precio: precio })
        sessionStorage.setItem("inventario", JSON.stringify(inventario))

        renderizarInventario()

        inputNombre.value = ""
        inputPrecio.value = ""
    }
})

function modificarForm() {
    arrayEnUso = getArrayEnUso()
    const modificar = form.getAttribute("modificar")
    if (modificar === "true") {
        const indice = form.getAttribute("data-indice")
        inputNombre.value = arrayEnUso[indice].nombre
        inputPrecio.value = arrayEnUso[indice].precio

        console.log(arrayEnUso)
    }
}