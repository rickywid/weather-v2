import React, { Component } from 'react';
import { BrowserRouter, Switch as RouterSwitch, Route } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import APIRequest from './services/request';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from './components/navbar';
import Home from './components/home';
import Weather from './components/weather';
import NoMatch from './components/404';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props); 
    this.saveCity = this.saveCity.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

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
        myCities: [],
        checked: false,
        notFound: false
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

        if(res[1].cod === "404"){
            console.log(true)
            this.setState({ notFound: true });

            return;
        } else {
            this.setState({ notFound: false });            
        }


        let data = res[0];

        this.setState({ 
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
            },
        });
    }

    handleToggle() {
        this.setState({ 
            checked: !this.state.checked 
        });
    }

    render() {

        const navbarProps = {
            updateLocation: this.updateLocation
        }

        const homeProps = {
            location: this.state.location,
            myCities: this.state.myCities,
            checked: this.state.checked,
            saveCity: this.saveCity,
            updateLocation: this.updateLocation
        }


        if(this.state.location.city === ''){
            return <div>...</div>
        }

        return (
            <div className="App">
                <NavBar {...navbarProps} />
                <div className="App-inner">

                {this.state.notFound ? <p className="no-results">No results found</p>: 
                <div>
                    <FormGroup row className="toggle">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.checked}
                              onChange={this.handleToggle}
                              value="checkedB"
                              color="primary"
                            />
                          }
                          label="C&#176; / F&#176;"
                        />
                    </FormGroup>                            
                        <BrowserRouter>
                            <RouterSwitch>
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
                            </RouterSwitch>
                        </BrowserRouter>
                    </div>
                }   
                </div>
            </div>
        );

    }
}

export default App;
