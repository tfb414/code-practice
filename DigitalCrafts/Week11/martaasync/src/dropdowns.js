import React, { Component } from 'react';



class Dropdowns extends Component{
    constructor(props){
        super(props);
        
    }

    
    

    render(){
        console.log(this.props.destinations);

        let destinationDropdown = this.props.destinations.map((data, idx)=>{
            return (<option key={idx} value={data}>{data}</option>)
        })

        // let directionDropdown = this._direction().map((data, idx)=>{
        //     return (<option key={idx} value={data}>{data}</option>)
        // })

        // let lineDropdown = this._lines().map((data, idx)=>{
        //     return (<option key={idx} value={data}>{data}</option>)
        // })

        let destinationDropdownRender = ()=>{
            return (
            <div>
                <label>
                    <select>
                        {destinationDropdown}
                    </select>
                </label>
            </div>  
            )
        }
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
        // return (
        //     <div>
        //         {destinationDropdownRender()}
        //         {directionDropdownRender()}
        //         {linesDropdownRender()}
        //     </div>
        // );
        return(
            <div>
                {destinationDropdownRender()}
            </div>
        )
    }

    
}

export default Dropdowns