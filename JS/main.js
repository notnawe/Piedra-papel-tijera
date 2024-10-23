function jugar() {
    const opciones = ["piedra", "papel", "tijera"];
    
    // Funcion para generar elección aleatoria de la CPU
    function eleccionComputadora() {
        const indice = Math.floor(Math.random() * 3);
        return opciones[indice];
    }

    // Funcion que determina el ganador
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
            return "Perdiste, la CPU gana.";
        }
    }

    // Ciclo para mantener el juego hasta que el usuario decida salir
    let seguirJugando = true;
    while (seguirJugando) {
        let eleccionJugador = prompt("Elige: piedra, papel o tijera").toLowerCase();

        // Validación de la entrada del usuario
        if (!opciones.includes(eleccionJugador)) {
            alert("Opción no válida. Por favor elige 'piedra', 'papel' o 'tijera'.");
            continue;
        }

        let eleccionComp = eleccionComputadora();
        alert("La computadora eligió: " + eleccionComp);

        // Determinamos el resultado del juego
        let resultado = determinarGanador(eleccionJugador, eleccionComp);
        alert(resultado);

        // Confirmamos si el usuario quiere seguir jugando
        seguirJugando = confirm("¿Quieres jugar de nuevo?");
    }

    alert("Gracias por jugar. ¡Hasta la próxima!");
}