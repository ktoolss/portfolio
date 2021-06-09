var imageArray = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg", "img/5.jpeg", "img/6.jpeg"];
var index = 0;
var picture = document.getElementById("imageOne");

function next(){
    if(index == imageArray.length - 1){
        picture.setAttribute('src', imageArray[index]);
    } else if(index < imageArray.length){
        index++;
        picture.setAttribute('src', imageArray[index]);
    }
}

function previous(){
    if(index == 0){
        picture.setAttribute('src', imageArray[index]);
    } else if(index > 0){
        index--;
        picture.setAttribute('src', imageArray[index]);
    }
}