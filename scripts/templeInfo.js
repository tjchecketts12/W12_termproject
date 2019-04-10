const templeInfoURL = 'https://jessicasi.github.io/assignments/temple-inn-and-suites/data/closureInfo.json';
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
            case "Hartford":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("hartfordClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "Manhattan":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("manhattanClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "Philadelphia":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("philadelphiaClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "Raleigh":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("raleighClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            case "Columbia":
                for (let i = 0; i < temple.closuredates.length; i++) {
                    d = temple.closuredates[i];
                    str = d.split(":");
                    document.getElementById("columbiaClosed").innerHTML += "&#9656;" + str + "<br>";
                }
                break;
            default:
                break;
        }
    });


};