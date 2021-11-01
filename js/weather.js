const API_KEY = "9fee78a182a7dbebb5084ad5253e97d6";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:last-child");
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        city.innerText = `@ ${data.name}`;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp}℃`;
    });
}

function onGeoError() {
    alert("Can't find your current location. Please turn on the GPS.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);