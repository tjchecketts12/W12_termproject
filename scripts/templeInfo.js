const templeInfoURL = 'https://tjchecketts12.github.io/termproject/data/closureInfo.json';
let templeInfoRequest = new XMLHttpRequest();
templeInfoRequest.open('GET', templeInfoURL);
templeInfoRequest.responseType = 'json';
templeInfoRequest.send();
templeInfoRequest.onload = function () {
    let templeData = templeInfoRequest.response;
    console.log(templeData);
    let temples = templeData['temples'];
    let d = "";
    var str = "";
    temples.forEach(temple => {
        switch (temple.templename) {
            case "Boston":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("bostonClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "Oakland":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("oaklandClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "Jordan River":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("jordanriverClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "Philadelphia":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("philadelphiaClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "San Diego":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("sandiegoClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "Rexburg":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("rexburgClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            default:
                break;
        }
    });


};