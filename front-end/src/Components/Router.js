import React from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Homepage from './Homepage';

class Router extends React.Component{
    render(){
        return(
            <div>
                <Route exact path="/" render={()=>(
                    <div>
                        <Homepage/>
                    </div>
                )}/>
            </div>
        )
    }
}

export default withRouter(Router);