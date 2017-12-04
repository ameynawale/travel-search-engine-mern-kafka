
import React from 'react';
import PropTypes from 'prop-types';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import icon from './icon.png';

class ViewHotel extends React.Component{

    static propTypes = {
        hotelDetails: PropTypes.array.hotelDetails,
        hotelRequested: PropTypes.array.hotelRequested,
        bookHotel: PropTypes.func.isRequired
    };

     constructor(props){
          super(props);
         this.state = {
             hotelID: this.props.hotelDetails.hotelID,
             hotelName: this.props.hotelDetails.hotelName,
             city: this.props.hotelDetails.city,
             fromDate: this.props.hotelDetails.fromDate,
             toDate: this.props.hotelDetails.toDate,
             guestCount: this.props.hotelDetails.guestCount,
             bookedRooms: this.props.hotelDetails.bookedRooms,
             amount: this.props.hotelDetails.amount,
             starHotel: this.props.hotelDetails.starHotel,
             ratings: this.props.hotelDetails.ratings,
             hotelRequested: this.props.hotelRequested,
             username: 'first@last.com'
         };

      }


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


                                <div className="panel panel-default">
                                    <img src={require('../../images/htl1.jpg')} alt="" className="hotelImage" style={{marginLeft: "5px", width:"180px", marginTop: "35px"}}/>

                                    <p><h2>{this.state.hotelName}</h2>
                                        <h5> Star: {this.state.starHotel}</h5>

                                        <h4> Reviews: {this.state.ratings}/10</h4>
                                    </p>
                                    <h4>{this.state.amount}</h4>
                                    <button className="searchbtn1 btn-search" type="button"
                                            onClick={() => this.props.bookHotel(
                                                {
                                                    hotelID: this.state.hotelID,
                                                    hotelRequested: this.props.hotelRequested
                                                })
                                            }
                                    >
                                        <h3> <span>Book Hotel</span> </h3>
                                    </button>

                                </div>

                            </div>
                        </div>
                        <div className="footer_place2">

                            <div className="footer1">

                                <nav className="navbar navbar-light bg-faded">
                                    <form className="form-inline">
                                        <h3>Please Signin to book the hotel...!!</h3>

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

export default ViewHotel;
