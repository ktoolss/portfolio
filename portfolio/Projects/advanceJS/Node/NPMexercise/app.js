const { getAll } = require("popular-movie-quotes");
const movieQuote = require("popular-movie-quotes");

console.log(movieQuote.getRandomQuote());

console.log(movieQuote.getQuoteByYear(2013, 2016));

console.log(movieQuote.getQuotesByMovie("Joker"));