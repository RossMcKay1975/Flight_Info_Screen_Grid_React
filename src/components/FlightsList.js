import React, { Component } from 'react';
import FlightsDetail from './FlightsDetail';
import '../styles/Grid.css' 


class FlightsList extends Component {

    render() {

        const flightsNodes = this.props.flights.map((flight) => {
            return (<FlightsDetail key={flight.FlightNo} flight={flight} ></FlightsDetail>)

        })
    return (
        <div>{flightsNodes}</div>
    )
        
    }
}
export default FlightsList