# Actividad Práctica: Inventario MusicStore - Etapa 3 (Refactorización)

## Objetivos de la Etapa
En esta tercera etapa, el objetivo es refactorizar el código JavaScript desarrollado en la etapa anterior para agregar la funcionalidad de modificar un producto ya cargado.

## Tareas a Realizar

### 1. Creación del botón "modificar" para cada producto
* Localicen el sitio de renderizado de los productos.
* Agreguen un nuevo botón, con sus estilos, en cada tarjeta de producto.

### 2. Manipulación DOM y eventos
* Agreguen el evento clic para el botón creado. Este debe cargar los datos del producto en el formulario de creación o modificación.
* Para cargar los datos en el formulario deben modificar la propiedad `value` de cada input.
* Deben identificar e implementar un método para definir cuándo se está creando un producto nuevo y cuando se está modificando.
* Una vez modificado el producto deben limpiar el formulario. 

## Condiciones de Entrega
* Continúen trabajando en parejas sobre el mismo repositorio Git utilizado en la Etapa 2.
* La funcionalidad de la aplicación debe mantenerse exactamente igual que en la etapa anterior (el renderizado de la lista, el agregado de nuevos productos desde el formulario y el cambio de estilos al seleccionar un producto deben seguir funcionando sin errores).
* Realicen nuevos commits para esta etapa. Los mensajes deben describir con precisión la refactorización realizada (por ejemplo: `Refactor: actualización de renderizado usando createElement` o `Refactor: reemplazo de for por forEach en asignación de eventos`).
