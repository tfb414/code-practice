import React, { Component } from 'react';
import PropTypes from "prop-types";

class Spaceship extends Component{
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node.isRequired
    };
    render(){
        const { name, children } = this.props;
        
        const creaturesOnboard = children.map((child, idx) =>{
            if (child.type.name === "CrewMember") {
                return (child);
            } else {
                return (
                <div className="alert-alert">
                    {child}
                </div>);
            }
        });
        
        return (
            <div>
                <h1>
                    { name }
                </h1>
                {creaturesOnboard}
            </div>
        );
        
    }
}

export default Spaceship;