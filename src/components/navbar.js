import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import APIRequest from '../services/request';
import QuoteGen from '../services/quoteGen';

export default class NavBar extends React.Component {
	
	constructor(props){
		super(props);

		this.state = { 
            search: '',
            quote: {}
        };
	}

    componentDidMount() {
        new QuoteGen().then(quote => this.setState({ quote: quote[0] }))
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
				<div className="nav-header" dangerouslySetInnerHTML={{__html: `${this.state.quote.content} <p class="quote-auth">- <i>${this.state.quote.title}</i></p>`}}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        id="input"
                        label="Name"
                        value={this.state.search}
                        onChange={this.handleChange}
                        placeholder="toronto, canada"
                        required
                    />  
                    <Button type="submit" onSubmit={this.handleSubmit.bind(this)} variant="contained" color="primary" className="btn-submit">Search</Button>                 
                </form>  		
			</nav>
		)
	}
}
