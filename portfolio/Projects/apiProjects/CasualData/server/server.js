const express = require('express');
const app = express();

var casual = require('casual');

const keys = require('../config/keys');

const logger = require('morgan');
app.use(logger('dev'));

const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// importing model
// require MODELS FOLDER and FILE destructure the CharacterModel so you only have access to it, not the whole file
const {CasualModel} = require('./models/CasualModel.js');

// use server to search the client folder and hopefully find an html file to launch the 'root route'
app.use(express.static('../client'));

app.get('/data', (req, res)=>{
    let successArray = ["uh-oh, you did it","uh-oh, you did it","uh-oh, you did it"]
res.json(successArray)
})

app.put('/data', (req, res)=>{
res.json(req.params)
})

app.post('/data', (req, res)=>{
    console.log(req.body)
    let requestedPerson = req.body;

    if(requestedPerson){
        // try putting casual.define outside, get rid of line 53 and line 54 just put casual.person instead of having line 53
        casual.define('person', function() { // casual documentation has casual.define
            return {
                title: casual.title,
                fname: requestedPerson.firstName,
                lname: casual.last_name,
                city: casual.city,
                Address: casual.address,
                alive: Boolean(Math.round(Math.random()))
            };
        });
        let person = casual.person;
        // casualArray.push(person)

        if(person){
        CasualModel.create({            // mongoose create
                title: person.title,
                fname: person.fname,
                lname: person.lname,
                city: person.city,
                Address: person.address,
                alive: person.alive
        }, (error, response)=>{
        if(error){
            console.log(error)
        } else{
            console.log(response)
        } 
})}
    }
})

app.delete('/data/:id', (req, res)=>{
    let requestedPersonId = req.params.id
    CasualModel.findByIdAndDelete(requestedPersonId, (error, result)=>{
        if(error){
            console.log(`error: ${error}`)
        } else{
            console.log(`result: ${result}`)
            res.json(result)
        }
    })
})


// acting as client, sending a request
mongoose.connect(keys.mongoURI, 
    {
        // need these two options below
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    )
    .then(()=> console.log(`connected to ${keys.dbName}`))
    .catch(error => console.log('error'))

    // let casualPerson = new CasualModel({
    //     title: casual.title,
    //     fname: casual.first_name,
    //     lname: casual.last_name,
    //     city: casual.city,
    //     Address: casual.address
    //     })


    // just generating some fake data with the casualArray and while loop
    // var casualArray = [];
    
    


    app.get('*', (req, res)=>{
        var errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
        var pageError = errors[[Math.floor(Math.random() * errors.length)]];
        res.send(pageError);
    });



    const port = process.env.PORT || 3000; 
    app.listen(port, ()=> console.log(`Listening on port: ${port}`));