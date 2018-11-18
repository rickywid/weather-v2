import React from 'react';
import APIRequest from '../services/request';
import {convertTemp} from '../services/convertTemp';

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

		const { location } = this.props;
		
		return (
				<div className="quick-city-body" onClick={this.handleClick}>
					<p className="quick-city__name">{this.props.name}, {this.props.country}</p>
					<div className="x">
						<p className="quick-city__temp">{convertTemp(this.props.temp, this.props.checked)}<sup>&#176;{this.props.checked ? 'F' : 'C'}</sup></p>
						<p className="quick-city__weather-desc">{this.props.weatherDesc}</p>						
					</div>
			</div>
		)
	}
}
