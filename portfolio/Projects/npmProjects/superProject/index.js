const marvelCharacters = require('marvel-characters');
const marvel = require('marvel-characters');

const randomMarvel = marvel(); // in the documentation, this is shown to provide a random marvel character

console.log(randomMarvel);
//console.log(marvel.characters);

const marvelArray = [];

marvel.characters.forEach(character => {  // this iterates over the marvel.characters array atleast one time
    if(character.slice(0, 3) == "Man"){   // this slices the first 3 index from the character's string and compares them to Man
    marvelArray.push(character);
    }
});

console.log(marvelArray);

// function searchIronMan(){
//     marvel.characters.forEach(character => {
//         var notIronMan = [];
//         var ironMan = marvel.characters.indexOf("Iron Man");
//         (character == marvel.characters[ironMan]) ? console.log(marvel.characters[ironMan][name]) : notIronMan.push(character);
        
//     })
// }

function searchIronMan(){
    let ironMan = marvel.characters.includes("Iron Man");
    (ironMan) ? console.log(`['Iron Man']`) // they wanted Iron Man displayed in brackets and quotes 
    : console.log("Iron Man snapped out.");
}

searchIronMan();




function searchBatMan(){
        (marvel.characters.includes("Batman")) ? console.log("I am Batman.") : console.log("There is no Batman.");
}

searchBatMan();

