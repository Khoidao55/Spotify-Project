const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Listening on 3000');
});