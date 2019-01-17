import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route} from "react-router-dom";
import HomePage from "./HomePage";


class App extends Component {
  
  render() {
   
    return (
      <div className="App">

      <Router>
     
          <Route  exact path="/"  Component={HomePage}/>
          </Router>
      </div>
    );
  }

}
export default App;
