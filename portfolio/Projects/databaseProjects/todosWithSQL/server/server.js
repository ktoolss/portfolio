    const express = require('express');
    const app = express();

    const logger = require('morgan');
    app.use(logger('dev'));

    const keys = require('../config/keys');

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // NOTE: replaced with built-in express methods
    // const bodyParser = require('body-parser');
    // // parse application/x-www-form-urlencoded
    // app.use(bodyParser.urlencoded({ extended: false }));
    // // parse application/json
    // app.use(bodyParser.json());


    //const {toDoArray} = require('./fakeData');

    // use server to search the client folder and hopefully find an html file to launch the 'root route'
    app.use(express.static('../client'));
    // NOTE: Do not need if using above line of code
    // app.get('/', (req, res)=>{
    //   res.send('Root route.')
    // })

    const mongoose = require('mongoose');
    mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log(`connected to ${keys.dbName}`))
    .catch(error => console.log(`Cannot connect to DB, ${error}`))


    let todoSchema = mongoose.Schema({
        description: {
            type: String,
            required: [true, "Must have description!!!"]
        },
        isComplete: {
            type: Boolean,
            default: false
        }
    })
    
    let deleteSchema = mongoose.Schema({
        description: {
            type: String,
            required: [true, "Must have description!!!"]
        },
        isComplete: {
            type: Boolean,
            default: false
        },
        deleted: {
            type: Date,
            default: Date.now()
        }
    })

    // the TodoModel stores the collection
    let TodoModel = mongoose.model('Todos', todoSchema);
    let DeleteModel = mongoose.model('DeltedTodos', deleteSchema);

    app.post('/todos', (req, res)=>{
        let newTodo = new TodoModel({
            description: req.body.description
        })
        newTodo.save((error, result)=>{ // goes to database
            if(error){
                console.log(`you got an error: ${error}`)
            } else {
                console.log(`result is: ${result}`)
                res.json(result) // goes to client
            }
        })
    });

    app.get('/todos', (req, res)=>{
        TodoModel.find({}, (error, results)=>{
            if(error){
                console.log(`you got an error: ${error}`)
            } else{
                console.log(`you got the results: ${results}`)
                res.json(results)
            }
        })
    })

    app.delete('/todos/:id', (req, res)=>{
        let requestedToDoId = req.params.id
        TodoModel.findById(requestedToDoId, (error, result)=>{
            if(error){
                console.log(`error: ${error}`)
            } else{
                console.log(`result: ${result}`)

                DeleteModel.create({
                    description: result.description,
                    isComplete: result.isComplete
                })
            }
        })
        TodoModel.findByIdAndDelete(requestedToDoId, (error, result)=>{
            if(error){
                console.log(`error: ${error}`)
            } else{
                console.log(`result: ${result}`)
                res.json(result)
            }
        })
    })

    app.put('/todos/:id', (req, res)=>{
        let requestedToDoId = req.params.id
        TodoModel.findById(requestedToDoId, (error, result)=>{
            if(error){
                console.log(`error: ${error}`)
            } else{
                console.log(`result: ${result}`)
                result.isComplete = !result.isComplete;

                result.save((error, result)=>{ // goes to database
                    if(error){
                        console.log(`you got an error: ${error}`)
                    } else {
                        console.log(`result is: ${result}`)
                        res.json(result) // goes to client
                    }
                })
            }
        })
        // find by id
        // get result back
        // if error
        // update isComplete
        // .save the new result
    })

    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`App on port: ${port}`));