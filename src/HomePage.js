import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let allOPtions=['ז','ח','ט','י','יא','יב'];

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      name:""
    }
  }

  handleChange =(event)=>{
    this.setState({name:event.target.value});
  }
  render() {
   
    return (
      <div className="screen">
        <div> ברוכים הבאים</div>
        <h1> הטעמה בין תלמידים לעבודה יותר טובה</h1>
        <select id="name"  cvalue={this.state.name} onChange={this.handleChange}>

          <option className="option"></option>
          {allOPtions.map((currentname, index) =>
          (<option key={index} value={currentname}>{currentname}</option>))
          }

        </select>
      </div>
    );
  }
}

export default HomePage;