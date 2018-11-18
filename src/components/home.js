import React from 'react';
import QuickCity from './/quick-city';
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import {convertTemp} from '../services/convertTemp';
import {renderWeatherIcons} from '../services/renderWeatherIcons';
import Const from '../const';


export default class Home extends React.Component {

    displayMyCities() {
        return this.props.myCities.map(city => {
            return <QuickCity 	name={city.name} 
            					country={city.sys.country} 
            					temp={city.main.temp}  
            					tempMin={city.main.temp_min}
            					tempMax={city.main.temp_max}
            					weatherType={city.weather[0].main} 
            					weatherDesc={city.weather[0].description}
            					checked={this.props.checked}
            					updateLocation={this.props.updateLocation}
            		/>
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

	render() {

		const { location } = this.props;

	    const fiveDayForecastDesc = [
			{
				weatherDesc: location.week[3].weather[0].main,
				date: moment(location.week[3].dt_txt).format("ll")
			},
			{
				weatherDesc: location.week[11].weather[0].main,
				date: moment(location.week[11].dt_txt).format("ll")
			},
			{
				weatherDesc: location.week[19].weather[0].main,
				date: moment(location.week[19].dt_txt).format("ll")
			},
			{
				weatherDesc: location.week[27].weather[0].main,
				date: moment(location.week[27].dt_txt).format("ll")
			},
			{
				weatherDesc: location.week[35].weather[0].main,
				date: moment(location.week[35].dt_txt).format("ll")
			}
		];

	    const fiveDayForecast = [
			convertTemp(location.week[3].main.temp, this.props.checked),
			convertTemp(location.week[11].main.temp, this.props.checked), 
			convertTemp(location.week[19].main.temp, this.props.checked), 
			convertTemp(location.week[27].main.temp, this.props.checked), 
			convertTemp(location.week[35].main.temp, this.props.checked)
		]

		const chartData = {
			labels: [	
				moment(this.props.location.week[3].dt_txt).format("ll"), 
				moment(this.props.location.week[11].dt_txt).format("ll"), 
				moment(this.props.location.week[19].dt_txt).format("ll"), 
				moment(this.props.location.week[27].dt_txt).format("ll"), 
				moment(this.props.location.week[35].dt_txt).format("ll")
			],

			datasets: [
				{
					label: Const.slider.label,
					backgroundColor: Const.slider.backgroundColor,
					borderColor: Const.slider.borderColor,
					borderWidth: Const.slider.borderWidth,
					pointBackgroundColor: Const.slider.pointBackgroundColor,
					data: fiveDayForecast
				}
			]
		};

		return (
			<div className="body">
				
				<h3>Quick Weather</h3>
				<Slider {...Const.slider.settings}>
					{this.displayMyCities()}
				</Slider>





				<div className="user-temp">
					{this.displaySaveBtnCity()}
					<div className="user-temp__body">
						<h3>{location.city}, {location.country}</h3>

						<div className="user-temp__inner">

							{renderWeatherIcons([{weatherDesc: location.weather.main, date: ''}])}

							<p className="user-temp__main">{convertTemp(location.main.temp, this.props.checked)}<sup>&#176;{this.props.checked ? 'F' : 'C'}</sup></p>
							<div className="user-temp__detail">
								<p className="user-temp__desc">{location.weather.main}</p>
								<p className="user-temp__desc2">{location.weather.desc}</p>		
								<div className="user-temp__desc3">
								{console.log(this.props.location.main)}
									<p className="user-temp__high">High <span>{convertTemp(this.props.location.main.tempMax,this.props.checked)}<sup>&#176;{this.props.checked ? 'F' : 'C'}</sup></span></p>
									<p className="user-temp__high">Low <span>{convertTemp(this.props.location.main.tempMin, this.props.checked)}<sup>&#176;{this.props.checked ? 'F' : 'C'}</sup></span></p>								
								</div>
							</div>
						</div>
                    </div>





                    <div className="user-temp__side">
						<h3>5 day</h3>
						<div className="user-temp__fiveday">
							{renderWeatherIcons(fiveDayForecastDesc)}
						</div>
						<h3>temp</h3>
						<Line data={chartData} />
                    </div>
				</div>
			</div>
		)
	}
}

