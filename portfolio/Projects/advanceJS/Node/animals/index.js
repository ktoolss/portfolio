const { response } = require('express');
const express = require('express');
const app = express();
console.log(process.env.PORT);


const logger = require('morgan');
app.use(logger('dev'));

app.get('/', (req, res)=>{
    res.send(`root route`);
})

app.get('/animals', (req, res)=>{
    res.send(`I like animals`);
})

app.get('/animals/dogs', (req, res)=>{
    res.send(`I like dogs`);
})

app.get('/animals/cats', (req, res)=>{
    console.log(req);
    res.send(`I like cats`);
})

app.get('/animals/:something/:somethingelse', (req, res)=>{
    res.send(`I like ${req.params.something} but I do not like ${req.params.somethingelse}.`);
})


const port = process.env.PORT || 3000; // env is environment variable. PORT must be capital
app.listen(port, ()=> console.log(`Listening on port ${port}`));