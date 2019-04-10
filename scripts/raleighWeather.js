const weatherRequest4URL = 'https://api.openweathermap.org/data/2.5/weather?id=4487042&appid=2dc961d7969a3deedf5172330221b7f2&units=imperial';
let weatherRequest4 = new XMLHttpRequest();
weatherRequest4.open('GET', weatherRequest4URL);
weatherRequest4.responseType = 'json';
weatherRequest4.send();
let currenttemp4, mph4 = '';
weatherRequest4.onload = function () {
    let weatherData = (weatherRequest4.response);
    currenttemp4 = parseFloat(Math.round(weatherData.main.temp));
    mph4 = parseFloat(weatherData.wind.speed);
    document.getElementById("raleighCurrentTemp").innerHTML = currenttemp4;
    document.getElementById("raleighMph").innerHTML = mph4;
    document.getElementById("raleighHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("raleighCurrently").innerHTML = weatherData.weather[0].main;
    
    //set variables to help formula run more smoothly
    let speed = Math.pow(mph4, 0.16);

    //run formula
    let windchill = 35.74 + (0.6215 * currenttemp4) - (35.75 * speed) + (0.4275 * currenttemp4 * speed);

    //round windchill
    windchill = Math.round(windchill);

    //display windchill factor
    document.getElementById("raleighWindchill").innerHTML = windchill;
};
