import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignUp extends Component {

    static propTypes = {
        handleSignUp: PropTypes.func.isRequired
    };

    state = {
        firstName: '',
        lastName: '',
    	username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            firstName: '',
            lastName: '',
        	username: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Sign Up</h1>
                        </div>
                        
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            label="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={(event) => {
                                this.setState({
                                    firstName: event.target.value
                                });
                            }}
                        />
                    </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            label="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={(event) => {
                                this.setState({
                                    lastName: event.target.value
                                });
                            }}
                        />
                    </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="username"
                                placeholder="Email"
                                value={this.state.username}
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSignUp(this.state)}>
                                Sign Up
                            </button>
                        </div>
                    
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;