import React, { Component } from 'react';



class Dropdowns extends Component{
    constructor(props){
        super(props);
        
    }

    
    

    render(){

        let destinationDropdown = this._derpstinations("DESTINATION").map((data, idx)=>{
            return (<option key={idx} value={data}>{data}</option>)
        })

        let directionDropdown = this._derpstinations("DIRECTION").map((data, idx)=>{
            return (<option key={idx} value={data}>{data}</option>)
        })

        let lineDropdown = this._derpstinations("LINE").map((data, idx)=>{
            return (<option key={idx} value={data}>{data}</option>)
        })

        let DropdownRender = ()=>{
            return (
            <div>
                <label>
                    <select>
                        {destinationDropdown}
                    </select>
                </label>
                <label>
                    <select>
                        {directionDropdown}
                    </select>
                </label>
                <label>
                    <select>
                        {lineDropdown}
                    </select>
                </label>
            </div>  
            )
        }
        
      
        return(
            <div>
                {DropdownRender()}
            </div>
        )
    }

    _derpstinations = (dataFromMarta)=>{
        let holding = new Set()
        this.props.martaData.forEach((data)=>{
            if(data[dataFromMarta] !== ""){
                holding.add(data[dataFromMarta]);
            }
        })
        return Array.from(holding).sort();
        
    }
}

export default Dropdowns