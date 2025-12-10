let puntajeLocal = 0
let puntajeVisitante = 0

function local1() {
    puntajeLocal += 1
    document.getElementById("puntaje-local").textContent = puntajeLocal
}

function local2() {
    puntajeLocal += 2
    document.getElementById("puntaje-local").textContent = puntajeLocal
}

function local3() {
    puntajeLocal += 3
    document.getElementById("puntaje-local").textContent = puntajeLocal
}

function visitante1() {
    puntajeVisitante += 1
    document.getElementById("puntaje-visitante").textContent = puntajeVisitante
}

function visitante2() {
    puntajeVisitante += 2
    document.getElementById("puntaje-visitante").textContent = puntajeVisitante
}

function visitante3() {
    puntajeVisitante += 3
    document.getElementById("puntaje-visitante").textContent = puntajeVisitante
}

function reiniciar() {
    puntajeVisitante = 0
    puntajeLocal = 0
    document.getElementById("puntaje-visitante").textContent = puntajeVisitante
    document.getElementById("puntaje-local").textContent = puntajeLocal
}