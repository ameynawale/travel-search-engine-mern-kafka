
import React from 'react';
import PropTypes from 'prop-types';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import icon from './icon.png';

class ViewFlight extends React.Component{

    static propTypes = {
        flightDetails: PropTypes.array.flightDetails,
        flightRequested: PropTypes.array.flightRequested,
        bookFlight: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            flightID: this.props.flightDetails.flightID,
            flightName: this.props.flightDetails.flightName,
            operator: this.props.flightDetails.operator,
            fromCity: this.props.flightDetails.fromCity,
            toCity: this.props.flightDetails.toCity,
            departureTime: this.props.flightDetails.departureTime,
            arrivalTime: this.props.flightDetails.arrivalTime,
            seatType: this.props.flightDetails.seatType,
            maxSeats: this.props.flightDetails.maxSeats,
            availableSeats: this.props.flightDetails.availableSeats,
            price: this.props.flightDetails.price
        };

    }




    /*state= {
        hotels: [
            {
                hotelName: "Downtown Mariot",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                roomCount: '1',
                hotelPrice: '$159',
                hotelStar: '4',
                hotelRating: '8',
                username: 'first@last.com'
            },

        ]
    }*/

    /*componentWillMount(){
        this.setState({
            // hotelName: this.props.hotels.hotelName
        })
    }
*/
    render(){
        return(
            <div className="App-welcome">
                <div className="container-fluid">
                    <nav className="navbar" style={{"width": "1350px", "paddingLeft": "0px"}}>



                        <div style={{"position": "absolute", "zIndex": 10, "margin": "auto", "width": "100%", "padding": "10px", "backgroundColor": "black" }}>




                            <a href="/"  className="Kayak-logo" title="HOME"><img src={logo} className="App-logo" alt="logo" /></a>


                            <nav>
                                <div className="navWide">
                                    <div className="wideDiv">
                                        <a href="/hotels" className=" Hotels text-white" > <h4>Hotels</h4> </a>
                                        <a href="/flights" className= "Flights text-white" > <h4>Flights</h4> </a>
                                        <a href="/cars" className= "Cars text-white" > <h4>Cars</h4> </a>
                                        <a className= "Packages text-white" href="#"> <h4>Packages</h4> </a>
                                        <a className= "Rentals text-white" href="#"> <h4>Rentals</h4> </a>
                                        <a className= "Cruisers text-white" href="#"> <h4>Cruisers</h4> </a>
                                        <a className= "dropdown-container text-white" href="#"> <h4>More</h4> </a>

                                        <span>
                                  <img src={icon} alt="icon" className="iconImage" />


                                        </span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </nav>

                    <div className="dashboard3">
                        <div className="col-sm-5 col-xs-6">
                            <div className="panel2 panel-default">


                                <div className="panel panel-default">
                                    <img src={require('../../images/flight5.png')} alt="" className="hotelImage" style={{marginLeft: "5px", width:"180px", marginTop: "35px"}}/>
                                    <h3>Flight Name: {this.state.flightName} - {this.state.operator}</h3>
                                    <h4>Flight Id: {this.state.flightID} </h4>
                                    <h4> Origin: {this.state.fromCity} at {this.state.departureTime} </h4>
                                    <h4> Destination: {this.state.toCity} at {this.state.arrivalTime} </h4>

                                    <h5>Travel class: {this.state.seatType}</h5>
                                    <h4>Available Seats: {this.state.availableSeats}</h4>
                                    <div className="spacing">


                                        <h4>Price: {this.state.price}</h4>

                                        <button className="searchbtn1 btn-search"
                                                type="button"
                                                onClick={() => this.props.bookFlight(
                                                    {
                                                        flightID: this.state.flightID,
                                                        seatType: this.state.seatType,
                                                        passengerCount: this.props.flightRequested.passengerCount,
                                                        flightRequested: this.props.flightRequested
                                                    })
                                                }
                                        >
                                            <h3> <span>Book Flight</span> </h3>
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="footer_place2">

                            <div className="footer1">

                                <nav className="navbar navbar-light bg-faded">
                                    <form className="form-inline">
                                        <h3>Please Signin to book the Flight...!!</h3>

                                    </form>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ViewFlight;
