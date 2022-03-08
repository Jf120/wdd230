const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3598132&appid=6d8bed17e78d94b0f60b75c0e90d68fa';

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = `${(jsObject.main.temp - 273.15).toFixed(2)} C`;
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weather-icon').setAttribute('src', iconsrc);
        document.querySelector('#weather-icon').setAttribute('alt', desc);
        document.querySelector('#figcaption').innerHTML = desc;
    });


