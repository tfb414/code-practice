import React, { Component } from 'react';

import Dropdowns from './dropdowns.js'

const getMartaData = (cb)=>{
    fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
        method: 'get',
        // mode: "no-cors"
    }).then(function(response) {
        return response.json()
    }).then(function(jsonData) {
        console.log(jsonData);
        cb(jsonData)
    }).catch(function(err) {
        console.log(err);
    });
}



class MartaDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            martaData: [],
        };
    }
    componentWillMount(){
        
        this.martaDataGrabber = setInterval(()=>{
            getMartaData((jsonData)=>{
                this.setState({
                    martaData: jsonData
                })
            })
        }, 1000);  
    }
    componentWillUnmount(){
        clearInterval(this.martaDataGrabber);
    }
    render(){
        
        let martaOutput = this.state.martaData.map((data, idx)=> {            
            return(
                <div key= {idx}>
                    <div>
                        <p>{data.DESTINATION}</p>
                        {/* <p>{data.DIRECTION}</p>
                        <p>{data.EVENT_TIME}</p>
                        <p>{data.LINE}</p>
                        <p>{data.NEXT_ARR}</p>
                        <p>{data.STATION}</p>
                        <p>{data.TRAIN_ID}</p>
                        <p>{data.WAITING_SECONDS}</p>
                        <p>{data.WAITING_TIME}</p> */}
        
                    </div>
                </div>
            )}   
        )

        return (
            <div>
              <p>Marta: It's smarta (but not really)</p>
              {/* {destinationDropdownRender()}
              {directionDropdownRender()}
              {linesDropdownRender()} */}
              <Dropdowns martaData={this.state.martaData}/>
              <div>
                
                {/* {martaOutput} */}
              </div>
            </div>
        )
    }

}

export default MartaDashboard;


/*

*/