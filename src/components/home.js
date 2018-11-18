import React from 'react';
import QuickCity from './/quick-city';
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import {Line} from 'react-chartjs-2';
import moment from 'moment';

export default class Home extends React.Component {


	componentDidMount() {
		console.log(this.props.location.week)
	}

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
	    const settings = {
	      dots: false,
	      infinite: false,
	      speed: 500,
	      slidesToShow: 5,
	      slidesToScroll: 1
	    };

		var chartData = {
			labels: [	moment(this.props.location.week[3].dt_txt).format("ll"), 
						moment(this.props.location.week[11].dt_txt).format("ll"), 
						moment(this.props.location.week[19].dt_txt).format("ll"), 
						moment(this.props.location.week[27].dt_txt).format("ll"), 
						moment(this.props.location.week[35].dt_txt).format("ll")
					],

			datasets: [
				{
					label: "5 DAY FOREACAST",
					data: [	Math.ceil(this.props.location.week[3].main.temp - 273.15), 
							Math.ceil(this.props.location.week[11].main.temp - 273.15), 
							Math.ceil(this.props.location.week[19].main.temp - 273.15), 
							Math.ceil(this.props.location.week[27].main.temp - 273.15), 
							Math.ceil(this.props.location.week[35].main.temp - 273.15)
					]
				}
			]
		};

		return (
			<div className="body">
				
				<h3>Quick Weather</h3>
				<Slider {...settings}>
					{this.displayMyCities()}
				</Slider>

				<div className="user-temp">
					<div className="user-temp__body">
						<h3>{this.props.location.city}, {this.props.location.country}</h3>
						<p className="user-temp__main">{Math.ceil(this.props.location.main.temp - 273.15)}<sup>&#176;c</sup></p>
						<p>{Math.ceil(this.props.location.main.temp - 273.15)}C</p>
						<p>{Math.ceil(this.props.location.main.temp_min - 273.15)}C</p>
						<p>{Math.ceil(this.props.location.main.temp_max - 273.15)}C</p>
						<p>{this.props.location.weather.main}</p>
						<p>{this.props.location.weather.desc}</p>
						{this.displaySaveBtnCity()}
                    </div>





                    <div className="user-temp__side">
						<h3>5 day</h3>

						<h3>temp</h3>
						<Line data={chartData} />
                    </div>
				</div>
			</div>
		)
	}
}

