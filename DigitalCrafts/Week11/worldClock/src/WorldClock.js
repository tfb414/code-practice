import React, { Component } from 'react';

class WorldClock extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTime: (new Date()),
            
        }
    }


    _updateTime = (timeDifference) =>{
        const newTime = new Date(this.state.currentTime.getTime() + timeDifference);
        this.setState({
            currentTime: newTime
        });
    }
}

export default WorldClock;

