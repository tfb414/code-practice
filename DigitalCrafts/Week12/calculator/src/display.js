import React, { Component } from 'react';
import "./display.css"

class Display extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        let currentDisplay = this.props.display

        return (
            
                <div className="display-box">
                    {currentDisplay}
                </div>
        
        );
    }
}

export default Display;
