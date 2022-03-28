
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

// Fetch data from the JSON file
fetch('./js/data.json').then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];
    populate(members);
});


function populate (members) {

    const numbersUsed = [];
    for (let i = 0; i < members.length; i++) {
        numbersUsed.push(i);
    }

    for (let i = 0; i < 3; i++) {
        
        let random = Math.floor(Math.random() * members.length);
        console.log(random);

        if (numbersUsed.includes(random)) {
            numbersUsed.splice(random, 1);
            console.log(numbersUsed);
        } else {
            random = Math.floor(Math.random() * members.length);

            while (!numbersUsed.includes(random)) {
                random = Math.floor(Math.random() * members.length);
                console.log(random);
            }
            numbersUsed.splice(random, 1);
            console.log(numbersUsed);
        }

        const member = members[random];
        let className = '';
        switch (i) {
            case 0:
                className = 'up';
                break;
            case 1:
                className = 'middle';
                break;
            case 2:
                className = 'down';
                break;
        }

        let holder = document.querySelector(`.${className}`);
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let email = document.createElement('p');
        let phone = document.createElement('p');

        h2.textContent = member.name;
        img.setAttribute('src', member.logo);
        img.setAttribute('alt', member.name);
        email.textContent = member.email;
        phone.textContent = member.phone;

        holder.appendChild(h2);
        holder.appendChild(img);
        holder.appendChild(email);
        holder.appendChild(phone);

    }

};


import * as main from './main.js';

main.setDate();
main.navBar();
main.iconMenu();