# Web Scraper

A Node.js-based web scraping application that extracts movie information from IMDb. It utilizes Express for server routing, `node-fetch` for making HTTP requests, and Cheerio for parsing HTML to retrieve relevant data. The application exposes endpoints to search for movies by title and fetch detailed movie information by IMDb ID, providing a fun and efficient way to get movie data programmatically.

## Features
- **Movie Search:** Search for movies by title using the `/search/:title` endpoint.
- **Movie Details:** Retrieve detailed information about a movie using its IMDb ID through the `/movie/:imdbID` endpoint.
- **Simple API:** JSON responses are provided for easy integration.
- **Robust Scraping:** Uses Cheerio to extract necessary information from IMDb pages.

## Tech Stack
- **Backend:** Node.js, Express
- **Web Scraping:** Cheerio, node-fetch
- **Development Tools:** nodemon (for live reloading during development)

## Installation & Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Vipin-1999/Web_Scraper.git
   cd Web_Scraper
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   For additional details on installation and troubleshooting, refer to:
   - [Express Installation & Troubleshooting](https://expressjs.com/en/starter/installing.html)
   - [Cheerio Installation & Troubleshooting](https://www.npmjs.com/package/cheerio)
   - [node-fetch Installation & Troubleshooting](https://www.npmjs.com/package/node-fetch)

3. **Start the Server:**
   ```bash
   npm start
   ```
   The server will run on port `3000` by default or on the port specified in your environment variable `PORT`.

## Usage
- **Home Page:**  
  Visit `http://localhost:3000/` to see a welcome message in JSON format.
- **Search Movies Endpoint:**  
  Use the endpoint `http://localhost:3000/search/<movie_title>` to search for a movie by title.
- **Movie Details Endpoint:**  
  Access detailed movie information via `http://localhost:3000/movie/<imdbID>`.

## Contributing
Contributions are welcome! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
