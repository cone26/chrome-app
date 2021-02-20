const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector("h2");

const USER_LS = "user";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function submitHandler(event) {
  event.preventDefault();
  const currentVlaue = input.value;
  paitingName(currentVlaue);
  saveName(currentVlaue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", submitHandler);
}
function paitingName(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Fearless, ${text}.`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paitingName(currentUser);
  }
}
function init() {
  loadName();
}
init();
