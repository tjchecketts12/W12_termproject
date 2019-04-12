const weatherRequest2URL = 'https://api.openweathermap.org/data/2.5/weather?id=5378538&units=imperial&APPID=bb4509ecac6b78adefbfa471450e41df';
let weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', weatherRequest2URL);
weatherRequest2.responseType = 'json';
weatherRequest2.send();
let currenttemp2, mph2 = '';
weatherRequest2.onload = function () {
    let weatherData = (weatherRequest2.response);
    currenttemp2 = parseFloat(Math.round(weatherData.main.temp));
    mph2 = parseFloat(weatherData.wind.speed);
    document.getElementById("oaklandCurrentTemp").innerHTML = currenttemp2;
    document.getElementById("oaklandMph").innerHTML = mph2;
    document.getElementById("oaklandHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("oaklandCurrently").innerHTML = weatherData.weather[0].main;
    
    //set variables to help formula run more smoothly
    let speed = Math.pow(mph2, 0.16);

    //run formula
    let windchill = 35.74 + (0.6215 * currenttemp2) - (35.75 * speed) + (0.4275 * currenttemp2 * speed);

    //round windchill
    windchill = Math.round(windchill);

    //display windchill factor
    document.getElementById("oaklandWindchill").innerHTML = windchill;
};
