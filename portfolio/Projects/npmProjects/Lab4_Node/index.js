const express = require('express');
const app = express();

const {zoo} = require('./data'); // destructure zoo from an object to an array with the curly brackets

//console.log(zoo);

// Reuire the data from the data.js file

// Create a root route handler that sends the data from above to browser
// 1. Test with Postman
// 2. Test with CURL
// 3. Test with the browser

app.get('/', (req, res)=>{
    res.send(zoo);
})

// Build a route handler for /names that sends back h1-encased names of all the animals
// Results should be:
                //  "Name: <name of the animal>"

app.get('/names', (req, res)=>{
    let result = zoo.map(element => {
        return `<h1>Name: ${element.name}</h1>`
    })
    res.send(result.join(" "));
})

// Build a route handler for /types that sends back h1-encased types of all the animals
// Encase the name of the animal in an h2 tag
// Results should be:
                //  "Type of animal: <type of animal>"
                //  "Name: <name of the animal>"

app.get('/types', (req, res)=>{
    let result = zoo.map(element => {
        return `
        <h1>Breed: ${element.breed}</h1>
        <h2>Name: ${element.name}</h2>
        `
    })
    res.send(result.join(" "));
})

// Build a route handler for /owner that sends back h1-encased owner of all the animals
// Encase the name of the animal in an h2 tag
// Results should be:
                //  "Owner: <owner of the animal>"
                //  "Name: <name of the animal>"

app.get('/owner', (req, res)=>{
    let result = zoo.map(element => {
        return `
        <h1>Owner: ${element.owner.fname}</h1>
        <h2>Name: ${element.name}</h2>
        `
    })
    res.send(result.join(" "));
})

// Build a route handler for /contact that sends back h1-encased name of all the animals
// Encase the owner of the animal in an h2 tag
// Encase the owner's phone number of the animal in an h3 tag
// Results should be:
                //  "Name: <name of the animal>"
                //  "Owner: <owner of the animal>"
                //  "Phone: <phone # of the owner of the animal>"

app.get('/contact', (req, res)=>{
    let result = zoo.map(element => {
        return `
        <h1>Name: ${element.name}</h1>
        <h2>Owner: ${element.owner.name}</h2>
        <h3>Phone: ${element.owner.phone}</h3>
        `
    })
    res.send(result.join(" "));
})

// Build a route handler for /friendly that sends back h1-encased result as follows:
//  "<name of the animal> will make a good pet: (Yes or No depnding on isPet key)"

app.get('/friendly', (req, res)=>{
    let newArray = [];
    let zooFunction = zoo.map(element =>{
        return (element.isPet ? newArray.push(`${element.name} will make a good pet.`) 
        : newArray.push(`${element.name} will kill you.`));
    })
    res.send(`<h1>${newArray.join(`<br>`)}</h1>`);
})


app.get('*', (req, res)=>{
    var errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
    var pageError = errors[[Math.floor(Math.random() * errors.length)]];
    res.send(pageError);
});

// const port = process.env.PORT || 3001;
// app.listen(port, ()=> console.log(`App listening on port: ${port}`));

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`listen on port ${port}`));


