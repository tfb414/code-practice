import React, { Component } from 'react';
import './App.css';
import Branding from './display/branding.js'
import TimeArea from './display/timearea.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentTime: (new Date()),
    }
    setInterval(()=>{
      this._updateTime(1000);
    }, 1000);
  }
  
  render() {
    
    return (
      <div className="App">
        <Branding/>
        <TimeArea cityName="Derptown, USA" time={this._displayFullTime(0)}/>
        <TimeArea cityName="Seattle, USA" time={this._displayFullTime(-3)}/>
        <TimeArea cityName="Addis Ababa" time={this._displayFullTime(7)}/>
        <TimeArea cityName="Fiji" time={this._displayFullTime(16)}/>
      </div>
    );
    
  }


  _displayHours = (offset)=>{
   return this.state.currentTime.getHours() + offset;
  }
  _displayMinutes = ()=>{
    return this.state.currentTime.getMinutes();
  }
  _displaySeconds = ()=> {
    let seconds = this.state.currentTime.getSeconds();
    if (seconds.toString().length <= 1){
      seconds = "0" + seconds;
    }
    return seconds;
  }
  _displayFullTime = (offset)=>{
    let time = " am";
    let hours = this._displayHours(offset)
    if(hours > 24){
      hours -= 24;
    }
    if (hours > 12){
      hours -= 12;
      time = " pm";
    }
    //this doesn't really work for 12:00am lol
    return  hours +":"+ this._displayMinutes() +":"+ this._displaySeconds() + time;
  }
  _updateTime = (timeDifference) =>{
      const newTime = new Date(this.state.currentTime.getTime() + timeDifference);
      this.setState({
          currentTime: newTime
      });
  }
  
}


export default App;