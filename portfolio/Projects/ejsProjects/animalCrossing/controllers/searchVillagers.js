const $fetch = require('node-fetch');


const searchVillagers = (req, res)=>{
    let baseUrl = "http://acnhapi.com/v1a";
    let {searchTerm} = req.query;
    console.log(req.query); // returned the name and id from input tag in index.ejs
    console.log(searchTerm);
    
    let url = `${baseUrl}/villagers`;

    $fetch(url)
    .then(response => response.json()) // always parse with fetch with this response.json()
    .then(data => {
        let villager = data.filter(villager => villager.name["name-USen"].toLowerCase() === searchTerm.toLocaleLowerCase());
        console.log(villager);
        res.redirect(`/${villager[0].id}`);
    })
    .catch(err => {
    console.log(err)
    res.render('error')
})
}

module.exports = searchVillagers;