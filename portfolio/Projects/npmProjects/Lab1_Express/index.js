// JM lecture 4-3-2021

// npm i express to get module

const express = require('express');
const app = express();

app.get('/', (req, res)=> {  // switched req and res
  res.send(' I am the root route, routing for you');
});

const port = process.env.PORT || 8080;  // changed end to env
app.listen(port, ()=> console.log(`App listening on port ${port}`)); // lowercase port