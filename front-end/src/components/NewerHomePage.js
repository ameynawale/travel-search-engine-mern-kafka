import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from './user/Login';
//import Message from "./Message";
import Welcome from "./user/Welcome";
import Signup from './user/Signup';
import FailurePage from './FailurePage';
import ReportCity from './admin/ReportCity';
import CitywiseReport from './admin/CitywiseReport';
import ListingSuccess from './admin/ListingSuccess';

import SearchUser from './admin/SearchUser';
import UserDetails from './admin/UserDetails';
import EditUser from './admin/EditUser';

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
import AdminDashboard1 from './admin/AdminDashboard';
import AdminDashboard2 from './admin/AdminDashboard2';

import ListingSaveSuccess from './admin/ListingSaveSuccess';
import ViewBills from "./admin/ViewBills";

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
        billList: '',

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
                            if(res.value===201) {
                                this.setState({
                                    flightDetailsAdmin: res.file
                                });
                                this.props.history.push("/admin/flights/flightDetails");
                            }
                            else
                                this.props.history.push("/failurePage");
                            })
                    }

                    else if(listingDetails.isSearchHotel){
                        API.searchListingHotel(listingDetails)
                            .then((res) => {
                            if(res.value===201) {
                                this.setState({
                                    hotelDetailsAdmin: res.file
                                });
                                this.props.history.push("/admin/hotels/hotelDetails");
                            }
                            else
                                this.props.history.push("/failurePage");
                            })
                    }

                    else if(listingDetails.isSearchCar){
                        API.searchListingCar(listingDetails)
                            .then((res) => {
                            if(res.value===201) {
                                this.setState({
                                    carDetailsAdmin: res.file
                                });
                                this.props.history.push("/admin/cars/carDetails");
                            }
                            else
                                this.props.history.push("/failurePage");
                            })
                    }

                    else if(listingDetails.isSearchUser){
                        API.searchListingUser(listingDetails)
                            .then((res) => {
                            if(res.value===201) {
                                this.setState({
                                    userDetailsAdmin: res.file
                                });
                                this.props.history.push("/admin/users/userDetails");
                            }
                            else
                                this.props.history.push("/failurePage");
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
                if(res.value===201) {
                    this.setState({
                        flightDetailsAdmin: res.file
                    });
                    this.props.history.push("/admin/flights/editFlight");
                }
                else
                    this.props.history.push("/failurePage");
                })
        }

        else if(listingDetails.isSearchHotel){
            API.searchListingHotel(listingDetails)
                .then((res) => {
                if(res.value===201) {
                    this.setState({
                        hotelDetailsAdmin: res.file
                    });
                    this.props.history.push("/admin/hotels/editHotel");
                }
                else
                    this.props.history.push("/failurePage");
                })
        }

        else if(listingDetails.isSearchCar){
            API.searchListingCar(listingDetails)
                .then((res) => {
                if(res.value===201) {
                    this.setState({
                        carDetailsAdmin: res.file
                    });
                    this.props.history.push("/admin/cars/editCar");
                }
                else
                    this.props.history.push("/failurePage");
                })
        }

        else if(listingDetails.isSearchUser){
            API.searchListingUser(listingDetails)
                .then((res) => {
                if(res.value===201) {
                    this.setState({
                        userDetailsAdmin: res.file
                    });
                    this.props.history.push("/admin/users/editUser");
                }
                else
                    this.props.history.push("/failurePage");
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
                if(res.value===201)
                    this.props.history.push("/admin/ListingSaveSuccess");
                else
                    this.props.history.push("/failurePage");
                })
        }

        else if(listingDetails.isSearchHotel){
            API.updateHotel(listingDetails)
                .then((res) => {
                    if(res.value===201)
                        this.props.history.push("/admin/ListingSaveSuccess");
                    else
                        this.props.history.push("/failurePage");
                })
        }

        else if(listingDetails.isSearchCar){
            API.updateCar(listingDetails)
                .then((res) => {
                    if(res.value===201)
                        this.props.history.push("/admin/ListingSaveSuccess");
                    else
                        this.props.history.push("/failurePage");
                })
        }

        else if(listingDetails.isSearchUser){
            API.updateUser(listingDetails)
                .then((res) => {
                    if(res.value===201)
                        this.props.history.push("/admin/ListingSaveSuccess");
                    else
                        this.props.history.push("/failurePage");
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
                if (res.value === 201) {
                this.setState({
                    dashboardDetails: res.message
                });
                this.props.history.push("/admin/dashboard");
                } else if (res.value === 401) {
                  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
                    this.props.history.push("/failurePage");

            }});
    };

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((res) => {
                if (res.value=== 201) {
                    if(res.isAdmin === 0)
                        this.props.history.push("/flights");
                    else
                        this.getAdminDashboard();
                } else {
                    /*this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });*/
                    this.props.history.push("/failurePage");
                }
            });
    };


    searchCar = (searchCriteria) => {
        API.getCar(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        carList: res.message,
                        carRequested: {
                            location: res.location,
                            startDate: res.startDate,
                            endDate: res.endDate,
                            seatCount: res.seatCount,
                            carType: res.carType,
                            filter: res.filter
                        }
                    });
                    if (res.filter === 0)
                        this.props.history.push("/CarListDisplay");
                    else
                        this.props.history.push("/CarListDisplayFiltered");
                }
                else(res.value===401)
                    this.props.history.push("/failurePage");
            });

    };

    searchHotel = (searchCriteria) => {
        API.getHotel(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        hotelList: res.file,
                        hotelRequested: {
                            city: res.city,
                            fromDate: res.fromDate,
                            toDate: res.toDate,
                            guestCount: res.guestCount,
                            roomCount: res.roomCount
                        }
                    });
                    this.props.history.push("/HotelListDisplay");
                }
                else
                    this.props.history.push("/failurePage");
            });

    };

    viewDeal = (searchCriteria) => {
        API.getHotelDetails(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        hotelDetails: res.file,
                        hotelRequested: res.hotelRequested
                    });
                    this.props.history.push("/ViewHotel");
                }
                else
                    this.props.history.push("/failurePage");

            });
        //this.props.history.push("/ViewHotel");
    };

    viewDealCar = (searchCriteria) => {
        API.getCarDetails(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        carDetails: res.results,
                        carRequested: res.carRequested
                    });
                    this.props.history.push("/ViewCar");
                }
                else
                    this.props.history.push("/failurePage");
            });
        //this.props.history.push("/ViewHotel");
    };

    viewDealFlight = (searchCriteria) => {
        API.getFlightDetails(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        flightDetails: res.file,
                        flightRequested: res.flightRequested
                    });
                    this.props.history.push("/ViewFlight");
                }
                else
                    this.props.history.push("/failurePage");
            });
        //this.props.history.push("/ViewHotel");
    };


    bookHotel = (searchCriteria) => {
        API.doBookHotel(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        hotelDetails: res.hotelDetails,
                        hotelRequested: res.hotelRequested
                    });
                    this.props.history.push("/Pay");
                }
                else
                    this.props.history.push("/failurePage");
            });
        //this.props.history.push("/ViewHotel");
    };

    bookCar = (searchCriteria) => {
        API.doBookCar(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        carDetails: res.carDetails,
                        carRequested: res.carRequested
                    });
                    this.props.history.push("/payCar");
                }
                else
                    this.props.history.push("/failurePage");
            });
        //this.props.history.push("/ViewHotel");
    };

    bookFlight = (searchCriteria) => {
        API.doBookFlight(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        flightDetails: res.flightDetails,
                        flightRequested: res.flightRequested
                    });
                    this.props.history.push("/payFlight");
                }
                else
                    this.props.history.push("/failurePage");
            });
        //this.props.history.push("/ViewHotel");
    };


    makePayment = (paymentDetails) => {
        API.doPayment(paymentDetails)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        paymentDetails: {
                            bookingID: res.file.bookID,
                            billAmount: res.file.billAmount,
                        }
                    });
                    this.props.history.push("/confirmationHotel");
                }
                else
                    this.props.history.push("/failurePage");

            });
        //this.props.history.push("/ViewHotel");
    };

    makePaymentCar = (paymentDetails) => {
        API.doPaymentCar(paymentDetails)
            .then((res) => {
                if (res.value=== 201) {
                    this.setState({
                        paymentDetails: {
                            bookingID: res.results.bookID,
                            billAmount: res.billAmount,
                        }
                    });
                    this.props.history.push("/confirmationCar");
                }
                else
                    this.props.history.push("/failurePage");

            });
        //this.props.history.push("/ViewHotel");
    };

    makePaymentFlight = (paymentDetails) => {
        API.doPaymentFlight(paymentDetails)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        paymentDetails: {
                            bookingID: res.file.bookID,
                            billAmount: res.price,
                        }
                    });
                    this.props.history.push("/confirmationFlight");
                }
                else
                    this.props.history.push("/failurePage");

            });
        //this.props.history.push("/ViewHotel");
    };


    searchFlight = (searchCriteria) => {
        API.getFlight(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        flightList: res.file,
                        flightRequested: {
                            fromCity: res.fromCity,
                            toCity: res.toCity,
                            departureDate: res.departureDate,
                            returnDate: res.returnDate,
                            seatType: res.seatType,
                            passengerCount: res.passengerCount
                        }
                    });
                    this.props.history.push("/FlightListDisplay");
                }
                else
                    this.props.history.push("/failurePage");
            });

    };

    getCityReport = (searchCriteria) => {
        API.doGetCityReport(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        cityReportDetails: res.message
                    });
                    this.props.history.push("/admin/reports");
                } else if (res.value === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                    this.props.history.push("/failurePage");

                }});

    };


    searchBills = (searchCriteria) => {
        API.getBills(searchCriteria)
            .then((res) => {
                if (res.value === 201) {
                    this.setState({
                        billList: res.results.message
                    });
                    this.props.history.push("/admin/bills/ViewBillList");
                }
                else
                    this.props.history.push("/failurePage");
                });

                //this.props.history.push("/hotelListDisplay");
                //} else if (status === 401) {
                /*  this.setState({
                      isLoggedIn: false,
                      message: "Wrong username or password. Try again..!!"
                  });
              }*/
            //});

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
    			if(res.value === 201){
    				this.setState({
    					message: 'Sign Up successful! Please login!!'
    				});
    				this.props.history.push('/');
    			} else if (res.value === 401){
    				this.setState({
    					message: 'User already exists! Please try with different details!!'
    				});
                    this.props.history.push("/FailurePage");
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
            .then((res) => {
                if(res.value=== 201){
                    this.setState({
                        isLoggedIn: false
                    });
                    this.props.history.push("/");
                }
                else
                    this.props.history.push("/failurePage");
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
                        <CarListDisplay carList={this.state.carList} searchCar={this.searchCar} viewDealCar={this.viewDealCar} carRequested={this.state.carRequested}/>
                    </div>
                )}/>
                <Route exact path="/CarListDisplayFiltered" render={() => (
                    <div>
                        <CarListDisplay carList={this.state.carList} searchCar={this.searchCar} viewDealCar={this.viewDealCar} carRequested={this.state.carRequested}/>
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
                <Route exact path='/admin/entercity' render={() => (
                        <div>
                            <ReportCity getCityReport={this.getCityReport}/>
                        </div>
                    )
                    }
                />
                <Route exact path='/admin/reports' render={() => (
                    <div>
                        <CitywiseReport cityReportDetails={this.state.cityReportDetails}/>
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
                <Route exact path='/admin/users/searchUser' render={() => (
                    <div>
                        <SearchUser searchListing={this.searchListing}/>
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
                <Route exact path='/admin/users/editUser' render={() => (
                    <div>
                        <EditUser userDetails={this.state.userDetailsAdmin} saveListing={this.saveListing}/>
                    </div>
                )
                }/>
                    <Route exact path='/admin/bills/searchBill' render={() => (
                        <div>
                            <SearchBill searchBills={this.searchBills}/>
                        </div>
                    )
                    }/>
                <Route exact path='/admin/bills/ViewBillList' render={() => (
                    <div>
                        <ViewBills billList={this.state.billList}/>
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
                <Route exact path='/admin/users/userDetails' render={() => (
                    <div>
                        <UserDetails userDetails={this.state.userDetailsAdmin} editListing={this.editListing}/>
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
                                <ListingSuccess/>
                            </div>
                        )
                        }/>
                    <Route exact path='/admin/dashboard' render={() => (
                            <div>
                                <AdminDashboard dashboardDetails={this.state.dashboardDetails}/>
                            </div>
                        )
                        }/>
                <Route exact path='/listingSuccess' render={() => (
                    <div>
                        <ListingSuccess/>
                    </div>
                )
                }/>
                <Route exact path='/failurePage' render={() => (
                    <div>
                        <FailurePage/>
                    </div>
                )
                }/>
                </div>
        );
    }
}

export default withRouter(NewerHomePage);