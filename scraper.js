const fetch = require("node-fetch");
const cheerio = require("cheerio");

const searchUrl = "https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q=";
const movieUrl = "https://www.imdb.com/title/";

function searchMovies(searchTerm) {
  return fetch(`${searchUrl}${searchTerm}`)
    .then((response) => response.text())
    .then((body) => {
      const movies = [];
      const $ = cheerio.load(body);
      $(".findResult").each(function (i, element) {
        const $element = $(element);
        const $image = $element.find("td a img");
        const $title = $element.find("td.result_text a");

        const imdbID = $title.attr("href").match(/title\/(.*)\//)[1];

        const movie = {
          image: $image.attr("src"),
          title: $title.text(),
          imdbID,
        };
        movies.push(movie);
      });
      return movies[0];
    });
}

function getMovie(imdbID) {
  return fetch(`${movieUrl}${imdbID}`)
    .then((response) => response.text())
    .then((body) => {
      const $ = cheerio.load(body);
      var title = "";
      var release = "";
      $(".title_wrapper").filter(function () {
        var data = $(this);
        title = data.children().first().text().trim();
        release = data.children().last().children().last().text().trim();
      });

      const rating = $('meta[itemProp="contentRating"]').attr("content");

      const datePublished = $('meta[itemProp="datePublished"]').attr("content");
      const imdbRating = $('span[itemProp="ratingValue"]').text();
      const poster = $("div.poster a img").attr("src");
      const summary = $("div.summary_text").text().trim();

      return {
        imdbID,
        title,
        rating,
        datePublished,
        imdbRating,
        poster,
        summary,
      };
    });
}

module.exports = {
  searchMovies,
  getMovie,
};
