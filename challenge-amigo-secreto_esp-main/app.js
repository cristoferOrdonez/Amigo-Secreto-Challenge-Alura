// Lista que almacenará los nombres de los amigos
let amigos = [];

// Referencias a elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigosEl = document.getElementById('listaAmigos');
const resultadoEl = document.getElementById('resultado');

/**
 * Agrega un amigo desde el campo de entrada al array y actualiza la UI.
 * Realiza validación para evitar entradas vacías.
 */
function agregarAmigo() {
	const nombre = inputAmigo.value.trim();

	// Validar que el campo no esté vacío
	if (!nombre) {
		alert('Por favor, inserte un nombre.');
		inputAmigo.focus();
		return;
	}

	// Añadir al array y actualizar la lista en la UI
	amigos.push(nombre);
	inputAmigo.value = ''; // Limpiar campo
		// Si había un resultado previo (ganador mostrado), eliminarlo al agregar un nuevo amigo
		if (resultadoEl) resultadoEl.innerHTML = '';
		renderListaAmigos();
}

/**
 * Renderiza la lista de amigos en el elemento <ul> correspondiente.
 * Limpia el contenido previo y agrega un <li> por cada amigo.
 */
function renderListaAmigos() {
	// Evitar mutaciones accidentales desde el DOM
	const copiaAmigos = [...amigos];

	// Limpiar lista antes de renderizar
	listaAmigosEl.innerHTML = '';

	// Usar un bucle for para seguir la instrucción solicitada
	for (let i = 0; i < copiaAmigos.length; i++) {
		const nombre = copiaAmigos[i];
		const li = document.createElement('li');
		li.textContent = nombre;
		listaAmigosEl.appendChild(li);
	}
}

/**
 * Realiza un sorteo aleatorio entre los amigos registrados y muestra el resultado.
 */
function sortearAmigo() {
	// Validar que existan nombres en el array
	if (amigos.length === 0) {
		alert('No hay amigos para sortear. Por favor, agregue al menos uno.');
		return;
	}

	// Generar índice aleatorio
	const indiceAleatorio = Math.floor(Math.random() * amigos.length);
	const amigoSeleccionado = amigos[indiceAleatorio];

	// Mostrar resultado (limpiando cualquier resultado previo)
	resultadoEl.innerHTML = '';
	const li = document.createElement('li');
	li.textContent = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
	li.classList.add('resultado-item');
	resultadoEl.appendChild(li);

		// Después de sortear, limpiar el array de amigos y la lista visual
		amigos = [];
		renderListaAmigos();
}

// Mejoras de usabilidad: permitir presionar Enter para agregar
inputAmigo.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		agregarAmigo();
	}
});

// Exportar funciones globalmente para que los botones con onclick funcionen
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;

// Inicializar (por si el HTML se carga antes de que el script esté listo)
document.addEventListener('DOMContentLoaded', function () {
	// Foco inicial en el campo de texto
	if (inputAmigo) inputAmigo.focus();
	renderListaAmigos();
});
