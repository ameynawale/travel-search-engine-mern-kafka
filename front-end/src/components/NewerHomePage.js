import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from './user/Login';
//import Message from "./Message";
import Welcome from "./user/Welcome";
import Signup from './user/Signup';
import Flights from './user/Flights';
import ViewFlight from './user/ViewFlight';
import PayFlight from './user/PayFlight';
import ConfirmationFlight from './user/ConfirmaitonFlight';
import Pay from './user/Pay';

import Cars from './user/Cars';
import CarListDisplay from './user/CarListDisplay';
import ViewCar from './user/ViewCar';
import PayCar from './user/PayCar';
import ConfirmationCar from './user/ConfirmationCar';

import Hotels from './user/Hotels';
import ViewHotel from './user/ViewHotel';
import HotelListDisplay from './user/HotelListDisplay';
import ConfirmationHotel from './user/ConfirmationHotel';

import FlightListDisplay from './user/FlightListDisplay';

import ReactiveGrid from  './admin/ReactiveGrid';
import AddFlight from "./admin/AddFlight";
import AddHotel from "./admin/AddHotel";
import AddCar from "./admin/AddCar";
import SearchFlight from "./admin/SearchFlight";
import SearchHotel from "./admin/SearchHotel";
import SearchCar from "./admin/SearchCar";
import EditHotel from "./admin/EditHotel";
import SearchBill from "./admin/SearchBill";
import EditCar from "./admin/EditCar";
import FlightDetails from "./admin/FlightDetails";
import HotelDetails from "./admin/HotelDetails";
import CarDetails from "./admin/CarDetails";
import EditFlight from "./admin/EditFlight";
import AdminDashboard from './admin/AdminDashboard';

import ListingSaveSuccess from './admin/ListingSaveSuccess';

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
        flightDetailsAdmin: '',
        hotelDetailsAdmin: '',
        carDetailsAdmin: '',
        hotelList: '',
        hotelDetails: '',
        hotelRequested: '',

        carList: '',
        carDetails: '',
        carRequested: '',

        flightList: '',
        flightDetailsUser: '',
        flightRequested: '',
        flightDetails: '',

        paymentDetails: ''
    };

    searchListing = (listingDetails) => {

                //if (res.status === 201) {

                    if(listingDetails.isSearchFlight){
                        API.searchListingFlight(listingDetails)
                            .then((res) => {
                                this.setState({
                                    flightDetailsAdmin: res.file
                                });
                                this.props.history.push("/admin/flights/flightDetails");
                            })
                    }

                    else if(listingDetails.isSearchHotel){
                        API.searchListingHotel(listingDetails)
                            .then((res) => {
                                this.setState({
                                    hotelDetailsAdmin: res.file
                                });
                                this.props.history.push("/admin/hotels/hotelDetails");
                            })
                    }

                    else if(listingDetails.isSearchCar){
                        API.searchListingCar(listingDetails)
                            .then((res) => {
                                this.setState({
                                    carDetailsAdmin: res.file
                                });
                                this.props.history.push("/admin/cars/carDetails");
                            })
                    }
                     //   this.props.history.push("/admin/flights/flightDetails/editPage");
                //} else if (res.status === 401) {
                  /*  this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
*/

    };

    editListing = (listingDetails) => {

        //if (res.status === 201) {

        if(listingDetails.isSearchFlight){
            API.searchListingFlight(listingDetails)
                .then((res) => {
                    this.setState({
                        flightDetailsAdmin: res.file
                    });
                    this.props.history.push("/admin/flights/editFlight");
                })
        }

        else if(listingDetails.isSearchHotel){
            API.searchListingHotel(listingDetails)
                .then((res) => {
                    this.setState({
                        hotelDetailsAdmin: res.file
                    });
                    this.props.history.push("/admin/hotels/editHotel");
                })
        }

        else if(listingDetails.isSearchCar){
            API.searchListingCar(listingDetails)
                .then((res) => {
                    this.setState({
                        carDetailsAdmin: res.file
                    });
                    this.props.history.push("/admin/cars/editCar");
                })
        }
        //   this.props.history.push("/admin/flights/flightDetails/editPage");
        //} else if (res.status === 401) {
        /*  this.setState({
              isLoggedIn: false,
              message: "Wrong username or password. Try again..!!"
          });
*/

    };


    saveListing = (listingDetails) => {

        //if (res.status === 201) {

        if(listingDetails.isSearchFlight){
            API.updateFlight(listingDetails)
                .then((res) => {
                    this.props.history.push("/admin/ListingSaveSuccess");
                })
        }

        else if(listingDetails.isSearchHotel){
            API.updateHotel(listingDetails)
                .then((res) => {
                    this.props.history.push("/admin/ListingSaveSuccess");
                })
        }

        else if(listingDetails.isSearchCar){
            API.updateCar(listingDetails)
                .then((res) => {
                    this.props.history.push("/admin/ListingSaveSuccess");
                })
        }
        //   this.props.history.push("/admin/flights/flightDetails/editPage");
        //} else if (res.status === 401) {
        /*  this.setState({
              isLoggedIn: false,
              message: "Wrong username or password. Try again..!!"
          });
*/

    };


    getAdminDashboard = () => {
        API.getDashboardDetails()
            .then((res) => {
                //if (res.status === 201) {
                this.setState({
                    dashboardDetails: res.message
                });
                this.props.history.push("/admin/dashboard");
                //} else if (res.status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
*/
            });
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
                    this.props.history.push("/hotels");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };


    searchCar = (searchCriteria) => {
        API.getCar(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    carList: res.message,
                    carRequested:{
                        location: res.location,
                        startDate: res.startDate,
                        endDate: res.endDate,
                        seatCount: res.seatCount
                    }
                });
                this.props.history.push("/CarListDisplay");
                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
            });

    };

    searchHotel = (searchCriteria) => {
        API.getHotel(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                    this.setState({
                        hotelList: res.file,
                        hotelRequested:{
                            city: res.city,
                            fromDate: res.fromDate,
                            toDate: res.toDate,
                            guestCount: res.guestCount,
                            roomCount: res.roomCount
                        }
                    });
                this.props.history.push("/HotelListDisplay");
                    //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                  /*  this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }*/
            });

    };

    viewDeal = (searchCriteria) => {
        API.getHotelDetails(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    hotelDetails: res.file,
                    hotelRequested: res.hotelRequested
                });
                this.props.history.push("/ViewHotel");
                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
            });
        //this.props.history.push("/ViewHotel");
    };

    viewDealCar = (searchCriteria) => {
        API.getCarDetails(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    carDetails: res.results,
                    carRequested: res.carRequested
                });
                this.props.history.push("/ViewCar");
                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
            });
        //this.props.history.push("/ViewHotel");
    };

    viewDealFlight = (searchCriteria) => {
        API.getFlightDetails(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    flightDetails: res.file,
                    flightRequested: res.flightRequested
                });
                this.props.history.push("/ViewFlight");
                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
            });
        //this.props.history.push("/ViewHotel");
    };


    bookHotel = (searchCriteria) => {
        API.doBookHotel(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    hotelDetails: res.hotelDetails,
                    hotelRequested: res.hotelRequested
                });
                this.props.history.push("/Pay");
                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
            });
        //this.props.history.push("/ViewHotel");
    };

    bookCar = (searchCriteria) => {
        API.doBookCar(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    carDetails: res.carDetails,
                    carRequested: res.carRequested
                });
                this.props.history.push("/payCar");
                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
            });
        //this.props.history.push("/ViewHotel");
    };

    bookFlight = (searchCriteria) => {
        API.doBookFlight(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    flightDetails: res.flightDetails,
                    flightRequested: res.flightRequested
                });
                this.props.history.push("/payFlight");
                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
            });
        //this.props.history.push("/ViewHotel");
    };


    makePayment = (paymentDetails) => {
        API.doPayment(paymentDetails)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    paymentDetails: {
                        bookingID: res.file.bookID,
                        billAmount: res.file.billAmount,
                    }
                });
                this.props.history.push("/confirmationHotel");

            });
        //this.props.history.push("/ViewHotel");
    };

    makePaymentCar = (paymentDetails) => {
        API.doPaymentCar(paymentDetails)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    paymentDetails: {
                        bookingID: res.results.bookID,
                        billAmount: res.billAmount,
                    }
                });
                this.props.history.push("/confirmationCar");

            });
        //this.props.history.push("/ViewHotel");
    };

    makePaymentFlight = (paymentDetails) => {
        API.doPaymentFlight(paymentDetails)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    paymentDetails: {
                        bookingID: res.file.bookID,
                        billAmount: res.price,
                    }
                });
                this.props.history.push("/confirmationFlight");

            });
        //this.props.history.push("/ViewHotel");
    };


    searchFlight = (searchCriteria) => {
        API.getFlight(searchCriteria)
            .then((res) => {
                //if (status === 201) {
                this.setState({
                    flightList: res.file,
                    flightRequested:{
                        fromCity: res.fromCity,
                        toCity: res.toCity,
                        departureDate: res.departureDate,
                        returnDate: res.returnDate,
                        seatType: res.seatType,
                        passengerCount: res.passengerCount
                    }
                });
                this.props.history.push("/FlightListDisplay");
                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
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
    				this.props.history.push('/');
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
                        <Login handleSubmit={this.handleSubmit}/>
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <div>
                        <Welcome/>
                    </div>
                )}/>
                <Route exact path="/signup" render={() => (
                    <div>
                        <Signup handleSignUp={this.handleSignUp}/>
                    </div>
                )}/>

                <Route exact path="/flights" render={() => (
                    <div>
                        <Flights searchFlight={this.searchFlight}/>
                    </div>
                )}/>
                <Route exact path="/hotels" render={() => (
                    <div>
                        <Hotels searchHotel={this.searchHotel}/>
                    </div>
                )}/>
                <Route exact path="/HotelListDisplay" render={() => (
                    <div>
                        <HotelListDisplay hotelList={this.state.hotelList} viewDeal={this.viewDeal} hotelRequested={this.state.hotelRequested}/>
                    </div>
                )}/>
                <Route exact path="/ViewHotel" render={() => (
                    <div>
                        <ViewHotel hotelDetails={this.state.hotelDetails} hotelRequested={this.state.hotelRequested} bookHotel={this.bookHotel}/>
                    </div>
                )}/>
                <Route exact path="/FlightListDisplay" render={() => (
                    <div>
                        <FlightListDisplay flightList={this.state.flightList} viewDealFlight={this.viewDealFlight}  flightRequested={this.state.flightRequested}/>
                    </div>
                )}/>
                <Route exact path="/ViewFlight" render={() => (
                    <div>
                        <ViewFlight flightDetails={this.state.flightDetails} flightRequested={this.state.flightRequested} bookFlight={this.bookFlight}/>
                    </div>
                )}/>

                <Route exact path="/cars" render={() => (
                    <div>
                        <Cars searchCar={this.searchCar}/>
                    </div>
                )}/>
                <Route exact path="/CarListDisplay" render={() => (
                    <div>
                        <CarListDisplay carList={this.state.carList} viewDealCar={this.viewDealCar} carRequested={this.state.carRequested}/>
                    </div>
                )}/>
                <Route exact path="/ViewCar" render={() => (
                    <div>
                        <ViewCar carDetails={this.state.carDetails} carRequested={this.state.carRequested} bookCar={this.bookCar}/>
                    </div>
                )}/>

                <Route exact path="/pay" render={() => (
                    <div>
                        <Pay hotelRequested={this.state.hotelRequested} hotelDetails={this.state.hotelDetails} makePayment={this.makePayment}/>
                    </div>
                )}/>

                <Route exact path="/payCar" render={() => (
                    <div>
                        <PayCar carRequested={this.state.carRequested} carDetails={this.state.carDetails} makePayment={this.makePaymentCar}/>
                    </div>
                )}/>
                <Route exact path="/payFlight" render={() => (
                    <div>
                        <PayFlight flightRequested={this.state.flightRequested} flightDetails={this.state.flightDetails} makePayment={this.makePaymentFlight}/>
                    </div>
                )}/>

                <Route exact path="/confirmationCar" render={() => (
                    <div>
                        <ConfirmationCar paymentDetails={this.state.paymentDetails}/>
                    </div>
                )}/>
                <Route exact path="/confirmationHotel" render={() => (
                    <div>
                        <ConfirmationHotel paymentDetails={this.state.paymentDetails}/>
                    </div>
                )}/>
                <Route exact path="/confirmationFlight" render={() => (
                    <div>
                        <ConfirmationFlight paymentDetails={this.state.paymentDetails}/>
                    </div>
                )}/>

                <Route exact path="/Login" render={() => (
                    <div>
                       {/* <Login handleSubmit={this.handleSubmit}/>
                        <Message message={this.state.message}/>*/}
                        <Login />
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome handleLogout={this.handleLogout} username={this.state.username} firstName={this.state.firstName} lastName={this.state.lastName} password={this.state.password}/>
                )}/>
                
                <Route exact path='/admin/flights/addFlight' render={() => (
                        <div>
                            <AddFlight getAdminDashboard={this.getAdminDashboard}/>
                        </div>
                    )
                    }/>
                <Route exact path='/admin/reports' render={() => (
                        <div>
                            <ReactiveGrid/>
                        </div>
                    )
                    }
                />
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
                            <SearchHotel searchListing={this.searchListing}/>
                        </div>
                    )
                    }/>
                    <Route exact path='/admin/cars/searchCar' render={() => (
                        <div>
                            <SearchCar searchListing={this.searchListing}/>
                        </div>
                    )
                    }/>
                <Route exact path='/admin/flights/editFlight' render={() => (
                        <div>
                            <EditFlight flightDetails={this.state.flightDetailsAdmin} saveListing={this.saveListing}/>
                        </div>
                    )
                    }/>
                    <Route exact path='/admin/hotels/editHotel' render={() => (
                        <div>
                            <EditHotel hotelDetails={this.state.hotelDetailsAdmin} saveListing={this.saveListing}/>
                        </div>
                    )
                    }/>
                <Route exact path='/admin/cars/editCar' render={() => (
                        <div>
                            <EditCar carDetails={this.state.carDetailsAdmin} saveListing={this.saveListing}/>
                        </div>
                    )
                    }/>
                    <Route exact path='/admin/bills/searchBill' render={() => (
                        <div>
                            <SearchBill/>
                        </div>
                    )
                    }/>
                <Route exact path='/admin/flights/flightDetails' render={() => (
                        <div>
                            <FlightDetails flightDetails={this.state.flightDetailsAdmin} editListing={this.editListing}/>
                        </div>
                    )
                    }/>
                <Route exact path='/admin/hotels/hotelDetails' render={() => (
                        <div>
                            <HotelDetails hotelDetails={this.state.hotelDetailsAdmin} editListing={this.editListing}/>
                        </div>
                    )
                    }/>
                    <Route exact path='/admin/cars/carDetails' render={() => (
                            <div>
                                <CarDetails carDetails={this.state.carDetailsAdmin} editListing={this.editListing}/>
                            </div>
                        )
                        }/>
                        <Route exact path='/admin/flights/editFlight' render={() => (
                            <div>
                                <EditFlight flightDetails={this.state.flightDetailsAdmin} saveListing={this.saveListing}/>
                            </div>
                        )
                        }/>
                    <Route exact path='/admin/hotels/editHotel' render={() => (
                            <div>
                                <EditHotel hotelDetails={this.state.hotelDetailsAdmin} saveListing={this.saveListing}/>
                            </div>
                        )
                        }/>
                        <Route exact path='/admin/cars/editCar' render={() => (
                            <div>
                                <EditCar carDetails={this.state.carDetailsAdmin} saveListing={this.saveListing}/>
                            </div>
                        )
                        }/>
                        <Route exact path='/admin/ListingSaveSuccess' render={() => (
                            <div>
                                <ListingSaveSuccess/>
                            </div>
                        )
                        }/>
                    <Route exact path='/admin/dashboard' render={() => (
                            <div>
                                <AdminDashboard dashboardDetails={this.state.dashboardDetails}/>
                            </div>
                        )
                        }/>
                </div>
        );
    }
}

export default withRouter(NewerHomePage);