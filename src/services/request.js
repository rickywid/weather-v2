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

	reverseLookup() {
		return fetch("https://api.opencagedata.com/geocode/v1/json?q=43.6772864+-79.2788992&key=1cf4f4a9be7544b78ad327e028757a33").then(function(response){
			return response.json();
		}).then(function(myJson){
			return myJson;
		})
	}

	request(location) {
		return Promise.all([this.getDailyWeather(location, 'weather'), this.getDailyWeather(location, 'forecast')]);
	}
}

export default APIRequest;
