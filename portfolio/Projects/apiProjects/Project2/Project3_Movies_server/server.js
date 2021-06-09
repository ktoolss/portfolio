const express = require("express");
const app = express();

const $fetch = require("node-fetch");

app.use(express.static("public"));

const keys = require("./config/keys");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const baseUrl = `https://api.themoviedb.org/3`;

app.get("/search", (req, res) => {
  let endpoint = `${baseUrl}/movie/now_playing?api_key=${keys.tmdb_key}`;
  $fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        // TODO: toggle the bang to simulate a fetch error
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => res.render("results.ejs", { data: data.results }))
    .catch((error) => console.error("Error from network: ", error));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
