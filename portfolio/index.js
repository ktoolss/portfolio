// JM lecture 03-31-21
// Foundatiom

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// * project data coming from here
const {data} = require('./helpers/projectData')

const logger = require('morgan');
app.use(logger('dev'));


app.use(express.static('public'));

// Routes, route handler
app.get('/home', (req, res)=>{
    console.log(req);
    // * sending project data here
    res.render('home', {data});
});


// app.get('/home', (req, res)=>{
//     console.log(req);
//     res.render('home', {data: data});
// });

app.get('/about', (req, res)=>{
    console.log(req);
    res.render('about');
});



app.get('*', (req, res)=>{
    var errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
    var pageError = errors[[Math.floor(Math.random() * errors.length)]];
    res.send(pageError);
});

// Listener
const port = process.env.PORT || 3000; // env is environment variable. PORT must be capital
app.listen(port, ()=> console.log(`Listening on port ${port}`));

// console.log(app); // see all the express object

// basic server is 7 lines