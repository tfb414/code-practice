import React, { Component } from 'react';
import PropTypes from "prop-types";



class Spaceship extends Component{
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node.isRequired,
        commanderType: PropTypes.string.isRequired
    };

    // static defaultProps = {
    //     commanderType: CrewMember({name: "", rank: ""})
    // }

    render(){
        const { 
            name, 
            children,
            commanderType
         } = this.props;
        
        
        const creaturesOnboard = children.map((child, idx) =>{
            if (child.type.name === commanderType) {
                return (child);
            } else {
                return (
                <div className="alert-alert" key={idx}>
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