# Amigo Secreto — Challenge de Alura

Pequeña aplicación web creada como parte de un challenge de Alura. Permite agregar nombres, visualizar una lista dinámica y realizar un sorteo aleatorio que muestra el ganador.

---

## Características

- Agregar nombres a una lista (validación: no se permiten entradas vacías).
- Visualizar la lista de amigos en tiempo real.
- Sortear aleatoriamente un nombre de la lista y mostrar el ganador.
- Limpieza del campo de entrada después de agregar.
- Soporte para tecla Enter para añadir rápidamente.
- Después del sorteo, la lista se reinicia (array y vista) para preparar una nueva ronda.

---

## Tecnologías

- HTML
- CSS
- JavaScript (vanilla)

---

## Estructura del proyecto

```
challenge-amigo-secreto_esp-main/
├─ app.js          # Lógica: array de amigos, funciones para agregar, renderizar y sortear
├─ index.html      # Estructura y botones
├─ style.css       # Estilos (UI)
└─ assets/         # Imágenes usadas en la UI
```

---

## Uso

1. Abrir `index.html` en el navegador (doble clic o servidor local).
2. Escribir un nombre en el campo y hacer clic en "Añadir" o presionar Enter.
3. La lista se actualizará mostrando los nombres agregados.
4. Hacer clic en "Sortear amigo" para elegir un nombre al azar y mostrar el ganador en la página.
5. Tras el sorteo, la lista se borrará para una nueva ronda.

---

## API de funciones (para desarrolladores)

El archivo `app.js` expone dos funciones globales (para los botones con `onclick`):

- `agregarAmigo()` — Captura el valor del input, valida que no esté vacío, lo añade al array `amigos` y actualiza la lista. Si hay un resultado previo, lo limpia.
- `sortearAmigo()` — Si el array `amigos` no está vacío, selecciona aleatoriamente un nombre, lo muestra en la sección de resultados y luego limpia el array y la vista.

Variables clave:

- `let amigos = []` — Array que contiene los nombres añadidos.

---

## Buenas prácticas y notas de implementación

- Se utiliza `document.getElementById` para obtener referencias a elementos del DOM.
- `innerHTML` se emplea para limpiar la lista antes de re-renderizar.
- La generación aleatoria usa `Math.random()` y `Math.floor()` para obtener un índice válido.
- Se han añadido comprobaciones y mensajes `alert` para una UX mínima cuando no hay nombres.
- Se recomienda ejecutar la página en un servidor local (por ejemplo con `Live Server` en VS Code) para evitar problemas con rutas relativas de recursos.

---

## Posibles mejoras (ideas)

- Persistencia local usando `localStorage` para mantener la lista entre recargas.
- Permitir eliminar nombres individuales de la lista.
- Evitar duplicados opcionalmente o avisar al usuario.
- Añadir animaciones y transiciones para añadir/sortear.
- Validación de nombres (sólo letras, longitud mínima/máxima).
- Tests unitarios para las funciones puras (por ejemplo, utilidades de sorteo).

---

## Licencia

Este repositorio es un proyecto de práctica y puede usarse libremente para aprendizaje y demostraciones.

---

## Créditos

Challenge provisto por Alura. Implementado como ejercicio de manipulación del DOM y eventos con JavaScript puro.
