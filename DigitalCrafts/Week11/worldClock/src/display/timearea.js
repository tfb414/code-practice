import React, { Component } from 'react';


const TimeArea = (props) => (
    <div className="time-area">
        <div className="city-name">
            {props.cityName}
        </div>
        <div className="time">
            {props.time}
        </div>
    </div>
);

export default TimeArea;