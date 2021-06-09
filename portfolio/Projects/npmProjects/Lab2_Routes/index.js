const express = require('express');
const app = express();

const chalk = require('chalk');

const logger = require('morgan'); // gives you a logger

// set up your logger

app.use(logger('dev'));  // use dev instead of short. it's the specific data display we want to use

// BUILD the following route handlers
// use POSTMAN to test - NO BROWSERS allowed - backend hats only

// 1. build a root route that returns 'I am the root route.'

app.get('/', (req, res)=> {
    res.send("I am the root route");
})

// 2. build a route for /animals that returns 'I love animals.'

app.get('/animals', (req, res)=>{
    res.send('animal time');
})

// BUILD the following route handlers
// use CURL to test - NO BROWSERS allowed - backend hats only

// 3. build a route for /animals/cats that returns 'I love cats.'

app.get('/animals/cats', (req, res)=>{
    res.send('cats are wack');
})

// 4. build a route for /desserts that returns 'I love desserts.'

app.get('/desserts', (req, res)=>{
    res.send('desserts rule');
})

// app.get('/fool/:id/:title', (req, res)=>{
//     res.send('A fool and his gold are soon parted');
// })



// BUILD the following route handler
// use CURL or POSTMAN to test - NO BROWSERS allowed - backend hats only

// 5. build a route that handles ALL other routes that returns 'Page not found yet.' ('*' also needs to be the last .get)
app.get('*', (req, res)=>{
    res.send('Page not found');
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(chalk.green(`Listening on port ${chalk.cyanBright(port)}`)));