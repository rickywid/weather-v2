import React from 'react';
import QuickCity from './/quick-city';
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import {Line} from 'react-chartjs-2';
import moment from 'moment';

export default class Home extends React.Component {

    displayMyCities() {
        return this.props.myCities.map(city => {
            return <QuickCity name={city.name} temp={city.main.temp} weatherType={city.weather[0].main} weatherDesc={city.weather[0].description}/>
        })
    }
    handleClick(ACTION) {
    	this.props.saveCity(this.props.location.city, ACTION);
    }
	displaySaveBtnCity() {
		let storage=JSON.parse(localStorage.getItem("savedCities"));
		let match = storage.find(city=>city===this.props.location.city);

		if(match){
			return <Button variant="contained" color="primary" onClick={this.handleClick.bind(this, 'REMOVE')} className="btn-save">Remove location</Button>
		}
			return <Button variant="contained" color="primary" onClick={this.handleClick.bind(this,'ADD')} className="btn-save">Save location</Button>

	}
	renderWeatherIcons(data) {

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
	render() {
	    const settings = {
	      dots: false,
	      infinite: false,
	      speed: 500,
	      slidesToShow: 5,
	      slidesToScroll: 1
	    };

	    const fiveDayForecastDesc = [
								{
									weatherDesc: this.props.location.week[3].weather[0].main,
									date: moment(this.props.location.week[3].dt_txt).format("ll")
								},
								{
									weatherDesc: this.props.location.week[11].weather[0].main,
									date: moment(this.props.location.week[11].dt_txt).format("ll")
								},
								{
									weatherDesc: this.props.location.week[19].weather[0].main,
									date: moment(this.props.location.week[19].dt_txt).format("ll")
								},
								{
									weatherDesc: this.props.location.week[27].weather[0].main,
									date: moment(this.props.location.week[27].dt_txt).format("ll")
								},
								{
									weatherDesc: this.props.location.week[35].weather[0].main,
									date: moment(this.props.location.week[35].dt_txt).format("ll")
								}
							];

	    const fiveDayForecast = [Math.ceil(this.props.location.week[3].main.temp - 273.15), 
							Math.ceil(this.props.location.week[11].main.temp - 273.15), 
							Math.ceil(this.props.location.week[19].main.temp - 273.15), 
							Math.ceil(this.props.location.week[27].main.temp - 273.15), 
							Math.ceil(this.props.location.week[35].main.temp - 273.15)]

		var chartData = {
			labels: [	moment(this.props.location.week[3].dt_txt).format("ll"), 
						moment(this.props.location.week[11].dt_txt).format("ll"), 
						moment(this.props.location.week[19].dt_txt).format("ll"), 
						moment(this.props.location.week[27].dt_txt).format("ll"), 
						moment(this.props.location.week[35].dt_txt).format("ll")
					],

			datasets: [
				{
					label: "5 DAY FOREACAST",
					backgroundColor: '#0074ff0f',
					borderColor: "#85919f",
					borderWidth: 1,
					pointBackgroundColor: "#85919f",
					data: fiveDayForecast
				}
			]
		};

		return (
			<div className="body">
				
				<h3>Quick Weather</h3>
				<Slider {...settings}>
					{this.displayMyCities()}
				</Slider>





				<div className="user-temp">
					{this.displaySaveBtnCity()}
					<div className="user-temp__body">
						<h3>{this.props.location.city}, {this.props.location.country}</h3>

						<div className="user-temp__inner">

							{this.renderWeatherIcons([{weatherDesc: this.props.location.weather.main, date: ''}])}

							<p className="user-temp__main">{Math.ceil(this.props.location.main.temp - 273.15)}<sup>&#176;c</sup></p>
							<div className="user-temp__detail">
								<p>{Math.ceil(this.props.location.main.temp - 273.15)}C</p>
								<p>{Math.ceil(this.props.location.main.temp_min - 273.15)}C</p>
								<p>{Math.ceil(this.props.location.main.temp_max - 273.15)}C</p>
								<p>{this.props.location.weather.main}</p>
								<p>{this.props.location.weather.desc}</p>
							</div>
						</div>
                    </div>





                    <div className="user-temp__side">
						<h3>5 day</h3>
						<div className="user-temp__fiveday">
							{this.renderWeatherIcons(fiveDayForecastDesc)}
						</div>
						<h3>temp</h3>
						<Line data={chartData} />
                    </div>
				</div>
			</div>
		)
	}
}

