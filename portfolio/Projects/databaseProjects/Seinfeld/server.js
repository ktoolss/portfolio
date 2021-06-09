    const express = require('express');
    const app = express();

    const keys = require('./config/keys');

    const logger = require('morgan');
    app.use(logger('dev'));

    const mongoose = require('mongoose');

    // CONNECT - similar to FETCH, but is used to CONNECT to the DATABASE, takes two arguements, first position URI, second position options object 
    mongoose.connect(keys.mongoURI, 
        {
            // need these two options below
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )
        .then(()=> console.log('Connected to database'))
        .catch(error => console.log('error'))

    // Mongoose lets us structure data on application level instead of on the database level


    // Schema is a method/function. This is a constructor that defines the order/structure of an object
    let userSchema = mongoose.Schema({
        name: String,
        age: Number,
        email: String
    })

    // let duckSchema = mongoose.Schema({
    //     canFly: Boolean,
    //     canSwim: Boolean,
    //     name: String,
    //     phone: Number
    // })



    // Create DOCUMENTS with MODELS. first parameter is singular name of your collection. Mongoose will create a 
    // lower case name of the collection with an s at the end. Second parameter is the schema
    let UserModel = mongoose.model("KIS_user", userSchema);

    // let DuckModel = mongoose.model("KS_user", duckSchema);



    // Create NEW INSTANCE (create data) of new model which follows the schema
    // const User = new UserModel({
    //     name: "Kramer",
    //     age: 47,
    //     email: "CosmoKramer@gmail.com"
    // })

    

    // const Duck = new DuckModel({
    //     canFly: true,
    //     canSwim: true,
    //     name: "carlos",
    //     phone: 713
    // })



    // SAVE method will save data to database. First parameter is if an error happens, second parameter is 
    // the data that was just saved. If nothing goes wrong, it will console log your data
    // User.save((error, user)=>{
    //     if(error){
    //         console.log('error')
    //     } else {
    //         console.log(user)
    //     }
    // })

    // Duck.save((error, duck)=>{
    //     if(error){
    //         console.log('error')
    //     } else {
    //         console.log(duck)
    //     }
    // })


// UserModel.create({
//     name: "Elaine",
//     age: 31,
//     email: 'elainebenes@gmail.com'
// }, (error, user)=>{
//     console.log(error ? `error creating document` : `user created ${user}`)
// })

UserModel.find({}, (error, users)=>{
    console.log(error ? `error creating document` : `user created ${users}`)
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
    app.listen(port, ()=> console.log(`Listening on port: ${port}`));

