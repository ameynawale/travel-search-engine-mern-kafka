
import React from 'react';
import PropTypes from 'prop-types';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import icon from './icon.png';

class Pay extends React.Component{

    static propTypes = {
        hotelRequested: PropTypes.array.hotelRequested,
        hotelDetails: PropTypes.array.hotelDetails,
        makePayment: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state={
            hotelID: this.props.hotelDetails.ID,
            guestCount: this.props.hotelRequested.guestCount,
            roomCount: this.props.hotelRequested.roomCount,
            fromDate: this.props.hotelRequested.fromDate,
            toDate: this.props.hotelRequested.toDate,
            billAmount: this.props.hotelDetails.bill_amount,
            cardNo: '',
            location: this.props.hotelRequested.city,
            hotelName: this.props.hotelRequested.hotelName,
            cardOwner: ''
        }

    }




    /*state= {
        hotels: [
            {
                hotelName: "Downtown Mariot",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                roomCount: '1',
                hotelPrice: '$159',
                hotelStar: '4',
                hotelRating: '8',
                username: 'first@last.com'
            },

        ]
    }

    componentWillMount(){
        this.setState({
            // hotelName: this.props.hotels.hotelName
        })
    }
*/
    render(){
        return(
            <div className="App-welcome">
                <div className="container-fluid">
                    <nav className="navbar" style={{"width": "1350px", "paddingLeft": "0px"}}>



                        <div style={{"position": "absolute", "zIndex": 10, "margin": "auto", "width": "100%", "padding": "10px", "backgroundColor": "black" }}>




                            <a href="/"  className="Kayak-logo" title="HOME"><img src={logo} className="App-logo" alt="logo" /></a>


                            <nav>
                                <div className="navWide">
                                    <div className="wideDiv">
                                        <a href="/hotels" className=" Hotels text-white" > <h4>Hotels</h4> </a>
                                        <a href="/flights" className= "Flights text-white" > <h4>Flights</h4> </a>
                                        <a href="/cars" className= "Cars text-white" > <h4>Cars</h4> </a>
                                        <a className= "Packages text-white" href="#"> <h4>Packages</h4> </a>
                                        <a className= "Rentals text-white" href="#"> <h4>Rentals</h4> </a>
                                        <a className= "Cruisers text-white" href="#"> <h4>Cruisers</h4> </a>
                                        <a className= "dropdown-container text-white" href="#"> <h4>More</h4> </a>

                                        <span>
                                  <img src={icon} alt="icon" className="iconImage" />


                                        </span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </nav>

                    <div className="dashboard3">



                        <div className="container-fluid1">

                            <div className="creditCardForm">
                                <div className="heading">
                                    <h1>Confirm Purchase</h1>
                                </div>
                                <div className="payment">
                                    <form>
                                        <div className="form-group owner">
                                            <label for="owner">Owner</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                label="cardOwner"
                                                placeholder="Name on Card"
                                                value={this.state.cardOwner}
                                                onChange={(event) => {
                                                    this.setState({
                                                        cardOwner: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="form-group CVV">
                                            <label for="cvv">CVV</label>
                                            <input type="text" className="form-control" id="cvv"/>
                                        </div>
                                        <div className="form-group" id="card-number-field">
                                            <label for="cardNumber">Card Number</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                label="cardOwner"
                                                placeholder="Card Number"
                                                value={this.state.cardNo}
                                                onChange={(event) => {
                                                    this.setState({
                                                        cardNo: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="form-group" id="expiration-date">
                                            <label>Expiration Date</label>
                                            <select>
                                                <option value="01">January</option>
                                                <option value="02">February </option>
                                                <option value="03">March</option>
                                                <option value="04">April</option>
                                                <option value="05">May</option>
                                                <option value="06">June</option>
                                                <option value="07">July</option>
                                                <option value="08">August</option>
                                                <option value="09">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                            <select>
                                                <option value="16"> 2016</option>
                                                <option value="17"> 2017</option>
                                                <option value="18"> 2018</option>
                                                <option value="19"> 2019</option>
                                                <option value="20"> 2020</option>
                                                <option value="21"> 2021</option>
                                            </select>
                                        </div>
                                        <div className="form-group" id="credit_cards">
                                            <img src={require('../../images/visa.jpg')} id="visa"/>
                                                <img src={require('../../images/mastercard.jpg')} id="mastercard"/>
                                                    <img src={require('../../images/amex.jpg')} id="amex"/>
                                        </div>
                                        <div className="form-group" id="pay-now">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                onClick={() => this.props.makePayment(this.state)}>
                                                Confirm Payment
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>






                            <div className="footer">


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        )
    }
}

export default Pay;
