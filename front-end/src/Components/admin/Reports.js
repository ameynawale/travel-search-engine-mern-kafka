import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../../api/API';
import {NotificationContainer, NotificationManager} from 'react-notifications';
//import '../../css/admin.css';
import '../../assets/css/custom-styles.css';
import '../../assets/css/bootstrap.css';
import '../../assets/css/GridStyles.css';
import '../../assets/css/ResizeStyles.css';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

//import '../../assets/css/bootstrap-theme.min.css';
//import '../../assets/css/checkbox3.min.css';
//import '../../assets/css/font-awesome.css';
//import '../../assets/css/select2.min.css';


class Reports extends Component {

    static propTypes = {
        handleSignUp: PropTypes.func.isRequired
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
            seatCount: '',
            seatType: '',
            fromDate: ''
        });
    }

    render() {
        var layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
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
                                <div className="form-group">
                                    <h4><strong>REPORTS</strong></h4>
                                </div>
                                <ResponsiveReactGridLayout className="layout react-grid-item react-grid-placeholder react-resizable-handle" layouts={layout}
                                                           breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                                           cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
                                    <div key="1">1</div>
                                    <div key="2">2</div>
                                    <div key="3">3</div>
                                </ResponsiveReactGridLayout>
                            </div>

                        </div>
                    </div>
                    <NotificationContainer/>
                </div>
            </div>
        );
    }
}

export default Reports;