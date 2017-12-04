import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import _ from 'lodash';
import '../../assets/css/GridStyles.css';
import '../../assets/css/ResizeStyles.css';
import '../../assets/css/custom-styles.css';
import '../../assets/css/bootstrap.css';
import ReactHighcharts from 'react-highcharts';
import ReactHighcharts1 from 'react-highcharts';
//import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../../api/API';
import {NotificationContainer, NotificationManager} from 'react-notifications';
//import '../../css/admin.css';
import Graph1 from './Graph1';

const ResponsiveReactGridLayout = WidthProvider(Responsive);




/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class AddRemoveLayout extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
        rowHeight: 100
    };

    propTypes = {
        dashboardDetails: PropTypes.array.dashboardDetails
    };

    constructor(props) {
        super(props);

        this.state = {
            items: [0,1].map(function(i, key, list) {
                return {i: i.toString(), x: i * 2, y: 0, w: 4, h: 4, add: i === (list.length - 1).toString()};
            }),
            newCounter: 0,
            layout: 'test-react-grid',
            registeredUsers: this.props.dashboardDetails.registeredUsers,
            hotelsLocation: this.props.dashboardDetails.hotelsLocation,
            flightsLocation: this.props.dashboardDetails.flightsLocation,
            clickedButton: 0
        };

        this.onAddItem = this.onAddItem.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
    }

    createElement(el, state) {
        const removeStyle = {
            position: 'absolute',
            right: '2px',
            top: 0,
            cursor: 'pointer',
            backgroundColor: "white"
        };
        const i = el.add ? '+' : el.i;
        const config1 = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Cities for Car Bookings'
            },
            xAxis: {
                categories: [
                    "test1",
                    "test2",
                    "test3",
                    "test4",
                    "test5",
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                allowDecimals: false,
                title: {
                    text: 'Number of bookings'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Cities',
                data: ["test6","test7",state.hotelsLocation[2].count,state.hotelsLocation[3].count,state.hotelsLocation[4].count]
            }]
        };

        if(this.state.clickedButton) {
            return (
                <div key={i} data-grid={el} style={{backgroundColor: "white"}}>
                    {el.add ?
                        <span className="add text" onClick={this.onAddItem}
                              title="You can add an item by clicking here, too.">Add +</span>
                        : <span className="text">{i}</span>}
                    <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
                    <Graph1/>
                </div>

            );
        }
        else{
            return (
                <div key={i} data-grid={el} style={{backgroundColor: "white"}}>
                    {el.add ?
                        <span className="add text" onClick={this.onAddItem}
                              title="You can add an item by clicking here, too.">Add +</span>
                        : <span className="text">{i}</span>}
                    <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
                    <ReactHighcharts/>
                </div>

            );
        }
    }

    onAddItem() {
        /*eslint no-console: 0*/
        console.log('adding', 'n' + this.state.newCounter);
        this.setState({
            // Add a new item. It must have a unique key!
            items: this.state.items.concat({
                i: 'n' + this.state.newCounter,
                x: this.state.items.length * 2 % (this.state.cols || 12),
                y: Infinity, // puts it at the bottom
                w: 4,
                h: 4
            }),
            // Increment the counter to ensure key is always unique.
            newCounter: this.state.newCounter + 1
        });
    }

    // We're using the cols coming back from this to calculate where to add new items.
    onBreakpointChange(breakpoint, cols) {
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    onLayoutChange(layout) {
        //this.props.onLayoutChange(layout);
        //this.setState({layout: layout});
    }

    onRemoveItem(i) {
        console.log('removing', i);
        this.setState({items: _.reject(this.state.items, {i: i})});
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
                        <div>
                            <button className="btn btn-primary" onClick={this.onAddItem} style={{width: 100}}>Flights</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={this.onAddItem} style={{width: 100}}>Cars</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={this.onAddItem} style={{width: 100}}>Hotels</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={this.onAddItem} style={{width: 100}}>Revenue</button>
                        </div>
                        <br/>
                        <div style={{display: "block"}}>
                            <div className="board" style={{width:300, align: "center", display: "inline"}}>
                                <div className="panel panel-primary" style={{width: 300, align: "center"}}>
                                    <div className="number" style={{align: "center"}}>
                                        <h3 style={{width: 275}}>
                                            <h3>{this.state.registeredUsers}</h3>
                                            <small>Registered Users</small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="board" style={{width:300, align: "center", display: "inline"}}>
                                <div className="panel panel-primary" style={{width: 300, align: "center"}}>
                                    <div className="number" style={{align: "center"}}>
                                        <h3 style={{width: 275}}>
                                            <h3>{this.state.hotelsLocation[0].hotelName}</h3>
                                            <small>Daily Visits</small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
                                                   {...this.props}>
                            {_.map(this.state.items, (el) => this.createElement(el, this.state))}
                        </ResponsiveReactGridLayout>
                    </div>
                </div>
            </div>
        );
    }
}

//module.exports = AddRemoveLayout;

export default AddRemoveLayout;
/*
if (require.main === module) {
    require('../test-hook.jsx')(module.exports);
}*/
