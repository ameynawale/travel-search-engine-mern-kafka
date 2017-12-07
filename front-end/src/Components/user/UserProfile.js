
import React from 'react';
import PropTypes from 'prop-types';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import icon from './icon.png';

class UserProfile extends React.Component{

    constructor(props){
        super(props);

    }




    state= {
        userId: '',
        username: '',
        firstname: '',
        lastname: '',
        zipcode: '',
        email: '',
        city: '',
        address: '',


    };

    componentWillMount(){
        this.setState({
            // hotelName: this.props.hotels.hotelName
        })
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

                    <div className="container">

                        <h1> Edit Profile</h1>

                        <div className="row justify-content-md-center">

                            <div className="col-md-5">



                                <h3> Personal Info.</h3>
                                <form>

                                      <h4>User Id:</h4>
                                      <h4> <input type="text"  className="form-control" defaultValue={this.state.userId} /></h4>

                                                    <h4>First Name:

                                                        <input type="text"  className="form-control" defaultValue={this.state.firstname} /></h4>

                                    <h4> Last Name: <input type="text" className="form-control" defaultValue={this.state.lastname} /></h4>
                                    <h4>Address:

                                        <input type="text" className="form-control" defaultValue={this.state.address} /></h4>
                                    <h4>City:

                                        <input type="text" className="form-control" defaultValue={this.state.city} /></h4>
                                    <h4>State:

                                        <input type="text" className="form-control" defaultValue={this.state.state} /></h4>
                                    <h4>Zip code:

                                        <input type="number" className="form-control" defaultValue={this.state.zipcode} /></h4>

                                    <h4>Phone Number:

                                        <input type="number" className="form-control" defaultValue={this.state.phoneNumber} /></h4>
                                    <h4>Email:

                                        <input type="email" className="form-control" defaultValue={this.state.email} /></h4>
                                    <h4>Trip Id:

                                        <input type="number" className="form-control" defaultValue={this.state.tripId} /></h4>
                                    <h4>Credit Card Details:

                                        <input type="number" className="form-control" defaultValue={this.state.creditCardDetails} /></h4>
                                            <br/>

                                          <button
                                              className="btn btn-primary"
                                              type="button"
                                              value="Save Changes"
                                              onClick={() => this.props.userEdit(this.state)}>
                                              Save Changes
                                          </button>
                                          &nbsp;&nbsp;&nbsp;
                                          <button
                                              className="btn btn-primary"
                                              type="reset"
                                              value="Cancel"
                                              /*onClick={() => this.props.handleSignUp(this.state)}*/>
                                              Cancel
                                          </button>
                                    <br/><br/>
                                    <button
                                        className="btn btn-danger"
                                        type="reset"
                                        value="Delete"
                                        onClick={() => this.props.userDelete(this.state)}>
                                        Delete Profile
                                    </button>







                                </form>
                                                </div>


                            </div>

                        </div>



                            </div>



                    <div className="footer_place2">

                        <div className="footer1">

                            <nav className="navbar navbar-light bg-faded">
                                <form className="form-inline">
                                    <h3>Please update your profile information...!!</h3>

                                </form>
                            </nav>
                        </div>
                    </div>
                </div>




        )
    }
}

export default UserProfile;
