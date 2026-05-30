let inventario = [
<<<<<<< Updated upstream
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
];

=======
    { id: 1, nombre: "Guitarra Clásica", precio: 15000 },
    { id: 2, nombre: "Amplificador 15W", precio: 8500 },
    { id: 3, nombre: "Set de Cuerdas", precio: 800 },
];

const formulario = document.querySelector("form");
const inptNombre = document.querySelector("#nombre");
const inptPrecio = document.querySelector("#precio");

let idEditando = 0;

function generarId() {
    let nuevoId = 1;
    inventario.forEach(function (producto) {
     if (producto.id >= nuevoId) {
     nuevoId = producto.id + 1;
        }
    });
    return nuevoId;
}

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = inptNombre.value;
    const precio = inptPrecio.value;

    if (idEditando === 1) {
        const producto = { id: generarId(), nombre: nombre, precio: precio };
        inventario.push(producto);
    } else {
        inventario.forEach(function (producto) {
            if (producto.id === idEditando) {
                producto.nombre = nombre;
                producto.precio = precio;
            }
        });
        idEditando = 1;
    }

    renderizarInventario();
    formulario.reset();
});

>>>>>>> Stashed changes
function renderizarInventario() {
    let contenedor = document.getElementById("listado");
    let htmlGenerado = "";

<<<<<<< Updated upstream
    inventario.forEach((articulo, i ) => {
        htmlGenerado += "<article class='tarjeta-producto' data-indice='" + i + "'>";
        htmlGenerado += "<div class='tarjeta-nombre'>" + articulo.nombre + "</div>";
        htmlGenerado += "<div class='tarjeta-precio'>$" + articulo.precio + "</div>";
        htmlGenerado += "</article>";
=======
    inventario.forEach(function (producto) {
        const tarjeta = document.createElement("li");
        tarjeta.classList.add("tarjeta-producto");

        const nombre = document.createElement("p");
        nombre.classList.add("tarjeta-nombre");

        const precio = document.createElement("p");
        precio.classList.add("tarjeta-precio");

        nombre.textContent = producto.nombre;
        precio.textContent = "$" + producto.precio;

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";

        btnEditar.addEventListener("click", function (e) {
            e.preventDefault
            idEditando = producto.id;
            inptNombre.value = producto.nombre;
            inptPrecio.value = producto.precio;
        });

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(btnEditar);
        contenedor.append(tarjeta);

        tarjeta.addEventListener("click", function (e) {
            e.preventDefault();
        });
>>>>>>> Stashed changes
    });


    contenedor.innerHTML = htmlGenerado;
    document.querySelectorAll(".tarjeta-producto").forEach(tarjetas => {
        tarjetas.addEventListener("click", function() {
            this.classList.toggle("producto-seleccionado");
        });
    });
    
}
 
let formulario = document.querySelector("#formulario-producto");
 
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
 
    let nombre = document.querySelector("#nombre").value.trim();
    let precio = parseFloat(document.querySelector("#precio").value);
 
    if (nombre === "" || isNaN(precio) || precio < 0) return;
 
    inventario.push({ nombre: nombre, precio: precio });
 
    renderizarInventario();
 
    //pa borrar
    document.querySelector("#nombre").value = "";
    document.querySelector("#precio").value = "";
});




renderizarInventario();