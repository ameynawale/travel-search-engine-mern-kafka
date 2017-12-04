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


class SearchCar extends Component {

    static propTypes = {
        searchBills: PropTypes.func.isRequired
    };

    state = {
        fromDate: '',
        toDate: '',
        bookingType: ''
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
            <div id="wrapper">
                <div>
                    <nav className="navbar navbar-default top-navbar" role="navigation">
                        <div className="navbar-header header-left">
                            <a className="navbar-brand" href="index.html"><strong>Kayak Administrator</strong></a>

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
                                            <a href="/admin/flights/searchFlight">Flights</a>
                                        </li>
                                        <li>
                                            <a href="/admin/hotels/searchHotel">Hotels</a>
                                        </li>
                                        <li>
                                            <a href="/admin/cars/searchCar">Cars</a>
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
                                        <h4><strong>SEARCH BILLS</strong></h4>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>From Date:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                className="form-control"
                                                type="date"
                                                label="fromDate"
                                                name="fromDate"
                                                value={this.state.fromDate}
                                                onChange={(event) => {
                                                    this.setState({
                                                        fromDate: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>To Date:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                className="form-control"
                                                type="date"
                                                label="toDate"
                                                name="toDate"
                                                value={this.state.toDate}
                                                onChange={(event) => {
                                                    this.setState({
                                                        toDate: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div display="block" className="col-md-6">
                                            <label style={{float:'right'}}>Booking Type:</label>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                label="bookingType"
                                                name="bookingType"
                                                onChange={(event) => {
                                                    this.setState({
                                                        bookingType: event.target.value
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
                                                onClick={() => this.props.searchBills(this.state)}>
                                                Search
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

export default SearchCar;