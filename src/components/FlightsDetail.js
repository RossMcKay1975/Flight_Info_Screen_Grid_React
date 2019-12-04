import React, { Component } from 'react';
import '../styles/Grid.css'

class FlightsDetail extends Component {

    render() {
        if (!this.props.flight) return null;
        return (
                // <div>This is the grid</div>
                <React.Fragment>
                <div class="grid-container">
                        <div class="grid-Item"><img src={this.props.flight.Image} alt="airline" /></div>
                        <div class="grid-Item"> {this.props.flight.FlightNo} </div>
                        <div class="grid-Item"> {this.props.flight.Date} </div>
                        <div class="grid-Item"> {this.props.flight.Time} </div>
                        <div class="grid-Item"> {this.props.flight.ArrDep} </div>
                        <div class="grid-Item"> {this.props.flight.PortOfCallA} </div>
                        <div class="grid-Item"> {this.props.flight.Status} </div>
                        <div class="grid-Item"> {this.props.flight.OtherInfo} </div>
                        <div class="grid-Item"> {this.props.flight.Additional} </div>
                </div>
                </React.Fragment>
                )

        }
    }
    export default FlightsDetail