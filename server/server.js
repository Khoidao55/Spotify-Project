const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const SpotifyWebAPI = require('spotify-web-api-node');
const Credentials = require('../Credentials.js');
const PORT = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebAPI({
    redirectUri: 'http://localhost:3000',
    clientId: Credentials.ClientID,
    clientSecret: Credentials.ClientSecret,
    refreshToken
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      console.log(data.body);
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebAPI({
    redirectUri: 'http://localhost:3000',
    clientId: Credentials.ClientID,
    clientSecret: Credentials.ClientSecret
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400)
    })
})

app.listen(PORT, () => {
  console.log('Listening on 3000');
});