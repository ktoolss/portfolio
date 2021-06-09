// JM lecture 03-31-21
// Foundatiom

const express = require('express');
const app = express();
console.log(process.env.PORT);

const logger = require('morgan');
app.use(logger('dev'));

// Routes, route handler
app.get('/', (req, res)=>{
    console.log(req);
    res.send('I am the root route change again');
})

app.get('/fruit', (req, res)=>{
    res.send('Fruits are good');
})

app.get('/fruit/:fruits', (req, res)=>{
    var fruits = req.params.fruits;
    res.send(`I like ${req.params.fruits}.`);
})


// Listener
const port = process.env.PORT || 3000; // env is environment variable. PORT must be capital
app.listen(port, ()=> console.log(`Listening on port ${port}`));

// console.log(app); // see all the express object

// basic server is 7 lines