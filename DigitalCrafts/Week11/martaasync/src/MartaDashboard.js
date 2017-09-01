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

        // let destinationDropdown = this._destinations().map((data, idx)=>{
        //     return (<option key={idx} value={data}>{data}</option>)
        // })

        // let directionDropdown = this._direction().map((data, idx)=>{
        //     return (<option key={idx} value={data}>{data}</option>)
        // })

        // let lineDropdown = this._lines().map((data, idx)=>{
        //     return (<option key={idx} value={data}>{data}</option>)
        // })

        // let destinationDropdownRender = ()=>{
        //     return (
        //     <div>
        //         <label>
        //             <select>
        //                 {destinationDropdown}
        //             </select>
        //         </label>
        //     </div>  
        //     )
        // }
        // let directionDropdownRender = ()=>{
        //     return (
        //         <div>
        //             <label>
        //                 <select>
        //                     {directionDropdown}
        //                 </select>
        //             </label>
        //         </div>  
        //     )
        // }
        // let linesDropdownRender = ()=>{
        //     return (
        //         <div>
        //             <label>
        //                 <select>
        //                     {lineDropdown}
        //                 </select>
        //             </label>
        //         </div>  
        //     )
        // }
        
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
              <Dropdowns destinations={this._destinations()}/>
              <div>
                
                {/* {martaOutput} */}
              </div>
            </div>
        )
    }
    _destinations = ()=>{
        let destinations = new Set()
        this.state.martaData.forEach((data)=>{
            if(data.DESTINATION !== ""){
                destinations.add(data.DESTINATION);
            }
        })
        return Array.from(destinations).sort();
        
    }

    _direction = ()=>{
        let direction = new Set()
        this.state.martaData.forEach((data)=>{
            direction.add(data.DIRECTION)
        })
        return Array.from(direction).sort();
    }

    _lines = ()=>{
        let lines = new Set()
        this.state.martaData.forEach((data)=>{
            lines.add(data.LINE)
        })
        return Array.from(lines).sort();
    }
    
}

export default MartaDashboard;


/*

*/