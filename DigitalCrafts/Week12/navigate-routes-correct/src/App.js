import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, 
    Route, 
    Switch, 
    Link 
} from 'react-router-dom';


import Derp from './Derp.js'
import Merp from './Merp.js'
import Yarr from './Yarr.js'

const navs = [
  <Derp />,
  <Merp />,
  <Yarr />
];

const navNames = [
  "Derp",
  "Merp",
  "Yarr"
];

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentNav: 0
    }
  }

  render() {
    const componentToRender = navs[this.state.currentNav];
    // const myNavs = navs.map((comp, idx)=>(
    //   <li><a href="#" onClick={(event)=>{
    //     event.preventDefault();
    //     this._changeNav(idx)
    //   }} >{navNames[idx]}</a></li>
    // ))

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to DerpTown</h2>
        </div>
        
          
        {/* <ul>
          <li><a href="#" onClick={(event)=>{
              event.preventDefault();
              this._changeNav(0)
            }} >Derp</a></li>
          <li><a href="#" onClick={(event)=>{
            event.preventDefault();
            this._changeNav(1)
          }} >Merp</a></li>
          <li><a href="#" onClick={(event)=>{
              event.preventDefault();
              this._changeNav(2)
            }} >Yarrr</a></li>
        </ul> */}
        {/* <ul>
          {myNavs}
        </ul> */}
          <BrowserRouter>
            <div>

              <ul>
                <li>
                  <Link to='/'>Go to Derp</Link>
                </li>
                <li>
                  <Link to='/merp'>Go to Merp</Link>
                </li>
                <li>
                  <Link to='/Yarr'>Go to Yarr</Link>
                </li>
              </ul>
              <Switch>
                <Route exact path="/" component={Derp}/>
                <Route path="/merp" component={Merp}/>
                <Route path="/yarr" component={Yarr}/>
                <Route render = {()=>(
                  <p>Page not found: no derp derp derp</p>
                  )}/>
              </Switch>
            </div>
            
          </BrowserRouter>
        {/* {componentToRender} */}
      </div>
    );
  }
  _changeNav = (navValue) => {

    console.log(`You did it! You clicked!  ${navValue}`)
    this.setState({
      currentNav: navValue
    })
  }
}

export default App;
