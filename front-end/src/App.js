import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Components/Router';

import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
			<Router />
		</BrowserRouter>
      </div>
    );
  }
}

export default App;
