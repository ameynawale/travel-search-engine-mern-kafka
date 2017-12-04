import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../../api/API';
import {NotificationContainer, NotificationManager} from 'react-notifications';
//import '../../css/admin.css';
import '../../assets/css/custom-styles.css';
import '../../assets/css/bootstrap.css';
//import '../../assets/css/bootstrap-theme.min.css';
//import '../../assets/css/checkbox3.min.css';
//import '../../assets/css/font-awesome.css';
//import '../../assets/css/select2.min.css';
import logo from './logo.png';
import icon from './icon.png';


class ViewBills extends Component {

    static propTypes = {
        billList: PropTypes.array.isRequired
    };

    state = {
        fromDate: '',
        toDate: '',
        bookingType: '',

        billList: this.props.billList,

        hotels: [
            {

                car: "h"

            },
            {
                car: "d"

            },
            {
                car: "a"
            }
        ]

    };

    /*addListing = (recordDetails) => {
        API.addFlight(recordDetails)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        message: 'Record added successfully!'
                    })
                } else if (status === 401) {
                    this.setState({
                        message: "Error is adding the record!"
                    });
                }
            });
    };*/

    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };

    componentWillMount(){
        this.setState({
            fromDate: '',
            toDate: ''
        });
    }

    render() {
        return (
            <div id="wrapper" style={{"paddingLeft": "0px"}}>
                <div className="container-fluid">
                    <div className="container-fluid">
                        <nav className="navbar" style={{"width": "1350px", "paddingLeft": "0px"}}>



                            <div style={{"position": "fixed", "zIndex": 10, "margin": "auto", "width": "100%", "padding": "10px", "backgroundColor": "black" }}>




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
                                    <ul className="navSign navbar-right" style={{marginTop: "20px"}}>

                                        <a href="/">Sign Out</a>

                                    </ul>
                                </nav>
                            </div>
                        </nav>

                        <div className="nav-side-menu">
                            <div className="brand">Admin Panel</div>
                            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                            <div className="menu-list">

                                <ul id="menu-content" className="menu-content collapse out">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-dashboard fa-lg"></i> Dashboard
                                        </a>
                                    </li>









                                    <section>

                                        <select className="form-control"
                                                style={{border: "none", background: "rgba(0,0,0,0,05)", color: "white", backgroundColor: "#4f5b69", height: "40px"}}
                                                value="">
                                            <option value="" disabled selected>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                Add Listing</option>
                                            <option value="Flights"><a href="/admin/flights/addflight">Flights</a></option>
                                            <option value="Hotels">Hotels</option>
                                            <option value="Cars"> Cars</option>
                                        </select>
                                    </section>

                                    <section>

                                        <select className="form-control"
                                                style={{border: "none", background: "rgba(0,0,0,0,05)", color: "white", backgroundColor: "#4f5b69", height: "40px"}}
                                                value="">
                                            <option value="" style={{paddingLeft: "60px"}} disabled selected>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                Edit Listing</option>
                                            <option value="Economy">Flights</option>
                                            <option value="First">Hotels</option>
                                            <option value="buisness"> Cars</option>
                                        </select>
                                    </section>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-user fa-lg"></i> User Account
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-users fa-lg"></i> Bills
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-users fa-lg"></i> Reports
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>



                <div id="page-wrapper" style={{marginLeft: "330px", width: "1000px", "position":"fixed"}}>
                    <div id="page-inner">

                        <div className="row col-md-offset-right-4">
                            <div className="col-md-8">

                                <form>
                                    <div className="form-group">
                                        <h3><strong>VIEW BILLS</strong></h3>
                                    </div>

                                    <table id="t01">
                                        <tr>
                                            <th>BOOKING ID</th>
                                            <th>BILL DATE</th>
                                            <th>PRICE</th>
                                        </tr>
                                        {this.state.billList.map((file,i) =>
                                            <tr>
                                                <td> <a href="#">{this.state.billList[i].bookID} </a> </td>
                                                <td>{this.state.billList[i].time}</td>
                                                <td>{this.state.billList[i].price}</td>
                                            </tr>
                                        )}
                                    </table>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewBills;