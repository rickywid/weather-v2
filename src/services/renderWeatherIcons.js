import React from 'react';

export const renderWeatherIcons = (data)=>{
		return data.map((weather, index) => {
			console.log(weather)
			const date = weather.date ? weather.date.split(",")[0] : '';
	
			if(weather.weatherDesc.toLowerCase().indexOf('clouds') > -1) {
				return 	(
					<div>
						<i className="wi wi-day-cloudy" />
						<p>{date}</p>
					</div>
				)
			}
			else if(weather.weatherDesc.toLowerCase().indexOf('clear') > -1){
				return (
					<div>
						<i className="wi wi-day-sunny" />
						<p>{date}</p>
					</div>					
				)
			}
			else if(weather.weatherDesc.toLowerCase().indexOf('thunderstorm') > -1) {
				return (
					<div>
						<i className="wi wi-day-thunderstorm" />
						<p>{date}</p>
					</div>					
				)
			}
			else if(weather.weatherDesc.toLowerCase().indexOf('drizzle') > -1){
				return (
					<div>
						<i className="wi wi-day-sprinkle" />
						<p>{date}</p>
					</div>					
				)
			}
			else if(weather.weatherDesc.toLowerCase().indexOf('rain') > -1 || weather.weatherDesc.toLowerCase().indexOf('mist') > -1){
				return (
					<div>
						<i className="wi wi-day-rain" />
						<p>{date}</p>
					</div>					
				)
			}			
			else if(weather.weatherDesc.toLowerCase().indexOf('snow') > -1){
				return (
					<div>
						<i className="wi wi-snow" />
						<p>{date}</p>
					</div>					
				)
			}			
			else if(weather.weatherDesc.toLowerCase().indexOf('smoke') > -1) {
				return (
					<div>
						<i className="wi wi-smoke" />
						<p>{date}</p>
					</div>					
				)		
			} 
			else if(weather.weatherDesc.toLowerCase().indexOf('haze') > -1) {
				return (
					<div>
						<i className="wi wi-day-haze" />
						<p>{date}</p>
					</div>					
				)			
			} 
			else if(weather.weatherDesc.toLowerCase().indexOf('dust whirls') > -1 || weather.weatherDesc.toLowerCase().indexOf('sand') > -1) {
				return (
					<div>
						<i className="wi wi-sandstorm" />
						<p>{date}</p>
					</div>					
				)			
			} 
			else if(weather.weatherDesc.toLowerCase().indexOf('fog') > -1) {
				return (
					<div>
						<i className="wi wi-day-fog" />
						<p>{date}</p>
					</div>					
				)				
			} 
			else if(weather.weatherDesc.toLowerCase().indexOf('volcanic ash') > -1) {
				return (
					<div>
						<i className="wi wi-volcano" />
						<p>{date}</p>
					</div>					
				)					
			} 
			else if(weather.weatherDesc.toLowerCase().indexOf('squalls') > -1) {
				return (
					<div>
						<i className="wi wi-sleet" />
						<p>{date}</p>
					</div>					
				)			
			}
			else if(weather.weatherDesc.toLowerCase().indexOf('tornado') > -1) {
				return (
					<div>
						<i className="wi wi-tornado" />
						<p>{date}</p>
					</div>					
				)			
			}									
		})
}

export default renderWeatherIcons;