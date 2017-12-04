
import React from 'react';
import PropTypes from 'prop-types';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import icon from './icon.png';

class ConfirmationCar extends React.Component{

    static propTypes = {
        paymentDetails: PropTypes.array.paymentDetails
    };

    constructor(props){
        super(props);
        this.state={
            bookingID: this.props.paymentDetails.bookingID,
            billAmount: this.props.paymentDetails.billAmount
        }

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
    }

    componentWillMount(){
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
                                <ul className="nav navbar-right">

                                    <a href="/">Sign Out</a>

                                </ul>
                            </nav>
                        </div>
                    </nav>

                    <div className="dashboard3">
                        <div className="col-sm-5 col-xs-6">
                            <div className="panel1 panel-default">
                                <p><h1>Congratulations..!!</h1></p>

                                <div className="panel panel-default">
                                    <img src={require('../../images/car1.png')} alt="" className="hotelImage" style={{marginLeft: "5px", width:"180px", marginTop: "35px"}}/>

                                    <p>
                                        <h5> Your booking ID: {this.state.bookingID}</h5>

                                        <h4> Payment amount: {this.state.billAmount}</h4>
                                    </p>

                                    <span><h3>Thanks for booking..</h3></span>
                                    <br/><br/><br/><br/><br/><br/>
                                </div>

                            </div>
                        </div>
                        <div className="footer_place2">

                            <div className="footer1">

                                <nav className="navbar navbar-light bg-faded">
                                    <form className="form-inline">
                                        <h3>Hope to see you soon again..!!</h3>

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

export default ConfirmationCar;
