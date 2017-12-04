import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../../api/API';
import {NotificationContainer, NotificationManager} from 'react-notifications';
//import '../../css/admin.css';
//import '../../assets/css/custom-styles.css';
import '../../assets/css/bootstrap.css';
//import '../../assets/css/bootstrap-theme.min.css';
//import '../../assets/css/checkbox3.min.css';
//import '../../assets/css/font-awesome.css';
//import '../../assets/css/select2.min.css';


class AddFlight extends Component {

    static propTypes = {
        getAdminDashboard: PropTypes.func.isRequired
    };

    state = {
        flightName: '',
        operator: '',
        departureTime: '',
        arrivalTime:'',
        fromCity: '',
        toCity: '',
        fromDate: '',
        price: '',
        seatCount: '',
        seatType: '',
        message: ''
    };

    addListing = (recordDetails) => {
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
    };

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
            flightName: '',
            operator: '',
            departureTime: '',
            arrivalTime:'',
            fromCity: '',
            toCity: '',
            price: '',
            maxSeats: '',
            seatType: '',
            fromDate: '',
            availableSeats: ''
        });
    }

    render() {
        return (
            <div id="wrapper">
                <div>
                    <nav className="navbar navbar-default top-navbar" role="navigation">
                        <div className="navbar-header header-left">
                            <a className="navbar-brand" href="index.html"><strong>Kayak Administrator</strong></a>
                            <button onClick={() => this.props.getAdminDashboard()}>dashboard</button>

                        </div>

                        <ul className="nav navbar-right">

                            <a href="/">Sign Out</a>

                        </ul>
                    </nav>
                </div>
                <div>
                    <nav className="navbar-default navbar-side" role="navigation">
                            <div className="sidebar-collapse">
                            <ul className="nav" id="main-menu">

                            <li>
                            <a href=""><i className="fa fa-dashboard"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-sitemap"></i> Add listing<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="/admin/flights/addFlight">Flights</a>
                                </li>
                                <li>
                                    <a href="/admin/hotels/addHotel">Hotels</a>
                                </li>
                                <li>
                                    <a href="/admin/cars/addCar">Cars</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-sitemap"></i> Edit listing<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="chart.html">Flights</a>
                                </li>
                                <li>
                                    <a href="morris-chart.html">Hotels</a>
                                </li>
                                <li>
                                    <a href="morris-chart.html">Cars</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="activateCommunity"><i className="fa fa-dashboard"></i> User Account</a>
                        </li>
                        <li>
                        <a href="activateCommunity"><i className="fa fa-dashboard"></i> Bills</a>
                        </li>
                        <li>
                            <a href="activateCommunity"><i className="fa fa-dashboard"></i> Reports</a>
                        </li>
                        </ul>

                    </div>

                </nav>
                </div>
                <div id="page-wrapper">
                    <div id="page-inner">

                        <div className="row col-md-offset-right-4">
                            <div className="col-md-8">

                                <form>
                                    <div className="form-group">
                                        <h4><strong>ADD FLIGHT</strong></h4>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Flight Name:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                label="flightName"
                                                name="flightName"
                                                placeholder="Flight Name"
                                                value={this.state.flightName}
                                                onChange={(event) => {
                                                    this.setState({
                                                        flightName: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Flight Operator:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                label="operator"
                                                placeholder="Operator"
                                                value={this.state.operator}
                                                onChange={(event) => {
                                                    this.setState({
                                                        operator: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Departure City:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <input
                                            className="form-control"
                                            type="text"
                                            label="fromCity"
                                            placeholder="Enter departure city"
                                            value={this.state.fromCity}
                                            onChange={(event) => {
                                                this.setState({
                                                    fromCity: event.target.value
                                                });
                                            }}
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Arrival City:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <input
                                            className="form-control"
                                            type="text"
                                            label="toCity"
                                            placeholder="Enter arrival city"
                                            value={this.state.toCity}
                                            onChange={(event) => {
                                                this.setState({
                                                    toCity: event.target.value
                                                });
                                            }}
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Departure date:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <input
                                            className="form-control"
                                            type="datetime-local"
                                            label="fromDate"
                                            placeholder="Enter departure date"
                                            value={this.state.departureTime}
                                            onChange={(event) => {
                                                this.setState({
                                                    departureTime: event.target.value
                                                });
                                            }}
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Arrival date:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <input
                                            className="form-control"
                                            type="datetime-local"
                                            label="arrivalTime"
                                            placeholder="Enter arrival time"
                                            value={this.state.arrivalTime}
                                            onChange={(event) => {
                                                this.setState({
                                                    arrivalTime: event.target.value
                                                });
                                            }}
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Price:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <input
                                            className="form-control"
                                            type="text"
                                            label="price"
                                            placeholder="Enter Price"
                                            value={this.state.price}
                                            onChange={(event) => {
                                                this.setState({
                                                    price: event.target.value
                                                });
                                            }}
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Seat Type:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <input
                                            className="form-control"
                                            type="text"
                                            label="seatType"
                                            placeholder="Enter seat type"
                                            value={this.state.seatType}
                                            onChange={(event) => {
                                                this.setState({
                                                    seatType: event.target.value
                                                });
                                            }}
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Seat Count:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <input
                                            className="form-control"
                                            type="text"
                                            label="maxSeats"
                                            placeholder="Enter seat count"
                                            value={this.state.maxSeats}
                                            onChange={(event) => {
                                                this.setState({
                                                    maxSeats: event.target.value
                                                });
                                            }}
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Available Seats:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                label="availableSeats"
                                                placeholder="Enter available seats"
                                                value={this.state.availableSeats}
                                                onChange={(event) => {
                                                    this.setState({
                                                        availableSeats: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                onClick={() => this.addListing(this.state)}>
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <NotificationContainer/>
                </div>
            </div>
        );
    }
}

export default AddFlight;