const { response } = require('express');
const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const $fetch = require('node-fetch');

app.use(express.static('public'));

const keys = require('./config/keys');

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs");
  });
  
  const baseUrl = `https://api.themoviedb.org/3`;
  
  app.get("/search", (req, res) => {
    let endpoint = `${baseUrl}/movie/now_playing?api_key=${keys.tmdb_key}`;
    // * when form button is clicked on index, this then fetches movie list from API
    $fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          // TODO: toggle the bang to simulate a fetch error
          throw Error(response.statusText);
        }
        // * if response is ok then we parse the JSON from the API
        return response.json();
      })
      // * then render the "results" of the data variable to the results.ejs as an array
      .then((data) => res.render("results.ejs", { data: data.results }))
      .catch((error) => console.error("Error from network: ", error));
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on port ${port}`));
  