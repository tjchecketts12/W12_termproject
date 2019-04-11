const weatherRequest1URL = 'https://api.openweathermap.org/data/2.5/weather?id=5781770&units=imperial&APPID=bb4509ecac6b78adefbfa471450e41df';
let weatherRequest1 = new XMLHttpRequest();
weatherRequest1.open('GET', weatherRequest1URL);
weatherRequest1.responseType = 'json';
weatherRequest1.send();
let currenttemp1, mph1 = '';
weatherRequest1.onload = function () {
    let weatherData = (weatherRequest1.response);
    currenttemp1 = parseFloat(Math.round(weatherData.main.temp));
    mph1 = parseFloat(weatherData.wind.speed);
    document.getElementById("southjordanCurrentTemp").innerHTML = currenttemp1;
    document.getElementById("southjordanMph").innerHTML = mph1;
    document.getElementById("southjordanHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("southjordanCurrently").innerHTML = weatherData.weather[0].main;
    
    //set variables to help formula run more smoothly
    let speed = Math.pow(mph1, 0.16);

    //run formula
    let windchill = 35.74 + (0.6215 * currenttemp1) - (35.75 * speed) + (0.4275 * currenttemp1 * speed);

    //round windchill
    windchill = Math.round(windchill);

    //display windchill factor
    document.getElementById("southjordanWindchill").innerHTML = windchill;
};
