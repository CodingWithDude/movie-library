const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

express();

const app = express();

app.use(cors());

const title = "spiderman";
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${title}`;

app.get("/", (req, res) => {
  res.json("Backend Running");
});

app.get("/movies", (req, res) => {
  const results = {
    method: "GET",
    url: API_URL,
  };

  axios.request(results).then((response) => {
    res.json(response.data.Search);
  });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
