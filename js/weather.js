const how = document.querySelector(".weather .wp p:first-child")
const where = document.querySelector(".weather .wp p:last-child")
const wNumber = document.querySelector(".weather .temp")

const API_KEY = "fc35eba3755e8ec1db260d95d8a6e874";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const location = data.name;
        const temp = Math.round(data.main.temp);
        const weather = data.weather[0].main;
        how.innerText = weather;
        where.innerText = location;
        wNumber.innerText = `${temp}℃`;
    })
}

function onGeoError() {
    alert("I can't find your location")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

console.log(wNumber)