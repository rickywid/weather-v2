import React from 'react';
import QuickCity from './/quick-city';
import Slider from "react-slick";
import Button from '@material-ui/core/Button';


export default class Home extends React.Component {

    displayMyCities() {
    	console.log('displayMyCities')
        return this.props.myCities.map(city => {
            return <QuickCity name={city.name} temp={city.main.temp} weatherType={city.weather[0].main} weatherDesc={city.weather[0].description}/>
        })
    }
    handleClick(ACTION) {
    	this.props.saveCity(this.props.location.city, ACTION);
    }
	displaySaveBtnCity() {
		let storage=JSON.parse(localStorage.getItem("savedCities"));
		let match = storage.find(city=>city===this.props.location.city);

		if(match){
			return <Button variant="contained" color="primary" onClick={this.handleClick.bind(this, 'REMOVE')} className="btn-submit">Remove</Button>
		}
			return <Button variant="contained" color="primary" onClick={this.handleClick.bind(this,'ADD')} className="btn-submit">Save</Button>

	}
	render() {
	    var settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 5,
	      slidesToScroll: 1
	    };

		return (
			<div className="body">
				
				<h1>Quick Weather</h1>
				<Slider {...settings}>
					{this.displayMyCities()}
				</Slider>

				<div className="user-temp">
					<h2>{this.props.location.city}, {this.props.location.country}</h2>
					<p>temp {this.props.location.main.temp}</p>
					<p>min {this.props.location.main.temp_min}</p>
					<p>max {this.props.location.main.temp_max}</p>
					<p>{this.props.location.weather.main}</p>
					<p>{this.props.location.weather.desc}</p>
					{this.displaySaveBtnCity()}
                                     
				</div>
			</div>
		)
	}
}
