import React from 'react';

export default class Weather extends React.Component {
	
	constructor(props){
		super(props);
	}
	componentDidMount(){
		console.log(this.props)
	}
	render() {
		return (
			<div>weather</div>
		)
	}
}
