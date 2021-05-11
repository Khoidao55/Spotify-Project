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

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyAPI = new SpotifyWebAPI({
    redirectURI: 'http://localhost:3000',
    clientID: Credentials.clientID,
    clientSecret: Credentials.clientSecret
  })

  spotifyAPI.authorizationCodeGrant(code).then(data => {
    res.status(200).json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refesh_token,
      exiresIn: data.body.expires_in
    })
    .catch(() => {
      res.sendStatus(400);
    })
  })
})

app.listen(PORT, () => {
  console.log('Listening on 3000');
});