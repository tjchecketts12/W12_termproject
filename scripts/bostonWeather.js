const weatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=4930956&units=imperial&APPID=bb4509ecac6b78adefbfa471450e41df';
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', weatherRequestURL);
weatherRequest.responseType = 'json';
weatherRequest.send();
let currenttemp, mph = '';
weatherRequest.onload = function () {
    let weatherData = (weatherRequest.response);
    currenttemp = parseFloat(Math.round(weatherData.main.temp));
    mph = parseFloat(weatherData.wind.speed);
    document.getElementById("bostonCurrentTemp").innerHTML = currenttemp;
    document.getElementById("bostonMph").innerHTML = mph;
    document.getElementById("bostonHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("bostonCurrently").innerHTML = weatherData.weather[0].main;

    //set variables to help formula run more smoothly
    let speed = Math.pow(mph, 0.16);

    //run formula
    let windchill = 35.74 + (0.6215 * currenttemp) - (35.75 * speed) + (0.4275 * currenttemp * speed);

    //round windchill
    windchill = Math.round(windchill);

    //display windchill factor
    document.getElementById("bostonWindchill").innerHTML = windchill;
};
