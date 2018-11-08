module.exports = {
	renderWeather: function (req, res, err, response, body, city) {
		if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    	console.log(err);
    } else {
      let weather = JSON.parse(body);
      console.log(body);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
        console.log("weather is undefined");
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }	
	}
};
