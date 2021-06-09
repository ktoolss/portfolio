const animals = require('animals');

const Log = require('log.pets');


console.log(animals());

var firstAnimal = animals();
var secondAnimal = animals();
var thirdAnimal = animals();

Log.lion();

Log.zoo(firstAnimal, secondAnimal, thirdAnimal);

console.log(animals.words);


const gAnimalArray = [];

animals.words.forEach(word => {
    let lowerG = word.slice(0, 1);
    if(lowerG.toLowerCase() === "g"){
    gAnimalArray.push(word);
    } else "no matches found";
});

console.log(gAnimalArray.length);