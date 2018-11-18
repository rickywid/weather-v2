import React from 'react';
import APIRequest from '../services/request';

export default class QuickCity extends React.Component {
	constructor(props){
		super(props)
		
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		new APIRequest().request(this.props.name).then(data=>{
			
			this.props.updateLocation(data);
		})
	}

	render() {
		return (
				<div className="quick-city-body" onClick={this.handleClick}>
					<p className="quick-city__name">{this.props.name}, {this.props.country}</p>
					<div className="x">
						<p className="quick-city__temp">{Math.ceil(this.props.temp - 273.15)}C</p>
						<p className="quick-city__weather-desc">{this.props.weatherDesc}</p>						
					</div>
			</div>
		)
	}
}
