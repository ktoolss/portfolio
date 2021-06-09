const { response } = require('express');
const express = require('express');
const app = express();


const logger = require('morgan');
app.use(logger('dev'));

app.get('/', (req, res)=>{
    res.send(`bank root route`);
});

app.get('/account', (req, res)=>{
    res.send(`This is a bank account.`);
});

app.get('/account/:name', (req, res)=>{
    res.send(`This is a bank account of ${req.params.name}.`);
});

app.get('/account/:name/:num', (req, res)=>{
    // let name = req.params.name;
    // let num = req.params.num;
    let {name, num} = req.params;
    res.send(`This is a bank account of ${name}. Here is the account with $${num} dollars in it.`);
});

app.get('/account/:name/:amount/:num', (req, res)=>{
    // let name = req.params.name;
    // let num = req.params.num;
    let {name, amount, num} = req.params;
    let result = (amount/2);
    

    let message = amount > 100 ? `${name}, can I borrow ${result} from your account# ${num}?` : `${name}, do you like living on the edge?`;
    res.send(message);

    // res.send(`This is a bank account of ${name}. Here is the account with $${amount} dollars in it. This is the account# ${num}`);

});




const port = process.env.PORT || 3000; // env is environment variable. PORT must be capital
app.listen(port, ()=> console.log(`Listening to bank on port ${port}`));