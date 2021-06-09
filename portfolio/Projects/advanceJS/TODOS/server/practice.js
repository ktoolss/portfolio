const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const {toDoArray} = require('./fakeData');

// this use the client folder as the root route
app.use(express.static('../client'));

app.get('/todos', (req, res)=>{
    res.json(toDoArray);
})

app.post('/todos', (req, res)=>{
    let newId = toDoArray.length +1;

    let newToDo = {
        id: newId,
        description: req.body.description,
        isComplete: false
    }
    toDoArray.push(newToDo);
    res.json(newToDo);
})

app.delete('/todos/:id', (req, res)=>{
    let requestedToDoId = parseInt(req.params.id);
    let requestedToDoIndex = toDoArray.findIndex(toDo =>{
        return toDo.id === requestedToDoId
    })
    toDoArray.splice(requestedToDoIndex, 1);
    res.json(toDoArray)
})

app.put('/todos/:4', (req, res)=>{
    let requestedToDoId = req.params.id;
    let requestedToDo = toDoArray.find(todo => {
        return todo.id === requestedToDoId
    })

    requestedToDo.isComplete = !requestedToDo.isComplete;
    res.json(requestedToDo);
})




const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`app is listening on localhost:${port}`));