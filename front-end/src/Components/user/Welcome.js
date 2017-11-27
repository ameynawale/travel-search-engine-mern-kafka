import React, {Component} from 'react';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hotels from './Hotels';
import Cars from './Cars';
import Flights from './Flights';


//import mui from 'material-ui';

import MaterialIcon from 'react-google-material-icons';

import icon from './icon.png';


class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired,
        password: PropTypes.string.isRequired,
    };

    state = {
        username : '',
        email: [],
        password: ''


    };

    constructor(props) {
        super(props);
        //this.home = this.home.bind(this);
    }




    componentWillMount(){
        this.setState({
            username : this.props.username,


        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;

    };


    render(){


        return(
            <div className="App-welcome">

                <div className="container-fluid">
                    <div className="BackgroundImage">
                    <div style={{"display": "flex", "flexDirection": "row", "minwidth": "1000px"}}>
                           <img src={require('./kayak1.jpg')}/>
                        <div style={{"position": "absolute", "zIndex": 10, "margin": "auto", "width": "100%", "padding": "10px" }}>




                        <a className="Kayak-logo" href="#" title="HOME"><img src={logo} className="App-logo" alt="logo" /></a>


                    <nav>
                        <div className="navWide">
                            <div className="wideDiv">
                                <a href="/hotels" className= " Hotels text-white"> <h4>Hotels</h4> </a>
                                <a className= "Flights text-white" onClick={() => {
                                    this.props.history.push("/F" +
                                        "flights")}}> <h4>Flights</h4> </a>
                                <a href="/cars" className= "Cars text-white"> <h4>Cars</h4> </a>
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


                            <div className="Statement text-white" ><h2><b>Search Hundreds of Travel Sites at once</b></h2></div>

                            <div className="mainform">

                            <div className="col-xs-6 col-sm-offset-3">
                                <a href="#" className="btn btn-lg btn-block omb_btn-facebook">
                                    <button type="button" className="mainbtn btn-default"><i className="material-icons">&#xe53a;</i>Hotels</button>

                                    <button type="button" className="mainbtn btn-default"><i className="material-icons">&#xe539;</i>Flights</button>

                                    <button type="button" className="mainbtn btn-default"><i className="material-icons">&#xe531;</i>Cars</button>

                                    <button type="button" className="mainbtn btn-default">More<i className="material-icons">&#xe5cf;</i></button>


                                    </a>

                                <div className="dashboard">

                                    <input type="text" placeholder="origin" className="formFields" style={{marginLeft: "5px", width:"180px", marginTop: "35px"}}/>
                                    <input type="text" placeholder="destination" className="formFields" style={{width:"180px"}}/>
                                    <input type="date" className="formFields" style={{ width:"180px"}}/>
                                    <input type="Dropdown" className="dropdown-menu" style={{height:"10px", width:"180px"}}/>

                                    <select id = "travelClass">
                                        <input type="text" placeholder="Class" className="formFields1" style={{"height":"55px", width:"180px"}}/>
                                        <option value = "Economy">Economy</option>
                                        <option value = "Buisness">Buisness</option>
                                    </select>


                                    <button className="searchbtn btn-search" type="button" onClick={() => this.search(this.state)}>
                                        <h3> <b>--></b> </h3>
                                    </button>


                                </div>


                        </div>

                    </div>
                        </div>

</div>



                </div>




                    <div className="container">
                        <fieldset className="scheduler-border">
                            <form>
                        <h3> Stay-up-to-date</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <h4> Subscribe to our newsletter</h4>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" />

                            </div>
                            <div className="col-sm-2">
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </div>
                            </form>
                        </fieldset>
                    </div>




                    <section>
                    <div className="container">
                        <h2 className="section-title">
                            Our Blazzing offers
                        </h2>
                        <p className="section-subtitle">
                            Lorem Ipsum is simply dummy text of the industry.
                        </p>
                        <div className="row">
                            <div className="col-sm-3 col-xs-6">
                                <div className="offer-item">

                                    <h3>
                                        Affordable Pricing
                                    </h3>
                                    <p>
                                        class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-3 col-xs-6">
                                <div className="offer-item">
                                    <div className="icon">
                                        <i className="ion-ios-home"></i>
                                    </div>
                                    <h3>
                                        High className Hotels
                                    </h3>
                                    <p>
                                        class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-3 col-xs-6">
                                <div className="offer-item">
                                    <div className="icon">
                                        <i className="ion-android-bus"></i>
                                    </div>
                                    <h3>
                                        Luxury Transport
                                    </h3>
                                    <p>
                                        class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-3 col-xs-6">
                                <div className="offer-item">
                                    <div className="icon">
                                        <i className="ion-ios-locked"></i>
                                    </div>
                                    <h3>
                                        Highest Security
                                    </h3>
                                    <p>
                                        class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="visit section-wrapper">
                    <div className="container">
                        <h2 className="section-title">
                            Top place to visit
                        </h2>
                        <p className="section-subtitle">
                            Lorem Ipsum is simply dummy text of the industry.
                        </p>

                        <div className="owl-carousel visit-carousel">
                            <div className="item">
                                <img src={require('../../images/visit-1.png')} alt="visit-image" className="col-sm-4"/>
                            </div>
                            <div className="item">
                                <img src={require('../../images/visit-2.png')} alt="visit-image" className="col-sm-4"/>
                            </div>
                            <div className="item">
                                <img src={require('../../images/visit-3.png')} alt="visit-image" className="col-sm-4"/>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="additional-services section-wrapper">
                    <div className="container">
                        <h2 className="section-title">
                            Additional services
                        </h2>
                        <p className="section-subtitle">
                            Lorem Ipsum is simply dummy text of the industry.
                        </p>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="custom-table">
                                    <img src={require('../../images/add-srvc-1.png')} alt="" className="add-srvc-img"/>
                                        <div className="add-srvc-detail">
                                            <h4 className="add-srvc-heading">
                                                Photography
                                            </h4>
                                            <p className="add-srvc">
                                                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
                                            </p>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="custom-table">
                                    <img src={require('../../images/add-srvc-2.png')} alt="" className="add-srvc-img"/>
                                        <div className="add-srvc-detail">
                                            <h4 className="add-srvc-heading">
                                                Cycling
                                            </h4>
                                            <p className="add-srvc">
                                                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
                                            </p>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="custom-table">
                                    <img src={require('../../images/add-srvc-3.png')} alt="" className="add-srvc-img"/>
                                        <div className="add-srvc-detail">
                                            <h4 className="add-srvc-heading">
                                                Waking
                                            </h4>
                                            <p className="add-srvc">
                                                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
                                            </p>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="custom-table">
                                    <img src={require('../../images/add-srvc-4.png')} alt="" className="add-srvc-img"/>
                                        <div className="add-srvc-detail">
                                            <h4 className="add-srvc-heading">
                                                Skiing
                                            </h4>
                                            <p className="add-srvc">
                                                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
                                            </p>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="custom-table">
                                    <img src={require('../../images/add-srvc-5.png')} alt="" className="add-srvc-img"/>
                                        <div className="add-srvc-detail">
                                            <h4 className="add-srvc-heading">
                                                Sea beach
                                            </h4>
                                            <p className="add-srvc">
                                                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
                                            </p>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="custom-table">
                                    <img src={require('../../images/add-srvc-6.png')} alt="" className="add-srvc-img"/>
                                        <div className="add-srvc-detail">
                                            <h4 className="add-srvc-heading">
                                                Hill tracking
                                            </h4>
                                            <p className="add-srvc">
                                                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                    <section className="visit section-wrapper">
                <div className="section-wrapper sponsor">
                    <div className="container">
                        <h2 className="section-title">
                            Our Partners
                        </h2>
                        <p className="section-subtitle">
                            Lorem Ipsum is simply dummy text of the industry.
                        </p>

                        <div className="owl-carousel sponsor-carousel">
                            <div className="item">
                                <a href="#">
                                    <img src={require('../../images/sp-1.png')} alt="sponsor-brand" className="col-sm-2"/>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={require('../../images/sp-2.png')} className="col-sm-2"/>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={require('../../images/sp-3.png')} alt="sponsor-brand" className="col-sm-2"/>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={require('../../images/sp-4.png')} alt="sponsor-brand" className="col-sm-2"/>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={require('../../images/sp-5.png')} alt="sponsor-brand" className="col-sm-2"/>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={require('../../images/sp-6.png')} alt="sponsor-brand" className="col-sm-2"/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>


                    </section>
                    <div className="space">
                    </div>

                    <div className="footer">
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

export default withRouter(Welcome);