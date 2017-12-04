import React, {Component} from 'react';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './user/logo.png';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cars from './user/Cars';
import Flights from './user/Flights';
//import mui from 'material-ui';
import MaterialIcon from 'react-google-material-icons';
import icon from './user/icon.png';


class FailurePage extends Component {

    static propTypes = {
        searchHotel: PropTypes.func.isRequired
    };


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

                                            {/*//modal needs to be added, signin and signup linking to be done*/}
                                        </span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </nav>


                    <div className="dashboard" style={{marginTop: "150px", marginLeft: "250px"}}>
                        <div className="text" style={{paddingTop: "25px"}}>
                            <h1> Oops...this is an error!!</h1>
                            <h2> Please try back later...</h2>
                        </div>
                    </div>







                    <div className="space">
                    </div>

                    <div className="footer1" style={{marginTop: "200px"}}>
                        <h3>Use our smart tools to make your search for cheap flights easier

                            Price Alerts</h3>

                        <nav className="navbar navbar-light bg-faded">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </nav>
                    </div>





                </div>

            </div>





        )
    }
}

export default FailurePage;