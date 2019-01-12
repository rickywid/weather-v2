import React from 'react';
import moment from 'moment';

export default class Weather extends React.Component {
	
	updateCity(action){
		this.props.saveCity(this.props.city.toLowerCase(), action);
	}

	render() {
		return (
			<div>
				<p>{this.props.city}</p>
				<p>{this.props.coord.lon}, {this.props.coord.lat}</p>
				<p>{moment(this.props.date*1000).format("LLLL")}</p>
				<p>{Math.ceil(this.props.main.temp - 273.15)}</p>
				<p>{this.props.main.tempMax - 273.15}</p>
				<p>{this.props.main.tempMin - 273.15}</p>
				<p>{this.props.weather.main}</p>
				<p>{this.props.weather.desc}</p>
				{this.isSavedCityBtn()}
			</div>
		)
	}
}
