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
        htmlGenerado += "<div class='tarjeta-nombre'>" + articulo.nombre + "</div>";
        htmlGenerado += "<div class='tarjeta-precio'>$" + articulo.precio + "</div>";
        htmlGenerado += "</article>";
    }

    contenedor.innerHTML = htmlGenerado;

    let tarjetas = document.querySelectorAll(".tarjeta-producto");
    
    for (let i = 0; i < tarjetas.length; i++) {
        tarjetas[i].addEventListener("click", function() {
            this.classList.toggle("producto-seleccionado");
        });
    }

    let formulario = document.getElementById("formulario-producto");
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        let nombre = document.querySelector("#nombre").value;
        let precio = Number(document.querySelector("#precio").value);

        let agregarArticulo = { nombre: nombre, precio: precio };
        inventario.push(agregarArticulo);

        renderizarInventario();
        document.querySelector("#nombre").value = ""
        document.querySelector("#precio").value = ""
    });
}
// Carga inicial
renderizarInventario();
