let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000 },
    { nombre: "Amplificador 15W", precio: 8500 },
    { nombre: "Set de Cuerdas", precio: 800 }
];

function renderizarInventario() {
    let contenedor = document.getElementById("listado");
    contenedor.innerHTML = "";

    inventario.forEach((articulo, i) => {
            const elemento = document.createElement("article")
            elemento.classList.add("tarjeta-producto")
            elemento.setAttribute("data-indice", i);
            
            const nombre = document.createElement("div")
            nombre.classList.add("tarjeta-nombre")
            nombre.textContent = articulo.nombre;

            const precio = document.createElement("div")
            precio.classList.add("tarjeta-precio")
            precio.textContent = "$" + articulo.precio;

            contenedor.appendChild(elemento);
            elemento.appendChild(nombre);
            elemento.appendChild(precio);
    });
    
    let tarjetas = document.querySelectorAll(".tarjeta-producto");
    
    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener("click", function() {
            this.classList.toggle("producto-seleccionado");
        });
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

// Carga inicial
renderizarInventario();
