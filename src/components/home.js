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
	renderWeatherIcons(data, type) {

		return data.map(weather => {
			if(weather.toLowerCase().indexOf('clouds') > -1) {
				return 	<i className="wi wi-day-cloudy" />;
			}
			else if(weather.toLowerCase().indexOf('clear') > -1){
				return <i className="wi wi-day-sunny" />
			}
			else if(weather.toLowerCase().indexOf('thunderstorm') > -1) {
				return 	<i className="wi wi-day-thunderstorm" />;
			}
			else if(weather.toLowerCase().indexOf('drizzle') > -1){
				return <i className="wi wi-day-sprinkle" />
			}
			else if(weather.toLowerCase().indexOf('rain') > -1 || weather.toLowerCase().indexOf('mist') > -1){
				return <i className="wi wi-day-rain" />
			}			
			else if(weather.toLowerCase().indexOf('snow') > -1){
				return <i className="wi wi-snow" />
			}			
			else if(weather.toLowerCase().indexOf('smoke') > -1) {
				return <i className="wi wi-smoke" />				
			} 
			else if(weather.toLowerCase().indexOf('haze') > -1) {
				return <i className="wi wi-day-haze" />				
			} 
			else if(weather.toLowerCase().indexOf('dust whirls') > -1 || weather.toLowerCase().indexOf('sand') > -1) {
				return <i className="wi wi-sandstorm" />				
			} 
			else if(weather.toLowerCase().indexOf('fog') > -1) {
				return <i className="wi wi-day-fog" />				
			} 
			else if(weather.toLowerCase().indexOf('volcanic ash') > -1) {
				return <i className="wi wi-volcano" />						
			} 
			else if(weather.toLowerCase().indexOf('squalls') > -1) {
				return <i className="wi wi-sleet" />				
			}
			else if(weather.toLowerCase().indexOf('tornado') > -1) {
				return <i className="wi wi-tornado" />				
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

	    const fiveDayForecastDesc = [this.props.location.week[3].weather[0].main,
	    						this.props.location.week[11].weather[0].main,
								this.props.location.week[19].weather[0].main,
								this.props.location.week[27].weather[0].main,
								this.props.location.week[35].weather[0].main]

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

							{this.renderWeatherIcons([this.props.location.weather.main])}

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

