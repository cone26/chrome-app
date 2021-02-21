const playBtn = document.querySelector(".musicButtons__play");
const pauseBtn = document.querySelector(".musicButtons__pause");
const audio = new Audio("bgm.wav");

function playClickHandler() {
  audio.play();
}

function pauseClickHandler() {
  audio.pause();
}
function init() {
  playBtn.addEventListener("click", playClickHandler);
  pauseBtn.addEventListener("click", pauseClickHandler);
}

init();
