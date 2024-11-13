const opciones = ["piedra", "papel", "tijera"];
const eleccionComputadoraElem = document.getElementById("eleccionComputadora");
const resultadoJuegoElem = document.getElementById("resultadoJuego");
const botonReiniciar = document.getElementById("reiniciar");
const historialElem = document.getElementById("historial");

let historial = []; // Array para almacenar el historial de juegos

// Función para generar la elección aleatoria de la computadora
function eleccionComputadora() {
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

// Función que determina el ganador
function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "Empate";
    } else if (
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "Perdiste, la computadora gana.";
    }
}

// Función para actualizar el historial en el DOM
function actualizarHistorial() {
    historialElem.innerHTML = ""; // Limpiar el historial anterior

    historial.forEach((juego, index) => {
        const li = document.createElement("li");
        li.textContent = `Juego ${index + 1}: Elegiste ${juego.jugador}, la computadora eligió ${juego.computadora}. Resultado: ${juego.resultado}`;
        historialElem.appendChild(li);
    });
}

// Función principal para jugar, llamada al hacer clic en una opción
function jugar(eleccionJugador) {
    const eleccionComp = eleccionComputadora();
    
    // Mostrar la elección de la computadora en el DOM
    eleccionComputadoraElem.textContent = "La computadora eligió: " + eleccionComp;

    // Determinar el resultado y mostrarlo en el DOM
    const resultado = determinarGanador(eleccionJugador, eleccionComp);
    resultadoJuegoElem.textContent = resultado;

    // Guardar el juego en el historial
    historial.push({
        jugador: eleccionJugador,
        computadora: eleccionComp,
        resultado: resultado
    });

    // Actualizar el historial en la página
    actualizarHistorial();

    // Mostrar botón de reiniciar
    botonReiniciar.style.visibility = "visible";
}

// Función para reiniciar el juego
function reiniciarJuego() {
    eleccionComputadoraElem.textContent = "";
    resultadoJuegoElem.textContent = "";
    botonReiniciar.style.visibility = "hidden"; // Ocultar nuevamente el botón de reiniciar
}
