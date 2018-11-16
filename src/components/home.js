import React from 'react';
import { Route } from 'react-router-dom';
import APIRequest from '../services/request';
import Weather from './weather';

export default class Home extends React.Component {
	constructor(props) {
		super(props); 

		this.state = {
			search: '',
			location: {
				city: '',
				country: '',
				date: null,
				cityId: null,								
				coord: {},
				main: {
					temp: null,
					tempMax: null,
					tempMin: null
				},
				weather: {
					mainDesc: '',
					desc: ''
				},
				week: []
			}
		}
	}

	handleChange = (e) => {
		this.setState({ search: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		new APIRequest().request(this.state.search).then(res=>{
			let data = res[0];

			this.setState({ 
				search: '',
				location: {
					city: data.name,
					country: data.sys.country,					
					date: data.dt,
					cityId: data.id,
					coord: data.coord,
					main: {
						temp: data.main.temp,
						tempMax: data.main.temp_max,
						tempMin: data.main.temp_min
					},
					weather: {
						main: data.weather[0].main,
						desc: data.weather[0].description
					},
					week: res[1].list
				}
			}, ()=> this.props.history.push(`/weather`));
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						City
						<input type="text" name="location" value={this.state.search} onChange={this.handleChange} placeholder="toronto, canada" />
					</label>
					<input type="submit" value="Submit"/>
				</form>
				<Route exact={true} path="/weather" render={(props)=> <Weather {...props} /> }/>
			</div>
		)
	}
}
