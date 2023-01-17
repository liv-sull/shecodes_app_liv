let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[currentTime.getDay()];
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let mintues = currentTime.getMinutes();
if (mintues < 10) {
  hours = `0${mintues}`;
}
let h4 = document.querySelector("h4");
h4.innerHTML = `${day} ${hours}:${mintues}`;

function showWeather(response) {
  event.preventDefault();
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp-value").innerHTML = Math.round(
    response.data.main.temp
  );
  console.log(response.data);
  document.querySelector("#high-temp-value").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#low-temp-value").innerHTML = Math.round(
    response.data.main.temp_min
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "24ac850cde1f0b6dac6788c40829c783";
  let city = document.querySelector("#city-result").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let searchBox = document.querySelector("#search-box");

searchBox.addEventListener("submit", search);

function currentLocationButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
