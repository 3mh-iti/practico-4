const formulario = document.querySelector("#formulario-producto");

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
    asignarEventosTarjetas();
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;

    let nuevoArticulo = {nombre: nombre, precio: Number(precio)};
    inventario.push(nuevoArticulo);

    renderizarInventario();
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";    
});
// Carga inicial
renderizarInventario(); 

     function asignarEventosTarjetas() {
    let tarjetas = document.querySelectorAll(".tarjeta-producto");

    for (let i = 0; i < tarjetas.length; i++) {
        tarjetas[i].addEventListener("click", function () {
            this.classList.toggle("producto-seleccionado");
        });
    }
}
