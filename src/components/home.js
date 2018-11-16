import React from 'react';
import { Route } from 'react-router-dom';
import APIRequest from '../services/request';
import Weather from './weather';
import UserWeather from './user-weather';

export default class Home extends React.Component {
	constructor(props) {
		super(props); 
		this.saveCity = this.saveCity.bind(this);

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
			},
			savedCities: [],
			user: {
				city: '',
				country: ''
			}
		}
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(function(position) {
		  	new APIRequest().reverseLookup().then(res => {

		  		let copyState = this.state.user;
				copyState = {
		  			city: res.results[0].components.city,
		  			country: res.results[0].components.country 					
				}

		  		this.setState({ user: copyState }, ()=> {
					new APIRequest().request(`${this.state.user.city}, ${this.state.user.country}`).then(res=>{
						this.updateLocation(res);
					});		  			
		  		});
		  	});
		}.bind(this));	
	}

	handleChange = (e) => {
		this.setState({ search: e.target.value });
	}

	updateLocation(res, action) {
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
		}, ()=> {
			if(action === 'SUBMIT') {
				this.props.history.push(`/weather`);
			}
			console.log(this.state.location)
		});
	}

	saveCity(city, action) {
		let savedCitiesCopy = this.state.savedCities;
		if(action === 'ADD') {
			let cityFound = this.state.savedCities.find(item=>item===city)
			if(!cityFound){
				savedCitiesCopy.push(city);
			}
		} else {
			savedCitiesCopy = savedCitiesCopy.filter(item => item !== city);
		}
		this.setState({ savedCities: savedCitiesCopy }, ()=> {
			localStorage.setItem("savedCities", JSON.stringify(this.state.savedCities));
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		new APIRequest().request(this.state.search).then(res=>{
			this.updateLocation(res, 'SUBMIT');
		});
	}

	render() {
		const userWeather = this.state.location.city !== '' ? <UserWeather {...this.state.location} /> : '';

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						City
						<input type="text" name="location" value={this.state.search} onChange={this.handleChange} placeholder="toronto, canada" />
					</label>
					<input type="submit" value="Submit"/>
				</form>
				{this.state.user.city} {this.state.user.country}
				{userWeather}
				<Route exact={true} path="/weather" render={(props)=> <Weather {...props} {...this.state.location} saveCityState={this.state.savedCities} saveCity={this.saveCity} /> }/>
			</div>
		)
	}
}
