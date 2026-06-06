const formulario = document.querySelector("#formulario-producto");

let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
];

formulario.addEventListener('submit', function submit(event) {

    event.preventDefault();

    const nombre = document.querySelector("#nombre");
    const precio = document.querySelector("#precio");

    const datos = {
        nombre: nombre.value,
        precio: precio.value
    };
    inventario.push(datos);

    renderizarInventario();

    nombre.value = "";
    precio.value = "";
});

function renderizarInventario() {
    let contenedor = document.getElementById("listado");

    inventario.forEach(articulo => {
        const tarjeta = document.createElement("li");
        tarjeta.classList.add("tarjeta-producto");

        const nombre = document.createElement("p");
        nombre.classList.add("tarjeta-nombre");

        const precio = document.createElement("p");
        precio.classList.add('tarjeta-precio');

        nombre.innerText = articulo.nombre;
        precio.innerText = articulo.precio;

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(precio);

        contenedor.appendChild(tarjeta);


        tarjeta.addEventListener('click', function (event) {
            event.preventDefault()
            tarjeta.classList.toggle("producto-seleccionado");
        });
    });
}

// Carga inicial
renderizarInventario();
