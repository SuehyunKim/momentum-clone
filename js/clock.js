const clock = document.querySelector("h1#clock");
const today = document.querySelector("h2#date");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate(){
    const dates = new Date();
    const year = String(dates.getFullYear());
    const month = String(dates.getMonth()).padStart(2, "0");
    const date = String(dates.getDate()).padStart(2, "0");
    const day = days[dates.getDay()];
    today.innerHTML = `${year}.${month}.${date} ${day}`;
}

getClock();
getDate();
setInterval(getClock, 1000);