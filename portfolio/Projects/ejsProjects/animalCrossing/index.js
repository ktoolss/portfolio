const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));
app.use(express.static('public'));
const $fetch = require('node-fetch');
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

const getVillagers = require('./controllers/getVillagers');
const searchVillagers = require('./controllers/searchVillagers');

app.get('/', getVillagers);

app.get('/search', searchVillagers);

app.get('/:villagerId', (req, res)=>{
    let {villagerId} = req.params;
    let url =`${baseUrl}/villagers/${villagerId}`;

    $fetch(url)
    .then(response => response.json()) // always parse with fetch with this response.json()
    .then(data => {
        res.render('villager', {villager: data})
    })
    .catch(err => console.log(err =>{
    res.render('error')})
    )
});

app.listen(port, ()=> console.log(`app listening on port: ${port}`));


