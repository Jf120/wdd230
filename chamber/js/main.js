// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

document.querySelector('#lastModified').textContent = document.lastModified;


// set current date in header
const currentYear = new Date();

let month = currentDate.getMonth();
switch (month) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;  
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:    
        month = "November";
        break;
    case 11:
        month = "December";
        break;
}

let day = currentDate.getDay();
switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

let date = `${day}, ${currentYear.getDate()} ${month} ${currentDate.getFullYear()}`;

document.querySelector('#date').innerHTML = date;


// Sets navigation bar depending on media screen size
let menu = document.querySelector(".icon");
menu.onclick = function() {
    let nav = document.querySelector("#nav");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "flex";
    }
}


let size = window.matchMedia("(min-width: 1082px)");
function showNav(size) {
    if (size.matches) {
        document.getElementById("nav").style.display = "grid";     
    }
    else {
        document.getElementById("nav").style.display = "none";
    }
}
size.addEventListener("change", showNav);


// Change image depending on media screen size

if (screen.width < 490) {
    document.getElementById("icon").src = "./images/icon-small.png";
}

else {
    document.getElementById("icon").src = "./images/menu.png";
}


let sizeImg = window.matchMedia("(max-width: 490px)");
function changeImage() {
    if (screen.width < 490) {
        document.getElementById("icon").src = "./images/icon-small.png";
    }
    
    else {
        document.getElementById("icon").src = "./images/menu.png";
    }   
}
sizeImg.addEventListener("change", changeImage);

// Shows banner on certain days of the week
if (day === "Monday" || day === "Tuesday") {
    document.querySelector(".banner").style.visibility = "visible";
}

else {
    document.querySelector(".banner").style.display = "none";
}

document.querySelector(".banner__close").addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
});

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