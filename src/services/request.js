class APIRequest {
	constructor() {
		this.apiKey =  "45c4b9b7ef7e561a24ebdbf9f36f4e44"; //bf9e0d64e01426353f9edd3d027204a8
	}
	getDailyWeather(location, type) {
		
		const name = location.trim().replace(/ /g, '+');

		return fetch(`https://api.openweathermap.org/data/2.5/${type}?q=${name}&appid=${this.apiKey}`)
		  .then(function(response) {
		    return response.json();
		  })
		  .then(function(myJson) {
		    return myJson;
		  });
	}

	reverseLookup(lat, lon) {

		return fetch(`https://us1.locationiq.com/v1/reverse.php?key=bb928de54beccd&lat=${lat}&lon=${lon}&format=json`).then(function(response){
			return response.json();
		}).then(function(myJson){
			return myJson;
		})
	}

	request(location) {
		console.log(location)
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
