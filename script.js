let inventario = [
    { nombre: "Guitarra Clásica", precio: 15000, id: 1 },
    { nombre: "Amplificador 15W", precio: 8500, id: 2 },
    { nombre: "Set de Cuerdas", precio: 800, id: 3 }
];

    function modificarform() {
    let modificar = formulario.getAttribute("modificar");
    if (modificar === "true") {
        let indice = formulario.getAttribute("data-indice");
        document.querySelector("#nombre").value = inventario[indice].nombre;
        document.querySelector("#precio").value = inventario[indice].precio;
    }
}

    function renderizarInventario() {
    let contenedor = document.getElementById("listado");
    contenedor.innerHTML = "";
    modificarform();

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

            const boton = document.createElement("button")
            boton.classList.add("boton-modificar")
            boton.textContent = "modificar"
            boton.addEventListener("click", function() {
            formulario.setAttribute("modificar", "true");
            formulario.setAttribute("data-indice", i);
            modificarform();
});
            boton.dataset.id = articulo.id;

            const btnEliminar = document.createElement("button")
            btnEliminar.classList.add("boton-eliminar")
            btnEliminar.textContent = "eliminar"
            btnEliminar.addEventListener("click", function(e) {
            inventario.splice(i, 1);
            formulatio.setAttribute("modificar", "false");
            renderizarInventario();
            });

            contenedor.appendChild(elemento);
            elemento.appendChild(nombre);
            elemento.appendChild(precio);
            elemento.appendChild(boton);
            elemento.appendChild(btnEliminar);


    });
    
    let tarjetas = document.querySelectorAll(".tarjeta-producto");
    
    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener("click", function() {
            this.classList.toggle("producto-seleccionado");
        });
    });
    }
    
    let formulario = document.getElementById("formulario-producto");
    formulario.setAttribute("modificar", "false");
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

    const Cambiar = formulario.getAttribute("modificar");
    let nombre = document.querySelector("#nombre").value;
    let precio = Number(document.querySelector("#precio").value);

    if (Cambiar === "true") {
    const indice = formulario.getAttribute("data-indice");
    inventario[indice].nombre = nombre;
    inventario[indice].precio = precio;
    formulario.setAttribute("modificar", "false");
    } 

    else {
    let agregarArticulo = { nombre: nombre, precio: precio, id: inventario.length + 1 };
    inventario.push(agregarArticulo);
    }

    renderizarInventario();
    document.querySelector("#nombre").value = "";
    document.querySelector("#precio").value = "";
    });
    
    renderizarInventario();
    // Carga inicial
