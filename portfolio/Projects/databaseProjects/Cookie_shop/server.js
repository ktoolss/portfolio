const express = require('express');
const app = express();

const keys = require('./config/keys');

const logger = require('morgan');
app.use(logger('dev'));

const mongoose = require('mongoose');

mongoose.connect(keys.mongoURI, 
    {
        // need these two options below
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    )
    .then(()=> console.log('Connected to database'))
    .catch(error => console.log('error'))

    let cookieSchema = mongoose.Schema({
        name: String,
        price: Number,
        tasty: Boolean
    })

    let CookieModel = mongoose.model("KS_product", cookieSchema);

    const Cookie = new CookieModel({
            name: "Chocolate chip",
            price: 1.99,
            tasty: true
        })

    const Cookie1 = new CookieModel({
        name: "Raisin",
        price: 1.99,
        tasty: true
    })

    // saving the variable that's been initialized with the collection and schema already
    Cookie.save((error, cookie)=>{
        if(error){
            console.log(error)
        } else{
            console.log(cookie)
        }
    })
    
    Cookie1.save((error, cookie)=>{
        if(error){
            console.log(error)
        } else{
            console.log(cookie)
        }
    })

    // create lets you initialize and save at the same time
    CookieModel.create({name: "Sugar Cookie", price: 5.00, tasty: true}, (error, cookie)=>{
        if(error){
            console.log(error)
        } else{
            console.log(cookie)
        }
    })

    CookieModel.find({tasty: true}, (error, cookies)=>{
        if(error){
            console.log(error)
        } else{
            console.log(cookies)
        }
    })

    app.get('*', (req, res)=>{
        var errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
        var pageError = errors[[Math.floor(Math.random() * errors.length)]];
        res.send(pageError);
    });



    const port = process.env.PORT || 3000; 
    app.listen(port, ()=> console.log(`Listening on port: ${port}`));

