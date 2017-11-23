import React from 'react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/custom-styles.css';
//import '../../assets/js/dataTables.bootstrap.css';

class LeftPanel extends React.Component{
    render(){
        return(
            //<div>
                <nav className="navbar-default navbar-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">
                            <li>
                                <a href="index.html"><i className="fa fa-dashboard"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-sitemap"></i> Add Listing<span className="fa arrow"></span></a>
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
                                <a href="#"><i className="fa fa-sitemap"></i> Edit Listing<span className="fa arrow"></span></a>
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
                                <a href="index.html"><i className="fa fa-dashboard"></i> Edit User Details</a>
                            </li>
                            <li>
                                <a href="index.html"><i className="fa fa-dashboard"></i> Search Bills</a>
                            </li>
                            <li>
                                <a href="index.html"><i className="fa fa-dashboard"></i> Reports</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            //</div>
        )
    }
}

export default LeftPanel;