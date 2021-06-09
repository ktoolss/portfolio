// Foundation

const asciiHeart = require("ascii-heart");
const app = asciiHeart();

console.log(app);
console.log(asciiHeart(10,10));
console.log(asciiHeart(20,20, {
    fill: "❤"
}));