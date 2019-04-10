const weatherRequest3URL = 'https://api.openweathermap.org/data/2.5/weather?id=4560349&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';
let weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', weatherRequest3URL);
weatherRequest3.responseType = 'json';
weatherRequest3.send();
let currenttemp3, mph3 = '';
weatherRequest3.onload = function () {
    let weatherData = (weatherRequest3.response);
    currenttemp3 = parseFloat(Math.round(weatherData.main.temp));
    mph3 = parseFloat(weatherData.wind.speed);
    document.getElementById("philadelphiaCurrentTemp").innerHTML = currenttemp3;
    document.getElementById("philadelphiaMph").innerHTML = mph3;
    document.getElementById("philadelphiaHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("philadelphiaCurrently").innerHTML = weatherData.weather[0].main;
    
    //set variables to help formula run more smoothly
    let speed = Math.pow(mph3, 0.16);

    //run formula
    let windchill = 35.74 + (0.6215 * currenttemp3) - (35.75 * speed) + (0.4275 * currenttemp3 * speed);

    //round windchill
    windchill = Math.round(windchill);

    //display windchill factor
    document.getElementById("philadelphiaWindchill").innerHTML = windchill;
};
