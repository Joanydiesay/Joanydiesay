function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});


const music = document.getElementById('background-music');
const toggleBtn = document.getElementById('toggle-music');

// Cargar estado anterior de reproducción y posición
if (localStorage.getItem('musicPlaying') === 'true') {
  music.currentTime = localStorage.getItem('musicTime') || 0;
  music.play();
}

// Guardar estado y posición antes de salir de la página
window.addEventListener('beforeunload', () => {
  localStorage.setItem('musicPlaying', !music.paused);
  localStorage.setItem('musicTime', music.currentTime);
});

// Botón para pausar o reproducir
toggleBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});
