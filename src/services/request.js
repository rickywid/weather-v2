class APIRequest {
	constructor() {
		this.apiKey =  "0f569a7fd71ea271c3f45ce4d8095a2f";
	}
	getDailyWeather(location, type) {
		return fetch(`https://api.openweathermap.org/data/2.5/${type}?q=${location}&appid=${this.apiKey}`)
		  .then(function(response) {
		    return response.json();
		  })
		  .then(function(myJson) {
		    return myJson;
		  });
	}

	request(location) {
		return Promise.all([this.getDailyWeather(location, 'weather'), this.getDailyWeather(location, 'forecast')]);
	}
}

export default APIRequest;
