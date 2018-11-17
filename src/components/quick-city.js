import React from 'react';

export default class QuickCity extends React.Component {
	constructor(){
		super();

		console.log('called')
	}
	render() {
		return (
				<div className="quick-city-body">
					<p>{this.props.name}</p>
					<p>{this.props.temp}</p>
					<p>{this.props.weatherType}</p>
					<p>{this.props.weatherDesc}</p>
			</div>
		)
	}
}
