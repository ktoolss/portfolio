const express = require('express');
const app = express();

const keys = require('./config/keys');

const logger = require('morgan');
app.use(logger('dev'));

const mongoose = require('mongoose');

// importing model
// require MODELS FOLDER and FILE destructure the CharacterModel so you only have access to it, not the whole file
const {CharacterModel} = require('./models/CharacterModel.js');

const marvelCharacters = require('marvel-characters');
const marvel = require('marvel-characters');

const randomMarvel = marvel(); // in the documentation, this is shown to provide a random marvel character


mongoose.connect(keys.mongoURI, 
    {
        // need these two options below
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    )
    .then(()=> console.log('Connected to database'))
    .catch(error => console.log('error'))

    


    // Creating a new character using the imported CharacterModel
    const CaptainAmerica = new CharacterModel({
        alias: "Cap A",
        fname: "steve",
        lname: "rogers",
        nemesis: "Red Skull",
        hero: true
        })

    // CaptainAmerica.save((error, cookie)=>{
    //     if(error){
    //         console.log(error)
    //     } else{
    //         console.log(cookie)
    //     }
    // })

    // function searchMarvel(){
    //     let searchMe = "Captain America";
    //     let searchedMarvel = marvel.characters.includes(searchMe);
    //     (searchedMarvel) ? console.log(`The index for ${searchMe} is: [${marvel.characters.indexOf(searchMe)}]`) // they wanted Iron Man displayed in brackets and quotes 
    //     : console.log("No characters returned");
    // }
    
    // searchMarvel();

    // marvel.characters.forEach(character => {
    //     let searchedMarvel = marvel.characters.includes(character);
    //     (searchedMarvel) ? console.log(`The index for ${character} is: [${marvel.characters.indexOf(character)}]`) // they wanted Iron Man displayed in brackets and quotes 
    //     : console.log("No characters returned");
    // });

    marvel.characters.forEach(character => {
        let indexMarvel = marvel.characters.indexOf(character);
        if(character){ 
            CharacterModel.create({alias: character, index: indexMarvel}, (error, response)=>{
            if(error){
                console.log(error)
            } else{
                console.log(response)
            } 
    })}})
    

    app.get('*', (req, res)=>{
        var errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
        var pageError = errors[[Math.floor(Math.random() * errors.length)]];
        res.send(pageError);
    });



    const port = process.env.PORT || 3000; 
    app.listen(port, ()=> console.log(`Listening on port: ${port}`));