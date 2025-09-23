# Amigo Secreto — Challenge de Alura

# Amigo Secreto — Challenge de Alura

Descripción
-----------

Pequeña aplicación web creada como parte de un challenge de Alura. Está desarrollada con HTML, CSS y JavaScript puro (vanilla). La app permite:

- Agregar nombres a una lista con validación (no vacíos).
- Visualizar la lista dinámica de amigos en la página.
- Realizar un sorteo aleatorio que muestra el ganador en la interfaz.

Esta versión incluye mejoras de usabilidad: limpieza del campo de entrada después de agregar, soporte para la tecla Enter y reinicio automático de la lista tras realizar un sorteo.

Contenido del README
--------------------

1. Requisitos
2. Estructura del proyecto
3. Instalación y ejecución
4. Uso (paso a paso)
5. API y funciones clave
6. Detalles de implementación
7. Pruebas rápidas y verificación
8. Mejoras sugeridas
9. Créditos y licencia

1) Requisitos
----------------

- Navegador moderno (Chrome, Firefox, Edge, Safari).
- No hay dependencias externas; basta con abrir `index.html` o servirlo desde un servidor estático.

2) Estructura del proyecto
--------------------------

Archivos principales en la raíz del repositorio:

- `index.html` — Estructura de la página y botones
- `style.css` — Estilos para la UI
- `app.js` — Lógica: array de amigos, funciones para agregar, renderizar y sortear
- `assets/` — Imágenes y recursos (íconos)

3) Instalación y ejecución
--------------------------

Opción A — Abrir directamente

1. Navega a la carpeta del proyecto.
2. Abre `index.html` con el navegador (doble clic o "Abrir con...").

Opción B — Servidor local (recomendado para rutas relativas)

1. Instala una extensión como "Live Server" en VS Code o usa un servidor estático sencillo.
2. Inicia el servidor apuntando a la carpeta del proyecto y abre la URL que te indique.

4) Uso (paso a paso)
--------------------

1. Escribe un nombre en el campo de texto.
2. Haz clic en "Añadir" o presiona Enter para agregarlo a la lista.
3. Repite los pasos para ingresar todos los nombres.
4. Haz clic en "Sortear amigo" para seleccionar aleatoriamente un nombre.
5. El nombre ganador se mostrará en la sección de resultado; tras el sorteo la lista se reiniciará para una nueva ronda.

5) API y funciones clave
------------------------

En `app.js` se usan las siguientes piezas principales:

- `let amigos = []` — Array que almacena los nombres.
- `agregarAmigo()` — Captura el valor del input, valida que no esté vacío, lo añade al array `amigos`, limpia el campo y actualiza la lista en la UI. Además borra cualquier resultado previo.
- `renderListaAmigos()` — Recorre `amigos` y genera elementos `<li>` dentro de la lista visible; antes limpia el contenedor con `innerHTML = ''`.
- `sortearAmigo()` — Verifica que `amigos` no esté vacío; genera un índice con `Math.floor(Math.random() * amigos.length)`, muestra el nombre seleccionado y luego limpia el array y la vista.

6) Detalles de implementación
-----------------------------

- Validaciones: se comprueba `input.value.trim()` para evitar entradas vacías. Si está vacío, se muestra `alert('Por favor, inserte un nombre.')`.
- Usabilidad: se añade un listener de `keydown` para añadir con Enter.
- Accesibilidad: la lista tiene `role="list"` y `aria-live="polite"` para notificar cambios.
- Seguridad: no se evalúan ni ejecutan entradas de usuario; los nombres se insertan como `textContent`.

7) Pruebas rápidas y verificación
--------------------------------

Prueba mínima:

1. Abrir `index.html`.
2. Añadir 3 nombres.
3. Verificar que aparezcan en la lista.
4. Hacer clic en "Sortear amigo" y confirmar que aparece un ganador.
5. Confirmar que la lista quedó vacía tras el sorteo.

8) Mejoras sugeridas
--------------------

- Guardar y cargar la lista desde `localStorage` para persistencia.
- Añadir la opción de eliminar o editar nombres individuales.
- Evitar duplicados con una validación adicional.
- Añadir pruebas unitarias para las funciones de utilidad (por ejemplo, `sorteoRandom(amigos)`).
- Hacer una versión con asignaciones únicas (cada persona asigna otra sin repetición) para un sorteo tipo "amigo secreto" real.

9) Créditos y licencia
----------------------

Proyecto desarrollado como challenge de Alura. Código libre para uso educativo y adaptaciones.

Contacto
-------

Si quieres sugerencias, mejoras o una versión con más características, dime y lo implemento.

