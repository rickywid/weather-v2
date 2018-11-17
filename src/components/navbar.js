import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import APIRequest from '../services/request';

export default class NavBar extends React.Component {
	
	constructor(props){
		super(props);

		this.state = { search: ''};
	}
	componentDidMount(){
		console.log(this.props)
	}

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        new APIRequest().request(this.state.search).then(res=>{
        	console.log(this)
            this.props.updateLocation(res);
        });
    }
	render() {
		return (
			<nav>
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
			</nav>
		)
	}
}
