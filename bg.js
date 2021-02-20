const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.gif`;
  body.prepend(image);
  image.classList.add("bgimage");
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const radomNumber = genRandom();
  paintImage(radomNumber);
}

init();
