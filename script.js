let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
];

function renderizarInventario() {
    let contenedor = document.getElementById("listado");
    let htmlGenerado = "";

    inventario.forEach((articulo, i ) => {
        htmlGenerado += "<article class='tarjeta-producto' data-indice='" + i + "'>";
        htmlGenerado += "<div class='tarjeta-nombre'>" + articulo.nombre + "</div>";
        htmlGenerado += "<div class='tarjeta-precio'>$" + articulo.precio + "</div>";
        htmlGenerado += "</article>";
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




// Carga inicial
renderizarInventario();
