import React from 'react';
import PropTypes from 'prop-types';
import {Link,Route,withRouter,Switch} from 'react-router-dom';
import logo from './logo.png';
import icon from './icon.png';
import ReactNativeSlider from 'react-html5-slider';

class CarListDisplay extends React.Component{

    static propTypes = {
        carList: PropTypes.array.carList,
        carRequested: PropTypes.array.carRequested,
        viewDealCar: PropTypes.func.isRequired
    };


    constructor(props){
        super(props);
        this.state = {
            cars: this.props.carList.message,
            carRequested: this.props.carRequested
        };
    }
    /*  constructor(props){
          super(props);
          this.state={
              hotelName: this.props.hotels.hotelName

          };
      }*/

    /*static propTypes = {
        hotels: PropTypes.array.isRequired
    };*/

    /*  state={
          hotelName:''
      }
  */
    state= {
        hotelListing: ["1","4","6","8","10","5"],
        arrayDisplay:[2,4,6,8,10],
        database: [2,4,6,8,10],
        checkbox_hotels: 1,
        currentValue: '',
        step: '',
        min: '',
        max: '',
        changeValue: '',
    /*    hotels: [
            {

                hotelName: "Downtown Mariot",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                roomCount: '1',
                hotelPrice: '$159',
                hotelStar: '4',
                hotelRating: '1',
                username: 'first@last.com'
            },
            {
                hotelName: "Downtown Hayat",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                roomCount: '1',
                hotelPrice: '$259',
                hotelStar: '5',
                hotelRating: '8',
                username: 'first@last.com'
            }
        ],
    */    array_display:[
            {
                image: '../../images/htl1.jpg',
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
            {
                image: '../../images/htl1.jpg',
                hotelName: "Downtown Hayat",
                city: "sj",
                fromDate: '15-11-2017',
                toDate: '17-11-2017',
                guestCount: '2',
                roomCount: '1',
                hotelPrice: '$259',
                hotelStar: '5',
                hotelRating: '8',
                username: 'first@last.com'
            }
        ]
    }

    /*sortedList()
    {
        var array_used_for_sorting =[];
        var hotel_flag=false;

        this.state.hotels.map((databse,index) =>{

            // Filter Condition for AIRLINES
            var array =this.state.hotelListing;


            //duration = new Date("01/01/2007 " + flights.flights.flight_arrival).getHours() - new Date("01/01/2007 " + flights.flights.flight_departure).getHours();

            for (var i=0;i<array.length;i++) {
                if (array[i] === databse.hotelRating) {
                    hotel_flag = true;

                }
            }

            if (hotel_flag) {
                hotel_flag = false;
                array_used_for_sorting.push(databse);
            }
        });

        this.setState({
            array_display: array_used_for_sorting,
            /!*currentValue: '',
            step: '10',
            min: '100',
            max: '1000',
            changeValue: ''*!/
        });
    }
*/
    /*  for(var i=0; i< this.hotelListing.length; i++)
      {
          if(this.state.hotelListing[i]== this.state.database[i])
          {
              this.state.hotelListing[i].push(this.arrayDisplay);
          }
      }
  }*/

    /*componentWillMount(){
        this.setState({
            hotelName: this.props.hotels.hotelName
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

                        <div className="col-sm-2" style={{color: "black"}}>

                            <h2><b><u> Top Filters </u></b></h2>

                            {/*<ReactNativeSlider
                                value={this.state.currentValue}
                                handleChange={this.state.changeValue}
                                step={this.state.step}
                                max={this.state.max}
                                min={this.state.min}
                                name="myslider"
                                disabled="disabled"
                            />*/}

                            {/*<ReactNativeSlider
                                value={this.state.currentValue}
                                handleChange={this.state.changeValue}
                                step={this.state.step}
                                max={this.state.max}
                                min={this.state.min}
                                name="myslider"
                                disabled="disabled"
                            />*/}



                            <h3>Price</h3>
                            <div className="initalPrice" style={{marginTop: "10px"}}>
                                <input type="number" name="priceInitial" id="InputId" placeholder="Minimum Price" defaultValue="0"/>
                            </div>
                            <div className="finalPrice" style={{marginTop: "5px"}}>
                                <input type="number" name="priceInitial" id="InputId" placeholder="Maximum Price" defaultValue="1000"/>
                            </div>
                            <h3>Car Types</h3>

                            <div className="check">
                                <input type="checkbox" value="Air India" defaultChecked onClick={(event) => {

                                    if ( this.state.checkbox_hotels === 1){
                                        var temp = this.state.hotelListing;
                                        var index = temp.indexOf(event.target.value);
                                        temp.splice(index,1);
                                        console.log(temp);
                                        // this.setState(Object.assign({},this.state,{airlines:temp}),this.flights(null,null));
                                        // temp ****

                                        this.setState({
                                            hotelListing: temp
                                        });

                                        this.setState({
                                            checkbox_hotels: 0
                                        });


                                    }
                                    else
                                    {
                                        var temp = this.state.hotelListing;
                                        temp.push(event.target.value);
                                        console.log(temp);
                                        // this.setState(Object.assign({},this.state,{airlines:temp}),this.flights(null,null));

                                        this.setState({
                                            hotelListing: temp
                                        });

                                        this.setState({
                                            checkbox_hotels: 1
                                        });

                                    }
                                    this.sortedList()
                                }}/><b>SUV</b>
                            </div>
                            <div className="check">
                                <input type="checkbox" value="JetBlue" defaultChecked/><b>Sedan</b>
                            </div>
                            <div className="check">
                                <input type="checkbox" value="United Airlines" defaultChecked/><b>Sports</b>
                            </div>
                            <div className="check">
                                <input type="checkbox" value="Delta Airlines" defaultChecked/><b>Hashback</b>
                            </div>
                            <div className="check">
                                <input type="checkbox" value="Virgin America" defaultChecked/><b>Lemo</b>
                            </div>


                        </div>


                        <div className="col-sm-7" style={{ "display": "flex", color: "black"}}>
                            <div className="Container">
                                <div className="sort">
                                    <a href="#">

                                        <span className="glyphicon glyphicon-sort-by-attributes-alt" value="Sort" style={{float: "right"}}>Sort</span>
                                    </a>
                                </div>
                            </div>

                            <div className="dashboard1">

                                {this.state.cars.map((cars,i) =>

                                    <div className="panel panel-default">
                                        <img src={require('../../images/htl1.jpg')} alt="" className="hotelImage" style={{marginLeft: "5px", width:"180px", marginTop: "35px"}}/>

                                        <div className="text-default">

                                            <h3> {this.state.cars[i].carName}- {this.state.cars[i].carType}</h3>
                                        </div>
                                        <div className="text-default">
                                            <h4> Where: {this.state.cars[i].location} at {this.state.cars[i].location} </h4>

                                            <h4> Car Type: {this.state.cars[i].carType} </h4>

                                            <span className="glyphicon">&#xe008; {this.state.cars[i].ratings}</span>&nbsp;&nbsp;&nbsp;
                                            <span className="glyphicon">&#xe139; {this.state.cars[i].ratings}</span>&nbsp;&nbsp;&nbsp;
                                            <span className="glyphicon">&#xe043;&nbsp;{this.state.cars[i].ratings}</span>


                                            <h4>{this.state.cars[i].price}</h4>
                                            <h5>{this.props.carRequested.seatCount}</h5>
                                        </div>
                                        <button className="searchbtn2 btn-search"
                                                type="button"
                                                style={{marginLeft: "180px"}}
                                                onClick={() => this.props.viewDealCar(
                                                    {
                                                        carID: this.state.cars[i].carID,
                                                        carRequested: this.props.carRequested
                                                    })}
                                        >
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

export default CarListDisplay;