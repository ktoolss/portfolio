    const express = require('express');
    const app = express();

    const keys = require('./config/keys');

    const logger = require('morgan');
    app.use(logger('dev'));

    const mongoose = require('mongoose');

    // CONNECT - similar to FETCH, but is used to CONNECT to the DATABASE
    mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
                    .then(()=> console.log('Connected to database'));

    // let PizzaModel = mongoose.model("KS_pizza")

    // const pizzaSchema = new mongoose.Schema({
    //     name: String,
    //     price: Number
    // });

    // initialize the schema inside in the model
    const pizzaSchema = mongoose.model({name: String, price: Number})

    const Pizza = mongoose.model("pizza", pizzaSchema)

    // const thePizza = new Pizza({
    //     name: "Artichoke",
    //     price: 20
    // })

    // thePizza.save(function(error, result){
    //     if(error){
    //         console.log(error)
    //     } else {
    //         console.log(result)
    //     }
    // })

    // CREATE method is NEW and SAVE combined together. Create the new 
    Pizza.create({
        name: "Artichoke",
        price: 20
    }, (error, result)=>{ // second arguement doesn't have to be called result, can be anything
        if(error){
            console.log(error);
        } else {
            console.log(result);
        }
    })

    // FIND examples
    Pizza.find(function(error, pizza){
        if(error){
            console.log(error)
        } else {
            console.log(pizza)
        }
    })

    Pizza.find({name: "Artichoke"}, function(error, pizza){
        if(error){
            console.log(error)
        } else {
            console.log(pizza)
        }
    })
    
    // UPDATE, first position is search parameter, second position is update, third position is call back function

    Pizza.updateOne({name: "Artichoke"}, {price: 30}, function(error, data){
        if(error){
            console.log(`uh oh, you did it: ${error}`)
        } else {
            console.log(`Update successful ${data}`)
        }
    })

    // DELETE
    Pizza.deleteOne({name: "Bacon"}, function(error){
        if(error){
            console.log(`error ${error}`)
        } else {
            console.log(`delete was success`)
        }
    })


    app.get('/', (req, res)=>{
        res.send('I am the root route change again');
    });





    app.get('*', (req, res)=>{
        var errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
        var pageError = errors[[Math.floor(Math.random() * errors.length)]];
        res.send(pageError);
    });



    const port = process.env.PORT || 3000; 
    app.listen(port, ()=> console.log(`Listening on port: ${port}, UserModel: ${UserModel}`));

