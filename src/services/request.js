class APIRequest {
	constructor() {
		this.apiKey =  "45c4b9b7ef7e561a24ebdbf9f36f4e44"; //bf9e0d64e01426353f9edd3d027204a8
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

	requestCities(locations) {

		let promise = locations.map(location=>{
			return new Promise((resolve, reject)=>{
				resolve(this.getDailyWeather(location, 'weather'));
			})
		})

		return Promise.all(promise);
	}
}

export default APIRequest;
