// generates an express instance
const express = require("express");
const app = express();

// requires yelp-fusion
const keys = require('./config/keys')
const yelp = require('yelp-fusion');
const yelp_api_key = keys.yelp_key;
const client = yelp.client(yelp_api_key);

// directs searches to public folder to use stars
app.use(express.static("public"));

// route handlers go here
app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get("/locationSearch", function(req, res) {
  console.log("this is : " + req.query.locale);
  client
    .search({
      location: req.query.locale,
      sort_by: "distance",
      limit: 10
    })
    .then(response => {
      let results = response.jsonBody.businesses;
      res.render("searchResults.ejs", {
        results: results,
        location: req.query.locale
      });
    })
    .catch(error => {
      res.render('error.ejs', {error})
    });
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
