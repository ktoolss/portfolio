const pokemon = require('pokemon');

let poke = pokemon.random();

console.log(poke);

var pokeArray = [];

for(let i = 0; i < 5; i++){
    let poke = pokemon.random();
    pokeArray.push(poke);
}

console.log(pokeArray);

let test = pokeArray.sort(function(a, b){
    return a - b;
});

console.log(test);