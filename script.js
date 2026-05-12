const formulario = document.querySelector("#formulario-producto");

let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 } 
];

formulario.addEventListener('submit', function submit(event){

    event.preventDefault();

    const nombre = document.querySelector("#nombre");
    const precio = document.querySelector("#precio");
    
    datos = {
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
    let htmlGenerado = "";

    for (let i = 0; i < inventario.length; i++) {
        let articulo = inventario[i];
        htmlGenerado += "<article class='tarjeta-producto' data-indice='" + i + "'>";
        htmlGenerado += "<article class='tarjeta-nombre'>" + articulo.nombre + "</article>";
        htmlGenerado += "<article class='tarjeta-precio'>$" + articulo.precio + "</article>";
        htmlGenerado += "</article>";
    }

    contenedor.innerHTML = htmlGenerado;

    const tarjetas = document.querySelectorAll(".tarjeta-producto");
    
    tarjetas.forEach(function(tarjeta) {
        tarjeta.addEventListener('click', function(event) {
            tarjetas.classList.toggle("producto-seleccionado");
        });
    });
}

// Carga inicial
renderizarInventario();
