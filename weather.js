const weather = document.querySelector(".js-weather");

const API_KEY = "d51be5c8e7634304068782989d6c1041";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @${place}`;
    });
}

// 좌표 저장
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 좌표를 가져오는데 성공했을 때 실행할 함수
function haldGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
// 좌표를 가져오는데 실패했을 때 실행할 함수
function hadleGeoError() {
  console.log("nono");
}
// 좌표를 물어보는 함수->물어본 후에 실행할 함수와 연결
function askForCoords() {
  navigator.geolocation.getCurrentPosition(haldGeoSucces, hadleGeoError);
}

// 좌표를 가져오는 함수(가져올 좌표가 없으면 물어봐야함->물어보는 함수랑 연결)
function loadcoords() {
  const loadedcoords = localStorage.getItem(COORDS);
  if (loadedcoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedcoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadcoords();
}
init();
