import React, { Component } from 'react';
import '../styles/Grid.css'

class FlightsDetail extends Component {

    render() {
        if (!this.props.flight) return null;
        return (
                // <div>This is the grid</div>
                <React.Fragment>
                
                <div className="grid-container">
                        <div className="grid-item image"><img src={this.props.flight.Image} alt="airline" />  {this.props.flight.FlightNo}</div>
                        {/* <div className="grid-item flightNo">  </div> */}
                        <div className="grid-item date"> {this.props.flight.Date} </div>
                        <div className="grid-item time"> {this.props.flight.Time} </div>
                        <div className="grid-item arrDep"> {this.props.flight.ArrDep} </div>
                        <div className="grid-item POC"> {this.props.flight.PortOfCallA} </div>
                        <div className="grid-item status"> {this.props.flight.Status} </div>
                        <div className="grid-item otherInfo"> {this.props.flight.OtherInfo} </div>
                        {/* <div className="grid-item add"> {this.props.flight.Additional} </div> */}
                </div>

                </React.Fragment>
                )

        }
    }
    export default FlightsDetail