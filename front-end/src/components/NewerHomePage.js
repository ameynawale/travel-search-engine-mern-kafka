import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./user/Welcome";
import SignUp from "./SignUp";
import Header from "./admin/Header";
import LeftPanel from "./admin/LeftPanel";
import FullPage from "./admin/FullPage";
import AddFlight from "./admin/AddFlight";
import AddHotel from "./admin/AddHotel";
import AddCar from "./admin/AddCar";
import SearchFlight from "./admin/SearchFlight";
import SearchHotel from "./admin/SearchHotel";
import SearchCar from "./admin/SearchCar";
import EditFlight from "./admin/EditFlight";
import EditHotel from "./admin/EditHotel";
import EditCar from "./admin/EditCar";
import FlightDetails from "./admin/FlightDetails";
import HotelDetails from "./admin/HotelDetails";
import CarDetails from "./admin/CarDetails";
import SearchBill from "./admin/SearchBill";
import Reports from "./admin/Reports";
import ReactiveGrid from  './admin/ReactiveGrid';
import Highcharts from './admin/Highcharts';
import Flights from './user/Flights';
import Cars from './user/Cars';
import Hotels from './user/Hotels';
import AddFlight1 from './user/AddFlight';

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        carID: '',
        hotelID: '',
        flightDetails: ''
    };

    searchListing = (listingDetails) => {
        API.searchListing(listingDetails)
            .then((res) => {
                //if (res.status === 201) {
                this.setState({
                    flightDetails: res.file
                });
                if(listingDetails.isSearchFlight)
                    this.props.history.push("/admin/flights/flightDetails");
                else
                    this.props.history.push("/admin/flights/flightDetails/editPage");
                //} else if (res.status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
*/
            });
    };

    /* editListing = (listingDetails) => {
         API.searchListing(listingDetails)
             .then((res) => {
                 //if (res.status === 201) {
                 this.setState({
                     flightDetails: res.file
                 });
                 this.props.history.push("/admin/flights/flightDetails/editPage");
                 //} else if (res.status === 401) {
             /!*      this.setState({
                       isLoggedIn: false,
                       message: "Wrong username or password. Try again..!!"
                   });
 *!/
             });
     };
 */
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

    /*getSearchResults = (userdata) => {
        API.getFlights(userdata)
            .then((res) => {
                if (res) {
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
    };*/

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

    /*searchBills = (userdata) => {
        API.searchBills(userdata)
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
    };*/

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
                        <Welcome/>
                    </div>
                )}/>
                <Route exact path="/flights" render={() => (
                    <div>
                        <Flights/>
                    </div>
                )}/>
                <Route exact path="/hotels" render={() => (
                    <div>
                        <Hotels/>
                    </div>
                )}/>
                <Route exact path="/cars" render={() => (
                    <div>
                        <Cars/>
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
                <Route exact path='/admin/flights/searchFlight' render={() => (
                    <div>
                        <SearchFlight searchListing={this.searchListing}/>
                    </div>
                )
                }/>
                <Route exact path='/admin/hotels/searchHotel' render={() => (
                    <div>
                        <SearchHotel/>
                    </div>
                )
                }/>
                <Route exact path='/admin/cars/searchCar' render={() => (
                    <div>
                        <SearchCar/>
                    </div>
                )
                }/>
                <Route exact path='/admin/flights/flightDetails' render={() => (
                    <div>
                        <FlightDetails flightDetails={this.state.flightDetails}/>
                    </div>
                )
                }/>
                <Route exact path='/admin/flights/flightDetails/editPage' render={() => (
                    <div>
                        <EditFlight flightDetails={this.state.flightDetails} editListing={this.editListing}/>
                    </div>
                )
                }/>
                <Route exact path='/admin/hotels/hotelDetails' render={() => (
                    <div>
                        <HotelDetails/>
                    </div>
                )
                }/>
                <Route exact path='/admin/cars/carDetails' render={() => (
                    <div>
                        <CarDetails/>
                    </div>
                )
                }/>
                <Route exact path='/admin/flights/editFlight' render={() => (
                    <div>
                        <EditFlight/>
                    </div>
                )
                }/>
                <Route exact path='/admin/hotels/editHotel' render={() => (
                    <div>
                        <EditHotel/>
                    </div>
                )
                }/>
                <Route exact path='/admin/cars/editCar' render={() => (
                    <div>
                        <EditCar/>
                    </div>
                )
                }/>
                <Route exact path='/admin/bills/searchBill' render={() => (
                    <div>
                        <SearchBill/>
                    </div>
                )
                }/>
                <Route exact path='/admin/reports' render={() => (
                    <div>
                        <ReactiveGrid/>
                    </div>
                )
                }/>
                <Route exact path='/admin/highcharts' render={() => (
                    <div>
                        <Highcharts/>
                    </div>
                )
                }/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);