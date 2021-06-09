const express = require('express')
const app = express();

const $fetch = require('node-fetch')

const port = process.env.PORT || 3000

const initDrink = {
    strInstructions: `Mix lemonade and water according to instructions on back of can. If the instructions say 
    to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). 
    Mix well. Pour into glass of crushed ice. Excellent!`,
    strDrink: 'Shark Attack',
    strDrinkThumb: `https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg`,
    strIngredient1: 'Vodka',
    strIngredient2: 'Vodka',
    strIngredient3: 'Vodka',
    strIngredient4: 'Vodka',
    strMeasure1: '1st can',
    strMeasure2: '2nd can',
    strMeasure3: '3rd can',
    strMeasure4: '4th can',
    imageSrc: "https://www.thecocktaildb.com/images/ingredients/gin-Small.png"
}


app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.render('index.ejs', {data: initDrink})
})

app.get('/getImage', (req, res) => {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    $fetch(url)
    .then(response => {
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data => {
        res.render('index.ejs', {data: data.drinks[0]})
    })
    .catch(error => console.error('Error from network: ', error))
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})