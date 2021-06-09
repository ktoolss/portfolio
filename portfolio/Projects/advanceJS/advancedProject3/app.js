var myPets = [
    {   
        "type": "camel",
        "name": "Wednesday",
        "age": 8,
        "food": "Hay, mostly",
        "dailyFoodQuantity": 30
    },
    {
        "type": "cobra",
        "name": "Slitherio",
        "age": 2,
        "food": "Rodents",
        "dailyFoodQuantity": 0.05
    },
    {   
        "type": "elephant",
        "name": "Hathi",
        "age": 1,
        "food": "Plant matter, grass, hay, fruit",
        "dailyFoodQuantity": 50
    }
]


function compare(a, b) {
    if (a.dailyFoodQuantity > b.dailyFoodQuantity) return 1;
    if (b.dailyFoodQuantity > a.dailyFoodQuantity) return -1;

    return 0;
}

let foodQ = myPets.sort(compare)
console.log(foodQ)