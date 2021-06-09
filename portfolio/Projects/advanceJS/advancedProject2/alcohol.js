// BAC% = (A × 5.14 / W × r) - 0.015 × H

// A: Total alcohol consumed, in ounces (oz) 
// W: Body weight, in pounds (lbs) 
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women 
// H: Time passed since drinking, in hours

// Alcohol consumed will be passed as a drinks object with 
// two properties: ounces (the total volume of beverage consumed in ounces), 
// and abv (the % of alcohol by volume of the beverage as a 
// floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). 
// For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

// The gender will be passed as a string, either "male" or "female".

// Output must be returned as a number data-type, greater than or equal to 0, 
// with up to 4 decimal places. No error handling is needed.

// Using these parameters, create the function that will calculate Bob's and other partier's BAC.


let A = {
    ounces: 12,
    abv: 0.05
}

// number of drinks
let n = 10

let W = 180

let H = 1

let r = [
    {man: 0.73},
    {woman: 0.66}
]

let BAC = ((n*(A.ounces * A.abv) * 5.14 / W * r[0].man) - (0.015 * H))

if(BAC < 0){
    BAC = 0
}

console.log(`BAC% of this person is: ${BAC.toFixed(4)}%`)

if(BAC > 0.08){
    console.log(`You're ${(BAC - 0.08).toFixed(4)}% above the legal limit. You're going downtown, buddy.`)
}

