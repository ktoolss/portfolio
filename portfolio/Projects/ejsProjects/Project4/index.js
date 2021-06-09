const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const {objectArray} = require('./data'); // destructure objectArray from an object to an array with the curly brackets


app.get('/', (req, res)=>{
    res.render('home', {objectArray});
});

app.get('*', (req, res)=>{
    var errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
    var pageError = errors[[Math.floor(Math.random() * errors.length)]];
    res.send(pageError);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`app is running on port: ${port}`));