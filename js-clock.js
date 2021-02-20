const clockContainer = document.querySelector(".js-clock"),
  clock = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes}:${
    second < 10 ? `0${second}` : second
  }`;
  setInterval(getTime, 1000);
}

function init() {
  getTime();
}

init();
