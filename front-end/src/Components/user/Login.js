import React, {Component} from 'react';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './Message';
import icon from './icon.png';




class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: ''
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
                                    <ul className="navSign navbar-right" style={{marginTop: "20px"}}>
                                        <a href="/"> Sign Out </a>
                                    </ul>
                                </nav>
                            </div>
                        </nav>

                    </div>

            <div className="row justify-content-md-center">
                <div className="col-sm-3">

                    <form>
                        <div className="form-group">
                            <h1>Login</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
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
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Signin
                            </button>
                        </div>
                        <div className="btn btn-default">
                            <highlight>new user register here !!</highlight>
                            <div className="btn btn-link">
                                <Link to="/signup">Signup</Link>
                            </div>
                        </div>


                    </form>

                  {/*  <Route exact path="/" render={() => (
                        <div>
                            <Message message="New user Signup here !!"/>

                        </div>
                    )}/>*/}
                </div>

            </div>

                    <div className="footer_place">

                    <div className="footer1">

                        <nav className="navbar navbar-light bg-faded">
                            <form className="form-inline">
                                <h3>Please Signin to explore the best offers for you...!!</h3>

                            </form>
                        </nav>
                    </div>
                    </div>

                </div>
        );
    }
}

export default Login;