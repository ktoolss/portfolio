var imageArray = ["img/background1.jpg", "img/background2.jpg", "img/background3.jpg"];
var index = 0;

function rotateImage(){
    document.querySelector("img").setAttribute("src", imageArray[index]);
    index++;
    if(index >= imageArray.length){
        index = 0;
    }
}

setInterval(rotateImage, 3000);
