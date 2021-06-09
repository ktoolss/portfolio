    const express = require('express');
    const app = express();

    console.log(process.env);

    const logger = require('morgan');
    app.use(logger('dev'));

    // NOTE: replaced with built-in express methods
    // const bodyParser = require('body-parser');
    // // parse application/x-www-form-urlencoded
    // app.use(bodyParser.urlencoded({ extended: false }));
    // // parse application/json
    // app.use(bodyParser.json());

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    const {toDoArray} = require('./fakeData');

    // use server to search the client folder and hopefully find an html file to launch the 'root route'
    app.use(express.static('../client'));
    // NOTE: Do not need if using above line of code
    // app.get('/', (req, res)=>{
    //   res.send('Root route.')
    // })

    // Read - GET 
    app.get('/todos', (req, res)=>{
    res.status(264).json(toDoArray);
    })
    
    // Piyush lecture on HTTP and Postman
    app.get('/todos/:id', (req, res)=>{
    let requestedTodoId = req.params.id;
    let foundToDo = toDoArray.find(t => {
        return t.id == requestedTodoId;
    })
    // tests tell user how to read the api. use tests feature in postman
    res.status(200).json(foundToDo);
    })

    // Create - POST
    app.post('/todos', (req, res)=>{

    let newTodo =  {
        id: Date.now(),
        description: req.body.description, // newToDoItem in script.js only property is description
        isComplete: false
    }

    toDoArray.push(newTodo);
    console.log("request headers are" + req.headers);
    console.log("response headers are" + res.headersSent);
    console.log("req body is:" + req.body);
    // send the newTodo back to client for data, or just at least a receipt 
    res.json(newTodo);
    })

    // Delete - DELETE
    app.delete('/todos/:id', (req, res)=>{
    let requestedTodoId = parseInt(req.params.id);
    let requestedTodoIndex = toDoArray.findIndex( todo => {
        return todo.id === requestedTodoId
    });
    let splicedToDo = toDoArray.splice(requestedTodoIndex, 1);
    res.json(splicedToDo);
    })

    

    // Update - PUT
    app.put('/todos/:id', (req, res)=> {
    let requestedTodoId = parseInt(req.params.id);
    let requestedTodo = toDoArray.find(todo => {
        return todo.id === requestedTodoId;
    })
    
    requestedTodo.isComplete = !requestedTodo.isComplete;
    res.json(requestedTodo);
    })

    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`App on port: ${port}`));