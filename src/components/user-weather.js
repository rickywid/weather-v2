import React from 'react';
import moment from 'moment';

export default class UserWeather extends React.Component {
	
	constructor(props){
		super(props);
	}
	componentDidMount(){
		console.log(this.props)
	}

	render() {
		return (
			<div className="user-city">
				<p>{this.props.city} {this.props.country}</p>
				<p>{moment(this.props.date*1000).format("LLLL")}</p>
				<p>{this.props.coord.lon}, {this.props.coord.lat}</p>
				<p>Main {Math.ceil(this.props.main.temp - 273.15)}</p>
				<p>Max {this.props.main.tempMax - 273.15}</p>
				<p>Min {this.props.main.tempMin - 273.15}</p>
				<p>{this.props.weather.main}</p>
				<p>{this.props.weather.desc}</p>			
			</div>
		)
	}
}
