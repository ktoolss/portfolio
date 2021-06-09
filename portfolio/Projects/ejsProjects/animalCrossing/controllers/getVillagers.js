const $fetch = require('node-fetch');


const getVillagers = (req, res)=>{
    let baseUrl = "http://acnhapi.com/v1a";
    let url =`${baseUrl}/villagers`;
    

    $fetch(url)
    .then(response => response.json()) // always parse with fetch with this response.json()
    .then(data => {
        let villagers = data.slice(0, 15) // getting the first 15 villagers. This part you get the data
        res.render('index', {villagers}) // show the data
    })
    .catch(err => console.log(err =>{
    res.render('error')})
    )
}

module.exports = getVillagers;