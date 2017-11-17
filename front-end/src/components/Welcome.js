import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired
    };

    state = {
    	firstName: '',
    	lastName: '',
        username : '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username : this.props.username,
            password : this.props.password,
            firstName : this.props.firstName,
            lastName : this.props.lastName
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
    }

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <div className="alert alert-warning" role="alert">
                        {this.state.username}, welcome to my App..!!
                    </div>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => this.props.handleLogout(this.state)}>
                        Logout
                    </button>
                    <div>
                        First Name	: {this.state.firstName}
                    </div>
                    <div>
                    	Last Name	: {this.state.lastName}
                    </div>
                    <div>
                    	Email 		: {this.state.username}
                    </div>
                    <div>
                    	Password 	: {this.state.password}
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;