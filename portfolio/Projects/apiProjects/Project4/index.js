const express = require('express');
const app = express();


const logger = require('morgan');
app.use(logger('dev'));


// * need API key
const yelp = require('yelp-fusion');
const apiKey = '2k9E1NFWe2I0jtV5MOGhn7EzV3_joJCSP0rWAUuLfpQ8PHNYbIYxk8GOAp1Ijgc-LRwVzdNxQQwSfkyQ3oHrxSkE7gSM0I1Kljfz2iwIWuXXU23p94vnL0B4tAd7YHYx';
const client = yelp.client(apiKey);


app.set('view engine', 'ejs'); // allows you to not have to type the .ejs

app.use(express.static('public')); // let's you use public folder as static files


app.get('/', (req, res)=>{
    res.render('home');
});


app.get('/locationSearch', (req, res)=>{
    // * yelp has its own "fetch" called "client" where you just search for specific objects 
    // * without the need for a endpoint

    // * fetches the locale from the request query from Yelp for the top 10 food places
    client.search({
        location: req.query.locale,
        limit: 10
    }).then(response => {
        // * parse the JSON of the response
        let results = response.jsonBody.businesses;
        console.log(response.jsonBody.businesses);
        // * Render to the results.ejs page
        res.render('results', {data: results});
    }).catch(e => {
        console.log(e);
    });
});




app.get('*', (req, res)=>{
    res.render('error');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port: ${port}`));