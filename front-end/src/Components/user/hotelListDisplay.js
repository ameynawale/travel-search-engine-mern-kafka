import React from 'react';
import PropTypes from 'prop-types';

class hotelListDisplay extends React.Component{

    constructor(props){
        super(props);
        this.state={
            hotelName: this.props.hotels.hotelName
        };
    }

    static propTypes = {
        hotels: PropTypes.array.isRequired
    };

  /*  state={
        hotelName:''
    }
*/
    /*componentWillMount(){
        this.setState({
            hotelName: this.props.hotels.hotelName
        })
    }
*/
    render(){
        return(
            <div>
                <p>{this.state.hotelName}</p>
            </div>
        )
    }
}

export default hotelListDisplay;