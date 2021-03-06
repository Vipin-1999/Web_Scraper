const express = require("express");
const app = express();

const scraper = require("./scraper");

app.get("/", (req, res) => {
  res.json({
    message: "Scraping is Fun!",
  });
});

app.get("/search/:title", (req, res) => {
  scraper.searchMovies(req.params.title).then((movies) => {
    res.json(movies);
  });
});

app.get("/movie/:imdbID", (req, res) => {
  scraper.getMovie(req.params.imdbID).then((movie) => {
    res.json(movie);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
