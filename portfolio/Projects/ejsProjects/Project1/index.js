const express = require('express');
const app = express();
app.set('view engine', 'ejs'); // makes it so you don't have to write .ejs in your render
app.use(express.static('public')); // express will use this to look in public folder for any static files
app.use(express.urlencoded({ extended:true})); // properly pulls data out of req.body


app.get('/:cappuccino', (req, res)=>{
    // params takes value from url
    let cappuccino = req.params.cappuccino;
    // render the cappuccino variable to the home.ejs page
    res.render("home", {cappuccino: cappuccino});
});

// app.get('//:fries', (req, res)=>{
//     var fries = req.params.fries;
//     res.render("home", {fries: fries});
// });

// app.get('/about', (req, res)=>{
//     res.render("about");
// });

app.get('/about/:pizza', (req, res)=>{
    let pizza = req.params.pizza;
    res.render("about", {pizza: pizza});
});

// app.get('/contact', (req, res)=>{
//     res.render("contact");
// });

app.get('/contact/:fries', (req, res)=>{
    let fries = req.params.fries;
    res.render("contact", {fries: fries});
});

app.get('*', (req, res)=>{
    const errors = ["You broke this", "My god, what have you done?", "Impossible. The website has been sold", "I'll try and make my way to the ordinary world"];
    const pageError = errors[[Math.floor(Math.random() * errors.length)]];
    res.send(pageError);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App is running on port: ${port}.`));