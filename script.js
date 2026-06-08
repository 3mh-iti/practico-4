const formulario = document.querySelector("#formulario-producto");

let inventario = [
    { id: Math.random(), nombre: "Guitarra Clásica", precio: 15000 },
    { id: Math.random(), nombre: "Amplificador 15W", precio: 8500 },
    { id: Math.random(), nombre: "Set de Cuerdas", precio: 800 }
];

formulario.addEventListener('submit', function submit(event) {

    event.preventDefault();

    const nombre = document.querySelector("#nombre");
    const precio = document.querySelector("#precio");
    const modificar = document.querySelector("#modificar");

    const datos = {
        nombre: nombre.value,
        precio: precio.value,
        id: Math.random()
    };
    inventario.push(datos);

    renderizarInventario();

    nombre.value = "";
    precio.value = "";
});

function renderizarInventario() {
    let contenedor = document.getElementById("listado");
    contenedor.innerHTML = "";
    inventario.forEach(articulo => {
        const tarjeta = document.createElement("li");
        tarjeta.classList.add("tarjeta-producto");

        const nombre = document.createElement("p");
        nombre.classList.add("tarjeta-nombre");

        const precio = document.createElement("p");
        precio.classList.add('tarjeta-precio');

        nombre.innerText = articulo.nombre;
        precio.innerText = articulo.precio;
        modificar.innerText = "Modificar Producto";
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(precio);

        contenedor.appendChild(tarjeta);

        tarjeta.addEventListener('click', function (event) {
            event.preventDefault()
            tarjeta.classList.toggle("producto-seleccionado");
        });
    });

}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre");
    let precio = document.getElementById("precio");

        modificar.addEventListener("click", function (e) {
            e.preventDefault();
            let id = inputId.value;
            let nombre = inputNombre.value;
            let precio = inputPrecio.value;

            let producto = inventario.find(producto => producto.id === id);
            if (producto) {
                producto.nombre = nombre;
                producto.precio = precio;
                renderizarInventario();
                formulario.querySelector("button").textContent = "Agregar Producto";
                inputId.value = "";
                inputNombre.value = "";
                inputPrecio.value = "";
            } else {
                let nuevoArticulo = {
                    id: Math.random(),
                    nombre: nombre,
                    precio: precio
                };
                inventario.push(nuevoArticulo);
                renderizarInventario();
                formulario.querySelector("button").textContent = "Agregar Producto";
                inputId.value = "";
                inputNombre.value = "";
                inputPrecio.value = "";
            }
    });
});