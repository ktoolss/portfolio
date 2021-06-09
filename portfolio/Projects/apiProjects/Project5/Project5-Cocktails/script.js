// https://www.thecocktaildb.com/api.php

$('button').on('click', ()=>{
    // * empty all these html tags before you fetch so you can refill them with fetch data
    $('#drinkName').empty()
    $('#displayDrinkImage').empty()
    $('#displayInstructions').empty()
    $('#ingredientDisplay').empty()
    let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data => {
        // * declarse all your variables with the first drink data in the drinks array
        let {strDrink, strDrinkThumb, strInstructions} = data.drinks[0]
        // * jquery append the data to the html tags
        $('#drinkName').append(strDrink);
        $('#displayDrinkImage').attr('src', strDrinkThumb)
        $('#displayInstructions').append(strInstructions)
        let count = 1;
        while(data.drinks[0][`strIngredient${count}`]){
            let ingredient = data.drinks[0][`strIngredient${count}`]
            let measurements = data.drinks[0][`strMeasure${count}`]
            $('#ingredientDisplay').append(`
                <div class="thumb_container col-lg-2 col-xs-4">
                    <img class='thumb' src="https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png" alt="" srcset="">
                    <p>${measurements} ${ingredient}</p>    
                </div>
            `)
            count ++
        }
    })
    .catch(error => console.error('Error from network: ', error))
})