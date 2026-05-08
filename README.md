# Actividad Práctica: Inventario MusicStore

## Condiciones de Trabajo y Entrega
* La tarea debe realizarse en equipos de 2 estudiantes.
* Deben clonar el repositorio Git proporcionado que contiene el código base.
* A partir de la rama principal, deben crear una nueva rama para su desarrollo. El nombre de la rama debe tener el formato `<apellido1-apellido2>` (por ejemplo, `lopez-martinez`).
* Realicen commits a medida que avanzan. Los mensajes de los commits deben ser claros y describir con precisión los cambios o funcionalidades agregadas.

## Parte 1: Semántica HTML
El código actual basa toda su estructura en etiquetas `<div>`. Modifica el archivo `index.html` y el código de generación en `script.js` para aplicar correctamente las etiquetas semánticas de HTML5.
1. Reemplaza los contenedores `#encabezado`, `#contenido`, `#seccion-listado`, `#seccion-formulario` y `#pie-pagina` por las etiquetas semánticas adecuadas (`<header>`, `<main>`, `<section>`, `<footer>`, etc.).
2. En el archivo `script.js`, modifica el string de `htmlGenerado` para que cada tarjeta de producto utilice la etiqueta `<article>` en lugar de un `<div>`.
3. *Nota:* Asegúrate de actualizar los selectores en CSS si tus cambios en el HTML rompen los estilos actuales.

## Parte 2: Estilos y Diseño Responsivo
El diseño actual está pensado solo para dispositivos móviles. Debes mejorarlo y escalarlo para pantallas de escritorio.
1. **Efecto Hover:** Agrega en CSS una regla utilizando el pseudoselector `:hover` sobre la clase `.tarjeta-producto` para que, al pasar el cursor, la tarjeta cambie su sombra (`box-shadow`) o se desplace ligeramente hacia arriba (`transform: translateY`).
2. **Escalado Desktop (Media Query):** Crea una regla `@media` para pantallas con un ancho mínimo de `768px`.
    * Aplica **Flexbox** al contenedor principal del contenido (`#contenido` o la etiqueta semántica que lo reemplace) para que el listado de artículos y el formulario se posicionen uno al lado del otro. Asígnale aproximadamente un 65% del ancho al listado y un 30% al formulario.
    * Aplica **CSS Grid** al contenedor `#listado` para que las tarjetas de producto se organicen en una grilla de 2 columnas idénticas, con un espacio (`gap`) de 15px entre ellas.

## Parte 3: Interactividad y DOM (JavaScript)
Extiende la funcionalidad de la aplicación trabajando sobre `script.js`.
1. **Agregar artículos al inventario:**
    * Captura el evento `submit` del formulario.
    * Evita que la página se recargue por defecto.
    * Obtén los valores de los inputs (nombre y precio).
    * Crea un nuevo objeto con esos datos y agrégalo al arreglo `inventario` utilizando el método `push()`.
    * Vuelve a llamar a la función `renderizarInventario()` para actualizar la vista.
    * Vacía los campos del formulario tras agregar el elemento.
2. **Selección visual de artículos:**
    * Implementa una funcionalidad para que, al hacer `click` sobre cualquier tarjeta de producto, se le asigne la clase CSS `.producto-seleccionado` (puedes utilizar `classList.toggle()`).
    * *Importante:* Ten en cuenta que cada vez que llamas a `renderizarInventario()`, el contenido de `#listado` se sobrescribe mediante `innerHTML`. Deberás capturar los elementos `.tarjeta-producto` con `document.querySelectorAll()` y asignarles el evento `click` usando un ciclo repetitivo *después* de haber modificado el HTML. Verifica que los artículos nuevos también respondan al click.
