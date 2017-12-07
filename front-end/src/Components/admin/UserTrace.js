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
class UserTrace extends React.PureComponent {

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
                text: 'User Activity on this day'
            },
            xAxis: {
                categories: [
                    this.props.userReportDetails[0].service,
                    this.props.userReportDetails[1].service,

                    this.props.userReportDetails[2].service,
                    this.props.userReportDetails[3].service
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                max: 20,
                allowDecimals: false,
                title: {
                    text: 'Time spent on the page'
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
                name: 'Time',
                data: [this.props.userReportDetails[0].time,this.props.userReportDetails[1].time,this.props.userReportDetails[2].time,this.props.userReportDetails[3].time]
            }]
        };

        return(
            <div>
                <ReactHighchart2 config={config}/>
            </div>
        )
    }
}




export default UserTrace;