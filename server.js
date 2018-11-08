const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
const weatherListener = require('./weatherListener');

const apiKey = 'd6396c7ad7037c16d4f01c521851a118';

const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  request(url, function (err, response, body) {
  	weatherListener.renderWeather(req, res, err, response, body, city);
  });
})

// if(PORT == null || PORT == "") {
// 	PORT = 3000;
// }
app.listen(PORT, function() {
    console.log(`Our app is running on port ${ PORT }`);
});