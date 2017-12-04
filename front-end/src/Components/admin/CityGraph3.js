import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import _ from 'lodash';
import '../../assets/css/GridStyles.css';
import '../../assets/css/ResizeStyles.css';
import '../../assets/css/custom-styles.css';
import '../../assets/css/bootstrap.css';
import ReactHighcharts from 'react-highcharts';
import ReactHighcharts1 from 'react-highcharts';
import ReactHighchart2 from 'react-highcharts';
//import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../../api/API';
import {NotificationContainer, NotificationManager} from 'react-notifications';
//import '../../css/admin.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);




/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class CityGraph3 extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {

        };
    }


    render(){

        const config = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top car types booked in this city'
            },
            xAxis: {
                categories: [
                    this.props.carBookings[0].carType,
                    this.props.carBookings[1].carType,
                    this.props.carBookings[2].carType,
                    this.props.carBookings[3].carType,
                    this.props.carBookings[4].carType
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                allowDecimals: false,
                title: {
                    text: 'Number of bookings per car type'
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
                name: 'Hotels',
                data: [this.props.carBookings[0].count,this.props.carBookings[1].count,this.props.carBookings[2].count,this.props.carBookings[3].count,this.props.carBookings[4].count]
            }]
        };

        return(
            <div>
                <ReactHighchart2 config={config}/>
            </div>
        )
    }
}




export default CityGraph3;