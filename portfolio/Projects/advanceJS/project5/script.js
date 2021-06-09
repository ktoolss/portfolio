let imageArray = ['img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg', 'img/4.jpeg', 'img/5.jpeg', 'img/6.jpeg'];
let picture = document.getElementById('imageOne');
let index = 0;

function forward(){
    console.log(`Next - Tracker Before Function Call: ${index}`)     
    if (index == (imageArray.length -1)){
        picture.setAttribute('src', imageArray[index]);
    } else if ((index >= 0) && (index < imageArray.length)){
        index++;
        picture.setAttribute('src', imageArray[index]);
    }
    console.log(`Next - Tracker After Function Call: ${index}`);
}

function backward(){
    console.log(`Next - Tracker Before Function Call: ${index}`);

    if (index == 0){
        picture.setAttribute('src', imageArray[index]);
    } else if (index > 0){
        index--;
        picture.setAttribute('src', imageArray[index]);
    }
    console.log(`Next - Tracker After Function Call: ${index}`);
}














// var imageArray = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg", "img/5.jpeg", "img/6.jpeg"];
// var index = 0;

// // function rotateImage(){
// //     document.querySelector("img").setAttribute("src", imageArray[index]);
// //     index++;
// //     if(index >= imageArray.length){
// //         index = 0;
// //     }
// // }

// // setInterval(rotateImage, 3000);

// var image = document.querySelector("img");

// var next = document.querySelector(".next");
// var previous = document.getElementById("previous");

// // console.log(index);
// // console.log(image);

// // next.onclick = function(){

//     // alert("button was clicked");
//     // image.setAttribute("src", imageArray[index]);
//     // index++;
    
//     // if (index > imageArray.length){
//     //     index = 0;
//     // }
// //     console.log(index);
// //     console.log(image);
// // }

// next.addEventListener('click', e => {
//     // alert("button was clicked");
//     image.setAttribute("src", imageArray[index]);
//     index++;
    
//     if (index >= imageArray.length){
//         index = 0;
//         console.log(index);
//     }})



// previous.addEventListener('click', e => {
//     // alert("button was clicked");
//     image.setAttribute("src", imageArray[index]);
//     index--;
    
//     if (previous.clicked == true && index == 0){
//         index = imageArray.length;
//         console.log(index);
//     }
//     })

