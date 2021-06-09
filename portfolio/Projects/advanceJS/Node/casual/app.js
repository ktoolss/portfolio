var casual = require('casual');

var point = casual.point;

console.log(casual.country);
console.log(point);

var name = casual.name;
var city = casual.city;
var color = casual.safe_color_name;
var phone = casual.phone;

console.log("Hello " + name + ". " + city + " is where I'm from." + " " + phone + " is my number. " + " " + color);
console.log(`Hi ${name} how are you today? ${city} ${color} ${phone}`)