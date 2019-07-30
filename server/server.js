const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    return axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        process.env.WEATHER_API_KEY
      }&units=imperial`
    })
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(() => {
        res.status(404).send('error');
      });
  });

module.exports = app;
