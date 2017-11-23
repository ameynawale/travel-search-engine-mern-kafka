import React from 'react';
import setHead from 'react-document-head';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/custom-styles.css';
//import '../../assets/css';
import {Helmet} from 'react-helmet';
import '../../assets/css/admin.css'
import Dropdown from 'react-dropdown';

class FullPage extends React.Component {




    render() {
        //setHead({})
        const listing = [
            'Flights', 'Hotels', 'Cars'
        ]

        return (
            <div id="wrapper">
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta content="" name="description" />
                    <meta content="webthemez" name="author" />
                    <title>Bootstrap Admin html Template : Master - WebThemez</title>
                    <link href="../../assets/css/bootstrap.css" rel="stylesheet" />
                    <link href="../../assets/css/font-awesome.css" rel="stylesheet" />
                    <link href="../../assets/css/custom-styles.css" rel="stylesheet" />
                    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
                    <link href="../../assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
                </Helmet>
                <nav className="navbar navbar-default top-navbar" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html"><strong>Kayak</strong></a>

                    </div>

                    <ul className="nav navbar-right">

                            <a href="/">Sign Out</a>

                    </ul>
                </nav>

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

                <div id="page-wrapper" >


                    <div id="page-inner">


                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Communities
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>Community</th>
                                                    <th>Admin Contact</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    test
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

    )
    }
}

export default FullPage;