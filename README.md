# Actividad Práctica: Inventario MusicStore - Etapa 2 (Refactorización)

## Objetivos de la Etapa
En esta segunda etapa, el objetivo es refactorizar el código JavaScript desarrollado en la etapa anterior para utilizar métodos de arreglos y técnicas de manipulación del Modelo de Objetos del Documento (DOM) más avanzadas, seguras y eficientes.

## Tareas a Realizar

### 1. Reemplazo de bucles iterativos
* Localicen todos los bucles `for` tradicionales utilizados en `script.js`. Esto incluye el bucle utilizado para recorrer el arreglo `inventario` y cualquier bucle utilizado para iterar sobre los elementos del DOM (por ejemplo, el resultado de `querySelectorAll` al asignar eventos de click).
* Reemplacen todas estas estructuras iterativas implementando el método `forEach()`.

### 2. Manipulación avanzada del DOM (Creación de Nodos)
* Eliminen completamente el uso de la propiedad `innerHTML` para la generación y actualización de la interfaz de usuario.
* Para renderizar cada artículo del inventario, utilicen el método `document.createElement()` para instanciar individualmente los nodos correspondientes (la etiqueta `<article>` y sus elementos internos).
* Asignen las clases CSS, los atributos (como el `data-indice`) y el texto correspondiente (utilizando propiedades como `textContent` o `innerText`) directamente a los elementos recién creados a través de JavaScript.
* Integren los nuevos elementos al contenedor del DOM utilizando métodos de inserción de nodos como `append()`, `appendChild()`, `prepend()` o `insertBefore()`. 

## Condiciones de Entrega
* Continúen trabajando en parejas sobre el mismo repositorio Git utilizado en la Etapa 1.
* La funcionalidad de la aplicación debe mantenerse exactamente igual que en la etapa anterior (el renderizado de la lista, el agregado de nuevos productos desde el formulario y el cambio de estilos al seleccionar un producto deben seguir funcionando sin errores).
* Realicen nuevos commits para esta etapa. Los mensajes deben describir con precisión la refactorización realizada (por ejemplo: `Refactor: actualización de renderizado usando createElement` o `Refactor: reemplazo de for por forEach en asignación de eventos`).
