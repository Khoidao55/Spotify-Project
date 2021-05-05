const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config.js');
const PORT = 3000;

const app = express();
const url = 'https://api.spotify.com/v1';
const token = {
  'User-Agent': 'request',
  Authorization: config.SPOTIFY_API_KEY,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/categories', (req, res) => {
  axios.get(`${url}/browse/categories`, {
    headers:token,
  })
  .then((data) => res.status(200).send(data.data))
  .catch((err) => res.status(400).send(err));
})

app.listen(PORT, () => {
  console.log('Listening on 3000');
});