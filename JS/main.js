const opciones = ["piedra", "papel", "tijera"];
const eleccionComputadoraElem = document.getElementById("eleccionComputadora");
const resultadoJuegoElem = document.getElementById("resultadoJuego");
const botonReiniciar = document.getElementById("reiniciar");

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

// Función principal para jugar, llamada al hacer clic en una opción
function jugar(eleccionJugador) {
    const eleccionComp = eleccionComputadora();
    
    // Mostrar la elección de la computadora en el DOM
    eleccionComputadoraElem.textContent = "La computadora eligió: " + eleccionComp;

    // Determinar el resultado y mostrarlo en el DOM
    const resultado = determinarGanador(eleccionJugador, eleccionComp);
    resultadoJuegoElem.textContent = resultado;

    // Mostrar botón de reiniciar
    botonReiniciar.style.visibility = "visible";
}

// Función para reiniciar el juego
function reiniciarJuego() {
    eleccionComputadoraElem.textContent = "";
    resultadoJuegoElem.textContent = "";
    botonReiniciar.style.display = "hidden";
}