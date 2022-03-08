
// Changes hero based on screen size - Large
let sizeBg = window.matchMedia("(max-width: 1082px)");
function changeBgLarge(sizeBg) {
    if (sizeBg.matches) {
        document.querySelector(".hero").style.backgroundImage = "url(./images/temporal-medium.jpg)";
    }

    else {
        document.querySelector(".hero").style.backgroundImage = "url(./images/temporal-large.jpg)";
    }
}
sizeBg.addEventListener("change", changeBgLarge);

// Changes hero based on screen size - Small

if (screen.width < 1082) {
    document.querySelector(".hero").style.backgroundImage = "url(./images/temporal-medium.jpg)";
}

else {
    document.querySelector(".hero").style.backgroundImage = "url(./images/temporal-large.jpg)";
}

let sizeBgSmall = window.matchMedia("(max-width: 490px)");
function changeBgSmall(sizeBgSmall) {
    if (sizeBgSmall.matches) {
        document.querySelector(".hero").style.backgroundImage = "url(./images/temporal-small.jpg)";
    }

    else {
        document.querySelector(".hero").style.backgroundImage = "url(./images/temporal-medium.jpg)";
    }
}
sizeBgSmall.addEventListener("change", changeBgSmall);

import * as weather from './windchill.js';

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3598132&appid=6d8bed17e78d94b0f60b75c0e90d68fa';

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        let wind_speed = jsObject.wind.speed;
        let temperature = jsObject.main.temp - 273.15;
        weather.windchill(temperature, wind_speed);
        document.querySelector('#current-temp').innerHTML = `${(temperature).toFixed(2)} C`;
        document.querySelector('#windspeed').innerHTML = `${(wind_speed).toFixed(2)} m/s`;
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#weather-icon').setAttribute('src', iconsrc);
        document.querySelector('#weather-icon').setAttribute('alt', desc);
    });

import * as main from './main.js';

main.setDate();
main.navBar();
main.iconMenu();