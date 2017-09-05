import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentCount: 0
        }
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <p>{this.state.currentCount}</p>
                <button onClick={this._addToCount}>Add</button>
                <button onClick={this._subtractFromCount}>Subtract</button>
            </div>
        );
    }

    _addToCount = () => {
        let newCount = this.state.currentCount + 1;
        this.setState({
            currentCount: newCount
        });
    }

    _subtractFromCount = () =>{
        let newCount = this.state.currentCount - 1;
        this.setState({
            currentCount: newCount
        })
    }

}

export default Counter;
