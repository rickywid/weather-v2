import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 11
        }
    }

    componentDidMount() {

        let coord = {
            lat: this.props.coord.lat,
            lng: this.props.coord.lon,
        }

        this.setState({ center: coord });
    }

    componentWillReceiveProps(nextProps, prevProps) {
        
        let coord = {
            lat: nextProps.coord.lat,
            lng: nextProps.coord.lon,
        }

        this.setState({ center: coord });       
    }

    render() {
        return (
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAdOrgGoSsaX6ApmqF8WlnhNKNzbhqQuIU' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                </GoogleMapReact>
            </div>    
        )
    }
}
