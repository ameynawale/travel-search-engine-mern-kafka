import React, {Component} from 'react';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from '../admin/logo.png';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './Message';
import icon from '../admin/icon.png';




class DuplicateUser extends Component {

    static propTypes = {
        handleSignUp: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        city: '',
        address: '',
        state: '',
        zipcode: '',
        email: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (

            <div className="App-Welcome">

                <div className="container-fluid">
                    <nav className="navbar" style={{"width": "1350px", "paddingLeft": "0px"}}>



                        <div style={{"position": "absolute", "zIndex": 10, "margin": "auto", "width": "100%", "padding": "10px", "backgroundColor": "black" }}>




                            <a href="/" className="Kayak-logo" title="HOME"><img src={logo} className="App-logo" alt="logo" /></a>


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

                </div>

                <div className="row justify-content-md-center">

                    <div className="col-sm-4">

                        <form>
                            <div className="form-group">
                                <div className="text text-danger">
                                    <h2>User already exists. Please try again with a different email.</h2>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="text text-danger">
                                    <h2>New user, Register here</h2>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="firstName"
                                    placeholder="Enter firstname"
                                    value={this.state.firstName}
                                    onChange={(event) => {
                                        this.setState({
                                            firstName: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="lastName"
                                    placeholder="Enter lastname"
                                    value={this.state.lastName}
                                    onChange={(event) => {
                                        this.setState({
                                            lastName: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="username"
                                    placeholder="Enter username"
                                    value={this.state.username}
                                    onChange={(event) => {
                                        this.setState({
                                            username: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    label="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={(event) => {
                                        this.setState({
                                            email: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    label="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.setState({
                                            password: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Address"
                                    placeholder="Enter address"
                                    value={this.state.address}
                                    onChange={(event) => {
                                        this.setState({
                                            address: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="City"
                                    placeholder="City"
                                    value={this.state.city}
                                    onChange={(event) => {
                                        this.setState({
                                            city: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="number"
                                    label="zipcode"
                                    placeholder="Enter Zipcode"
                                    value={this.state.zipcode}
                                    onChange={(event) => {
                                        this.setState({
                                            zipcode: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="state"
                                    placeholder="Enter State"
                                    value={this.state.state}
                                    onChange={(event) => {
                                        this.setState({
                                            state: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input type= "checkbox" name= "robot" value= "I am not a robot"/>
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={() => this.props.handleSignUp(this.state)}>
                                    Signup
                                </button>


                            </div>
                        </form>

                        <Route exact path="/" render={() => (
                            <div>
                                <Message message="New user Signup here !!"/>

                            </div>
                        )}/>
                    </div>

                </div>

                <div className="footer_place1">

                    <div className="footer2">

                        <nav className="navbar navbar-light bg-faded">
                            <form className="form-inline">
                                <h3>Please Signup to explore the best offers for you...!!</h3>

                            </form>
                        </nav>
                    </div>
                </div>
            </div>






        );
    }
}

export default DuplicateUser;