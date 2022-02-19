
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

let temperature = 43;
document.querySelector("#temperature").textContent = `${temperature} °C`;
let wind_speed = 4;
document.querySelector("#windspeed").innerHTML  = `${wind_speed} km/h`;

weather.windchill(temperature, wind_speed);

import * as main from './main.js';

main.setDate();
main.navBar();
main.iconMenu();