import React from 'react';
import PropTypes from 'prop-types';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import icon from './icon.png';

class HotelListDisplay extends React.Component{


    static propTypes = {
        hotelList: PropTypes.array.hotelList,
        hotelRequested: PropTypes.array.hotelRequested,
        viewDeal: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            hotels: this.props.hotelList.message,
            hotelRequested: this.props.hotelRequested
        };
    }

  /*  state={
        hotelName:''
    }
*/
    state= {
        hotelListing: ["1","4","6","8","10","5"],
        arrayDisplay:[2,4,6,8,10],
        database: [2,4,6,8,10],
        checkbox_hotels: 1,
        /*hotels: [
            {

                hotelName: "Downtown Mariot",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                room: '1',
                amount: '$159',
                starHotel: '4',
                ratings: '1',
                username: 'first@last.com'
            },
            {
                hotelName: "Downtown Hayat",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                roomCount: '1',
                amount: '$259',
                starHotel: '5',
                ratings: '8',
                username: 'first@last.com'
            }
        ],
*/
        array_display:[
            {
                image: '../../images/htl1.jpg',
                hotelName: "Downtown Mariot",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                roomCount: '1',
                amount: '$159',
                starHotel: '4',
                ratings: '8',
                username: 'first@last.com'
            },
            {
                image: '../../images/htl1.jpg',
                hotelName: "Downtown Hayat",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                roomCount: '1',
                amount: '$259',
                starHotel: '5',
                ratings: '8',
                username: 'first@last.com'
            }
        ]
    }

sortedList()
{
    var array_used_for_sorting =[];
    var hotel_flag=false;

    this.state.hotels.map((databse,index) =>{

        // Filter Condition for AIRLINES
        var array =this.state.hotelListing;


        //duration = new Date("01/01/2007 " + flights.flights.flight_arrival).getHours() - new Date("01/01/2007 " + flights.flights.flight_departure).getHours();

        for (var i=0;i<array.length;i++) {
            if (array[i] === databse.ratings) {
                hotel_flag = true;

            }
        }

            if (hotel_flag) {
                hotel_flag = false;
                array_used_for_sorting.push(databse);
            }
            });

             this.setState({
                 array_display: array_used_for_sorting
            });
        }

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

                                {/*//modal needs to be added, signin and signup linking to be done*/}
                                        </span>
                        </div>
                    </div>
                </nav>
            </div>
                </nav>

                </div>




           <div className="dashboard1" style={{"backgroundColor": "#e4e5ea", width:"100%", marginTop: "15px", "display": "flex"  }}>
               <div className="container-fluid">



                   <div className="col-sm-7" style={{ "display": "flex", color: "black"}}>
                       <div className="Container">
                       <div className="sort">
                       <a href="#">

                            <span className="glyphicon glyphicon-sort-by-attributes-alt" value="Sort" style={{float: "right"}}>Sort</span>
                       </a>
                       </div>
                       </div>

                       <div className="dashboard1">

                           {this.state.hotels.map((hotels,i) =>

                           <div className="panel panel-default">
                           <img src={require('../../images/htl1.jpg')} alt="" className="hotelImage" style={{marginLeft: "5px", width:"180px", marginTop: "35px"}}/>

                               <p><h2>{this.state.hotels[i].hotelName}</h2>
                                   <h5> Star: {this.state.hotels[i].starHotel}</h5>
                                   <h4> Reviews: {this.state.hotels[i].ratings}/10</h4>
                               </p>
                               <h4>{this.state.hotels[i].amount}</h4>
                           <button className="searchbtn1 btn-search" type="button"
                                   onClick={() => this.props.viewDeal(
                                       {
                                           hotelID: this.state.hotels[i].hotelID,
                                           hotelRequested: this.props.hotelRequested
                                       })}>
                               <h3> <span>View Deal</span> </h3>
                           </button>


                           </div>
                       )}

                       </div>
                   </div>

                       <div className="text text-default">



                       </div>

                   </div>
                   <div className="col-sm-3">

                        <div className="container-fluid">
                       <img src={require('../../images/add.jpeg')} alt="visit-image" className="add"/>

                   </div>
            </div>
            </div>
            </div>
        )
    }
}

export default HotelListDisplay;