import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import APIRequest from './services/request';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Home from './components/home';
import Weather from './components/weather';
import NoMatch from './components/404';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props); 
    this.saveCity = this.saveCity.bind(this);

    this.state = {
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
        },
            myCities: []
        }
    }

    componentDidMount() {
        this.setState({
            savedCities: JSON.parse(localStorage.getItem("savedCities"))
        })


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

        this.quickWeather();
        
    }
 

    quickWeather() {
        
        new APIRequest().requestCities(JSON.parse(localStorage.getItem("savedCities"))).then(res=>{
            this.setState({ myCities: res });
        });
    }

    saveCity (city, action){
        
        let savedCitiesCopy = this.state.savedCities;
        
        if(action === 'ADD') {
            let cityFound = this.state.savedCities.find(item=>item===city)
            if(!cityFound){
                savedCitiesCopy.unshift(city);
            }
        } else {         
            savedCitiesCopy = savedCitiesCopy.filter(item => item !== city);
        }

        this.setState({ savedCities: savedCitiesCopy }, ()=> {
            localStorage.setItem("savedCities", JSON.stringify(this.state.savedCities));
            this.quickWeather();
        });
    }

    updateLocation(res) {
        let data = res[0];
        console.log(data)
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
        });
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        new APIRequest().request(this.state.search).then(res=>{
            this.updateLocation(res);
        });
    }
    render() {

        const homeProps = {
            location: this.state.location,
            myCities: this.state.myCities,
            saveCity: this.saveCity
        }


        if(this.state.location.city === ''){
            return <div>...</div>
        }

        return (
            <div className="App">
                <nav>navbar</nav>
                <div className="App-inner">
                    <form>
                        <TextField
                            id="standard-name"
                            label="Name"
                            value={this.state.search}
                            onChange={this.handleChange}
                            placeholder="toronto, canada"
                        />  
                        <Button variant="contained" color="primary" onClick={this.handleSubmit.bind(this)} className="btn-submit">Search</Button>                 
                    </form>                 
                    <BrowserRouter>
                        <Switch>
                            <Route exact={true} path="/" render={(props) => <Home 
                                                                    {...props} 
                                                                    {...homeProps}
                                                                />}
                            />
                            <Route path="/weather" render={(props) => <Weather 
                                                                    {...props} {...this.state.location}
                                                                />}
                            />                                   
                            <Route component={NoMatch} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );

    }
}

export default App;
