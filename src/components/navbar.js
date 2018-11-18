import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import APIRequest from '../services/request';

export default class NavBar extends React.Component {
	
	constructor(props){
		super(props);

		this.state = { search: ''};
	}

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        new APIRequest().request(this.state.search).then(res=>{
            this.props.updateLocation(res);
        });

        this.setState({ search: '' });
    }
	render() {
		return (
			<nav>
				<h1>SOME BLAH BLAH HEADER GOES OVER HERE</h1>
				<h3>SUBHEADER GOES OVER HERE</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        id="standard-name"
                        label="Name"
                        value={this.state.search}
                        onChange={this.handleChange}
                        placeholder="toronto, canada"
                    />  
                    <Button type="submit" onSubmit={this.handleSubmit.bind(this)} variant="contained" color="primary" className="btn-submit">Search</Button>                 
                </form>  		
			</nav>
		)
	}
}
