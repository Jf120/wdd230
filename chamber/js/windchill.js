function windchill(temperature, wind_speed) { 
    if (temperature <= 50 && wind_speed >= 3) {
        let wc = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16) + 0.4275 * temperature * Math.pow(wind_speed, 0.16);
        document.querySelector('#windchill').innerHTML = wc.toFixed(2);
    }

    else {
        document.querySelector('#windchill').innerHTML = "N/A";
    }
}

export { windchill };