const weatherRequest5URL = 'https://api.openweathermap.org/data/2.5/weather?id=4575352&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';
let weatherRequest5 = new XMLHttpRequest();
weatherRequest5.open('GET', weatherRequest5URL);
weatherRequest5.responseType = 'json';
weatherRequest5.send();
let currenttemp5, mph5 = '';
weatherRequest5.onload = function () {
    let weatherData = (weatherRequest5.response);
    currenttemp5 = parseFloat(Math.round(weatherData.main.temp));
    mph5 = parseFloat(weatherData.wind.speed);
    document.getElementById("columbiaCurrentTemp").innerHTML = currenttemp5;
    document.getElementById("columbiaMph").innerHTML = mph5;
    document.getElementById("columbiaHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("columbiaCurrently").innerHTML = weatherData.weather[0].main;
    
    //set variables to help formula run more smoothly
    let speed = Math.pow(mph5, 0.16);

    //run formula
    let windchill = 35.74 + (0.6215 * currenttemp5) - (35.75 * speed) + (0.4275 * currenttemp5 * speed);

    //round windchill
    windchill = Math.round(windchill);

    //display windchill factor
    document.getElementById("columbiaWindchill").innerHTML = windchill;
};
