import React, { Component } from 'react';
import "./keypad.css"

class Counter extends Component {

    render() {
        return (
            
                <div className = "calc-buttons">
                    
                    <div className = "calc-row">
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="7">7</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="8">8</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="9">9</button>
                        </div>
                    </div>
                    <div className = "calc-row">
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="4">4</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="5">5</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="6">6</button>
                        </div>
                        </div>
                    <div className = "calc-row">
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="1">1</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="2">2</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="3">3</button>
                        </div>
                        </div>
                    <div className = "calc-row">
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="0">0</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray}id="0">0</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray.bind(this)} id=".">.</button>
                        </div>
                    </div>
                    <div className = "calc-row">
                        <div className = "calc-column">
                            <button onClick={this._displayArray} id="/">/</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._displayArray}id="*">*</button>
                        </div>
                        <div className = "calc-column">
                            <button onClick={this._returnArray} id="=">=</button>
                        </div>
                    </div>
                </div>
        
        );
    }
    _displayArray = (e) =>{
        this.props.clickHandler(e.target.id)
        // this.props.clickHandler(50);
    }

    _returnArray = () =>{
        this.props.returnHandler();
    }
}

export default Counter;
