const opciones = ["piedra", "papel", "tijera"];
const eleccionComputadoraElem = document.getElementById("eleccionComputadora");
const resultadoJuegoElem = document.getElementById("resultadoJuego");
const botonReiniciar = document.getElementById("reiniciar");
const historialElem = document.getElementById("historial");
const botonMostrarHistorial = document.getElementById("mostrarHistorial");

let historial = [];

async function cargarHistorial() {
    try {
        const respuesta = await fetch("http://localhost:3000/historial");
        historial = await respuesta.json();
    } catch (error) {
        console.error("Error al cargar el historial:", error);
    }
}

async function guardarJuegoEnHistorial(juego) {
    try {
        await fetch("http://localhost:3000/historial", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(juego),
        });
    } catch (error) {
        console.error("Error al guardar el juego en el historial:", error);
    }
}

function eleccionComputadora() {
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

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

function actualizarHistorial() {
    historialElem.innerHTML = "";
    historial.forEach((juego, index) => {
        const li = document.createElement("li");
        li.textContent = `Juego ${index + 1}: Elegiste ${juego.jugador}, la computadora eligió ${juego.computadora}. Resultado: ${juego.resultado}`;
        historialElem.appendChild(li);
    });
}

async function jugar(eleccionJugador) {
    const eleccionComp = eleccionComputadora();
    const resultado = determinarGanador(eleccionJugador, eleccionComp);

    eleccionComputadoraElem.textContent = "La computadora eligió: " + eleccionComp;
    resultadoJuegoElem.textContent = resultado;

    const nuevoJuego = {
        jugador: eleccionJugador,
        computadora: eleccionComp,
        resultado: resultado,
    };

    historial.push(nuevoJuego);
    await guardarJuegoEnHistorial(nuevoJuego);

    actualizarHistorial();
    botonReiniciar.style.visibility = "visible";
}
function mostrarHistorial() {
    if (historialElem.style.display === "none") {
        actualizarHistorial();
        historialElem.style.display = "block";
        botonMostrarHistorial.textContent = "Ocultar historial";
    } else {
        historialElem.style.display = "none";
        botonMostrarHistorial.textContent = "Mostrar historial";
    }
}

async function inicializar() {
    await cargarHistorial();
}
inicializar();


