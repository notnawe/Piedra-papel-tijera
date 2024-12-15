function reiniciarJuego() {
    eleccionComputadoraElem.textContent = "";
    resultadoJuegoElem.textContent = "";
    botonReiniciar.style.visibility = "visible";
    Swal.fire({
        title: "¿Estás seguro de que quieres reiniciar la partida?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#63af4c",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, reinicia la partida!",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Reiniciado",
                text: "Tu partida ha sido reiniciada.",
                icon: "success",
            }).then(() => {
                location.reload();
            });
        }
    });
}
