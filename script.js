let inventario = [
    { id: crypto.randomUUID(), nombre: "Guitarra Clásica", precio: 15000 },
    { id: crypto.randomUUID(), nombre: "Amplificador 15W", precio: 8500 },
    { id: crypto.randomUUID(), nombre: "Set de Cuerdas", precio: 800 },
];
function recargarTarjetas(){
const Tarjetas = document.querySelectorAll(".tarjeta-producto")
Tarjetas.forEach(function(e){
e.addEventListener("click", function(){
e.classList.toggle("producto-seleccionado")

});

});

}

recargarTarjetas()

const formulario = document.querySelector("form");
const inptNombre = document.querySelector("#nombre");
const inptPrecio = document.querySelector("#precio");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = inptNombre.value;
    const precio = inptPrecio.value;
    const producto = {
        nombre,
        precio,
    }
    inventario.push(producto);
    renderizarInventario();
    formulario.reset();
});

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = inptNombre.value;
    const precio = inptPrecio.value;
    const id = inptId.value;
    if(id){
      inventario = inventario.map(function(producto){
        if(producto.id === id)
          return {
            nombre: nombre, precio: precio, id: id
          }
        return producto;
      });
      inptId.value = "";
      formulario.reset();
      renderizarInventario();
      formulario.querySelector("button").textContent = "Guardar articulo";
      return;
    }
    const producto = {
        nombre,
        precio,
        id: crypto.randomUUID()
    }
    inventario.push(producto);
    renderizarInventario();
    formulario.reset();
});

function renderizarInventario() {
    let contenedor = document.getElementById("listado");
    contenedor.innerHTML = "";

    inventario.forEach(function(producto){
      const tarjeta = document.createElement("li");
      tarjeta.dataset.productId = producto.id;
      tarjeta.classList.add("tarjeta-producto");
      const nombre = document.createElement("p");
      nombre.classList.add("tarjeta-nombre");
      const precio = document.createElement("p");
      precio.classList.add('tarjeta-precio');
      const modificar = document.createElement("button");
      modificar.classList.add("tarjeta-button");

      nombre.textContent = producto.nombre;
      precio.textContent = "$"+producto.precio;
      modificar.textContent = "Editar"

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(precio);
      tarjeta.append(modificar)
      contenedor.append(tarjeta);

      tarjeta.addEventListener("click", function(e){
        e.preventDefault();
        tarjeta.classList.toggle("producto-seleccionado");
      });

      modificar.addEventListener("click", function(e){
        e.preventDefault();
        inptNombre.value = producto.nombre;
        inptPrecio.value = producto.precio;
        inptId.value = producto.id;
        formulario.querySelector("button").textContent = "Modificar articulo";
      });
    });
}

// Carga inicial
renderizarInventario();
