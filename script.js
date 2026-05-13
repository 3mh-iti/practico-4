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
        htmlGenerado += "<div class='tarjeta-producto' data-indice='" + i + "'>";
        htmlGenerado += "<div class='tarjeta-nombre'>" + articulo.nombre + "</div>";
        htmlGenerado += "<div class='tarjeta-precio'>$" + articulo.precio + "</div>";
        htmlGenerado += "</div>";
    }

    contenedor.innerHTML = htmlGenerado;
}
const formulario = document.getElementById("formulario-producto");

formulario.addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const objeto = {nombre, precio};
    
    inventario.push(objeto);
    renderizarInventario();
    formulario.reset();
});
function tarjetas() {
    const tarjetas = document.querySelectorAll(".tarjeta-producto");
    
    for (let i=0;i<tarjetas.length;i++) {
        tarjetas[i].addEventListener("click", function() {
            
tarjetas[i].classList.toggle("producto-seleccionado");
        });
    }
}


// Carga inicial
renderizarInventario();
tarjetas();