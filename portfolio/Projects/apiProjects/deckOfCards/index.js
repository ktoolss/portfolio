const express = require('express');
const app = express();

const needle = require('needle');
app.set('view engine', 'ejs'); // allows you to not have to type the .ejs

app.use(express.static('public')); // let's you use public folder as static files


const logger = require('morgan'); // npm i morgan --save-dev
app.use(logger('dev'));


// Require needle
// - this get is refering to a get request to the URL (API end point). 
// - then there is the error and response call back function. if there is no 
//   error and the status code is 200, then you will console log
// - 2XX signifies that there was no problems, signifies success
// - Using needle we can make requests to API end points

// needle.get('http://www.google.com', function(error, response) { // this is call back function in the second position
//     if (!error && response.statusCode == 200)
//         console.log(response.body);
// });

// - You can use 'body' as a third parameter to not have to reference response in the console.log()

// needle.get('http://www.google.com', function(error, response, body) {
//     if (!error && response.statusCode == 200)
//         console.log(body);
// });

app.get('/', (req, res)=>{
    res.render('index', {cards: []})
})

let endpoint = 'https://deckofcardsapi.com/api/deck/new/draw/?count=5';

app.get('/deal', (req, res)=>{
    needle.get(endpoint, (error, data)=>{
        if(!error && data.statusCode == 200){
        res.render('index', {cards: data.body.cards})
        } else{
            res.render('error')
        }
    })
})



// what are we trying to do?
// user triggered event - button of some kind
// consume an api- deck of cards
// need to know endpoints
// READ endpoint

// Got cards - now what?
    // do something with the parsed data
        // send to client?
        // send back to index page




const port = process.env.PORT || 3000; // env is environment variable. PORT must be capital
app.listen(port, ()=> console.log(`Listening on port ${port}`));