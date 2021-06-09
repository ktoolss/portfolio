var colorArray = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];
var index = 0;
var time = 1000;

function rotateColor(){
    document.querySelector("body").style.backgroundColor = colorArray[index];
    index++;
    if(index == colorArray.length){
        index = 0;
    }
}

setInterval(rotateColor, time);

function clock(){
    var date = new Date();
    var hour = updateTime(date.getHours());
    var minute = updateTime(date.getMinutes());
    var second = updateTime(date.getSeconds());
    var amPm = (hour < 12) ? "AM" : "PM";


    document.getElementById("clock").innerText = hour + ":" + minute + ":" + second + " " + amPm;

    setTimeout(clock, time);
}

function updateTime(k){
    if(k < 10){
        return "0" + k;
    } else return k;
}

clock();

























// function rotateColor(){
//     document.querySelector("body").style.backgroundColor = colorArray[index];
//     index++;
//     if(index >= colorArray.length -1){
//         index = 0;
//     }
// }

// setInterval(rotateColor, 1000);

// function clock(){
//     var date = new Date();
//     var hour = updateTime(date.getHours());
//     var minute = updateTime(date.getMinutes());
//     var seconds = updateTime(date.getSeconds());
//     var midDay = "AM";
//     midDay = (hour > 12) ? "PM" : "AM";
//     document.getElementById("clock").innerText = hour + ":" + minute + ":" + seconds + midDay;
//     setTimeout(clock, 1000);
// }

// function updateTime(k){
//     if(k < 10){
//         return "0" + k;
//     } else return k;
// }

// clock();






































// function rotateColor(){
//     document.querySelector("body").style.backgroundColor = colorArray[index];
//     index++;
//     if (index >= colorArray.length){
//         index = 0;
//     }
// }

// setInterval(rotateColor, 1000);

// function currentTime(){
//     var date = new Date();
//     var hour = date.getHours();
//     var minute = date.getMinutes();
//     var seconds = date.getSeconds();
//     var midDay = "AM";
//     midDay = (hour >= 12) ? "PM" : "AM";
//     hour = updateTime(hour);
//     minute = updateTime(minute);
//     seconds = updateTime(seconds);
//     document.getElementById("clock").innerText = hour + ":" + minute + ":" + seconds + " " + midDay;
//     setTimeout(currentTime, 1000);
// }

// function updateTime(k){
//     if(k < 10){
//         return "0" + k;
//     } else return k;
// }

// currentTime();