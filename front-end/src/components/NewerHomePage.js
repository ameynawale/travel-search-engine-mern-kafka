import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import Header from "./admin/Header";
import LeftPanel from "./admin/LeftPanel";
import FullPage from "./admin/FullPage";
import AddFlight from "./admin/AddFlight";
import AddHotel from "./admin/AddHotel";
import AddCar from "./admin/AddCar";

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: '',
        firstName: '',
        lastName: '',
        password: ''
    };

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };
    
    handleSignUp = (userdata) => {
    	API.doSignUp(userdata)
    		.then((res) => {
    			if(res.status === 201){
    				this.setState({
    					message: 'Sign Up successful! Please login!!'
    				});
    				this.props.history.push('/login');
    			} else if (res.status === 401){
    				this.setState({
    					message: 'User already exists! Please try with different details!!'
    				});
    			}
    		});
    };

    handleLogout = () => {
        console.log('logout called');
        API.logout()
            .then((status) => {
                if(status === 200){
                    this.setState({
                        isLoggedIn: false
                    });
                    this.props.history.push("/");
                }
            });
    };


    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <div>
                        <Message message="You have landed on my App !!"/>
                        <button className="btn btn-success" onClick={() => {
                            this.props.history.push("/login");
                        }}>
                            Login
                        </button><br/><br/>
                        <button className='btn btn-success' onClick={()=>{
                        	this.props.history.push("/signup");
                        }}>
                        New Users? Sign Up
                        </button>
                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome handleLogout={this.handleLogout} username={this.state.username} firstName={this.state.firstName} lastName={this.state.lastName} password={this.state.password}/>
                )}/>
                <Route exact path='/signup' render={() => (
                		<SignUp handleSignUp={this.handleSignUp}/>)	
                }/>
                <Route exact path='/admin/flights/addFlight' render={() => (
                    <div>
                        <AddFlight/>
                    </div>
                )
                }/>
                <Route exact path='/admin/hotels/addHotel' render={() => (
                    <div>
                        <AddHotel/>
                    </div>
                )
                }/>
                <Route exact path='/admin/cars/addCar' render={() => (
                    <div>
                        <AddCar/>
                    </div>
                )
                }/>
                </div>
        );
    }
}

export default withRouter(NewerHomePage);