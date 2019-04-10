const weatherRequest1URL = 'https://api.openweathermap.org/data/2.5/weather?id=4835806&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';
let weatherRequest1 = new XMLHttpRequest();
weatherRequest1.open('GET', weatherRequest1URL);
weatherRequest1.responseType = 'json';
weatherRequest1.send();
let currenttemp1, mph1 = '';
weatherRequest1.onload = function () {
    let weatherData = (weatherRequest1.response);
    currenttemp1 = parseFloat(Math.round(weatherData.main.temp));
    mph1 = parseFloat(weatherData.wind.speed);
    document.getElementById("hartfordCurrentTemp").innerHTML = currenttemp1;
    document.getElementById("hartfordMph").innerHTML = mph1;
    document.getElementById("hartfordHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("hartfordCurrently").innerHTML = weatherData.weather[0].main;
    
    //set variables to help formula run more smoothly
    let speed = Math.pow(mph1, 0.16);

    //run formula
    let windchill = 35.74 + (0.6215 * currenttemp1) - (35.75 * speed) + (0.4275 * currenttemp1 * speed);

    //round windchill
    windchill = Math.round(windchill);

    //display windchill factor
    document.getElementById("hartfordWindchill").innerHTML = windchill;
};
