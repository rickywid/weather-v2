import React from 'react';

export default class QuickCity extends React.Component {

	render() {
		return (
				<div className="quick-city-body">
					<p className="quick-city__name">{this.props.name}</p>
					<p className="quick-city__temp">{Math.ceil(this.props.temp - 273.15)}C</p>
					<p className="quick-city__weather-type">{this.props.weatherType}</p>
					<p className="quick-city__weather-desc">{this.props.weatherDesc}</p>
			</div>
		)
	}
}
