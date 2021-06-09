const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send(`I am the root route`);
});

app.get('/messages', (req, res)=>{
    var messageArray = [
        {name: "Jim", message: "I'm a cartoonist."},
        {name: "Jane", message: "How about dinner?"},
        {name: "Gary", message: "Jane, I love Jim."}
    ];
    res.render('messages', {messageArray});
})

app.get('*', (req, res)=>{
    var errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
    var pageError = errors[[Math.floor(Math.random() * errors.length)]];
    res.send(pageError);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`app is running on port: ${port}`));