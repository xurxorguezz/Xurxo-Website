let reproduciendo = false;
let PPM = 100;
let intervalo = undefined;
const textoReproduciendose = "Empezar";
const textoParado = "Pausar";
const tituloPPM = document.querySelector('#ppm');
const botonDecrecer5PPM = document.querySelector('#boton-decrecer-5-ppm');
const botonDecrecer1PPM = document.querySelector('#boton-decrecer-1-ppm');
const botonCrecer1PPM = document.querySelector('#boton-crecer-1-ppm');
const botonCrecer5PPM = document.querySelector('#boton-crecer-5-ppm');
const botonReproducir = document.querySelector('#boton-reproducir');
const audioMetronomo = document.querySelector('#audio-metronomo');

//---
// Funciones
//---


/**
 * Dibuja los cambios
 *
 * @param {number} ppm Pulsaciones por Minuto
 * @param {boolean} isPlay ¿Esta reproduciendose?
 * @return {boolean} Se ha renderizado
 */
function renderizarCambios(ppm, isPlay) {
  // Texto PPM
  tituloPPM.textContent = ppm;
  // Texto boton reproducir
  botonReproducir.textContent = reproduciendo ? textoParado : textoReproduciendose;

  return true;
}

/**
 * Dibuja los cambios
 *
 * @param {number} ppm Pulsaciones por Minuto
 * @param {HTMLAudioElement} audio
 * @param {boolean} isPlay ¿Esta reproduciendose?
 * @param {intervalID} intervaloActual Intervalo
 * @return {intervalID} Intervalo nuevo
 */
function reproducirOPausar(ppm, audio, isPlay, intervaloActual) {
  let miIntervalo;
  // Para intervalo
  clearInterval(intervaloActual);
  // Empieza intervalo nuevo
  if (isPlay) {
    miIntervalo = setInterval(function() {
      // Reproduce audio
      audio.play();
    }, PPMToMiliseconds(ppm));
  }
  return miIntervalo;
}

/**
 * Transforma los PPM a milesimas
 *
 * @param {number} ppm
 * @return {number} Milesimas
 */
function PPMToMiliseconds(ppm) {
  return (60 / ppm) * 1000;
}

/**
 * Decrecer PPM
 *
 * @param {number} actualPPM
 * @param {number} cantidad
 * @return {number} Resultado
 */
function decrecerPPM(actualPPM, cantidad = 1) {
  const resultado = actualPPM - cantidad;
  return resultado < 0 ? 0 : resultado;
}

/**
 * Aumentar PPM
 *
 * @param {number} actualPPM
 * @param {number} cantidad
 * @return {number} Resultado
 */
function crecerPPM(actualPPM, cantidad = 1) {
  return actualPPM + cantidad;
}

/**
 * Evento reproduce audio
 *
 * @param {event}
 */
function eventoReproducir(event) {
  // Inicia o pausa
  reproduciendo = !reproduciendo;
  // Reproduce
  intervalo = reproducirOPausar(PPM, audioMetronomo, reproduciendo, intervalo);
  renderizarCambios(PPM, reproduciendo);
}

/**
 * Evento decrecer 5 PPPM
 *
 * @param {event}
 */
function eventoDecrecer5PPM(event) {
  PPM = decrecerPPM(PPM, 5);
  intervalo = reproducirOPausar(PPM, audioMetronomo, reproduciendo, intervalo);
  renderizarCambios(PPM, reproduciendo);
}

/**
 * Evento decrecer 1 PPPM
 *
 * @param {event}
 */
function eventoDecrecer1PPM(event) {
  PPM = decrecerPPM(PPM);
  intervalo = reproducirOPausar(PPM, audioMetronomo, reproduciendo, intervalo);
  renderizarCambios(PPM, reproduciendo);
}

/**
 * Evento crecer 1 PPPM
 *
 * @param {event}
 */
function eventoCrecer1PPM(event) {
  PPM = crecerPPM(PPM);
  intervalo = reproducirOPausar(PPM, audioMetronomo, reproduciendo, intervalo);
  renderizarCambios(PPM, reproduciendo);
}

/**
 * Evento crecer 5 PPPM
 *
 * @param {event}
 */
function eventoCrecer5PPM(event) {
  PPM = crecerPPM(PPM, 5);
  intervalo = reproducirOPausar(PPM, audioMetronomo, reproduciendo, intervalo);
  renderizarCambios(PPM, reproduciendo);
}

//---
// Eventos
//---
botonDecrecer5PPM.addEventListener('click', eventoDecrecer5PPM);
botonDecrecer1PPM.addEventListener('click', eventoDecrecer1PPM);
botonCrecer1PPM.addEventListener('click', eventoCrecer1PPM);
botonCrecer5PPM.addEventListener('click', eventoCrecer5PPM);
botonReproducir.addEventListener('click', eventoReproducir);

//---
// Inicio
//---
renderizarCambios(PPM, reproduciendo);