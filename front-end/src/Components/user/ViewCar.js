
import React from 'react';
import PropTypes from 'prop-types';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import icon from './icon.png';

class ViewCar extends React.Component{

    static propTypes = {
        carDetails: PropTypes.array.carDetails,
        carRequested: PropTypes.array.carRequested,
        bookCar: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            carID: this.props.carDetails.carID,
            carType: this.props.carDetails.carType,
            carName: this.props.carDetails.carName,
            price: this.props.carDetails.price,
            seatCount: this.props.carDetails.seatCount,
            operator: this.props.carDetails.operator,
            location: this.props.carDetails.location,
            ratings: this.props.carDetails.ratings
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
                            <div className="panel2 panel-default">


                                    <div className="panel panel-default">
                                        <img src={require('../../images/car1.png')} alt="" className="hotelImage" style={{marginLeft: "5px", width:"180px", marginTop: "35px"}}/>
                                        <h2> {this.state.carName} - ({this.state.carType})  </h2>
                                        <h4> Car Id: {this.state.carID} </h4>
                                        <h4> Date: {this.props.carRequested.startDate} to {this.props.carRequested.endDate} </h4>

                                        <span className="glyphicon">&#xe008; {this.state.ratings}</span>&nbsp;&nbsp;&nbsp;
                                        <span className="glyphicon">&#xe139; {this.state.ratings}</span>&nbsp;&nbsp;&nbsp;
                                        <span className="glyphicon">&#xe043;&nbsp;{this.state.ratings}</span>

                                        <h4>No. of seats: {this.state.seatCount}</h4>
                                        <div className="spacing">
                                            <h4> Operator: {this.state.operator}/10</h4>


                                            <h4>Price: {this.state.price}</h4>

                                            <button className="searchbtn1 btn-search"
                                                    type="button"
                                                    onClick={() => this.props.bookCar(
                                                        {
                                                            carID: this.state.carID,
                                                            carRequested: this.props.carRequested
                                                        })
                                                    }
                                            >
                                                <h3> <span>Book Car</span> </h3>
                                            </button>

                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="footer_place2">

                            <div className="footer1">

                                <nav className="navbar navbar-light bg-faded">
                                    <form className="form-inline">
                                        <h3>Please Signin to book the Car...!!</h3>

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

export default ViewCar;
