import React from 'react';
import setHead from 'react-document-head';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/custom-styles.css';
import {Helmet} from 'react-helmet';

class Header extends React.Component{
    render(){
        //setHead({})
        return(
            <div>
                <nav className="navbar navbar-default top-navbar" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html"><strong>Kayak</strong></a>

                    </div>

                    <ul className="nav navbar-top-links navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li>
                                    <a href="SignUp"><i className="fa fa-user fa-fw"></i>Sign Out</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;