const express = require('express');
const app = express();

const needle = require('needle');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('home', {rate: ""}); // the home rate is set to empty string
});

app.get('/getPrice', (req, res)=>{
    let indexButton = req.query.btn; // input name attributes are btn
    //  * needle API here
    needle.get('https://api.coindesk.com/v1/bpi/currentprice.json', (error, response, body)=>{
        if(!error && response.statusCode == 200){
            // * parse JSON object
            let object = JSON.parse(body);
            let rate = object.bpi[indexButton].rate;
            let symbol = object.bpi[indexButton].symbol;
            // * render home.ejs with the symbol and rate variables
            res.render('home', {symbol, rate}); // the getPrice rate is set to the rate variable
        }
    });
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(port, `Listening on port: ${port}`));