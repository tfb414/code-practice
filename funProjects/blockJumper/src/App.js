import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Box from './components/Box'
import Header from './components/Header'

let {height, width} = Dimensions.get('window');
let boxWidth = 75;
let boxHeight = 30;
let colors = ['red', 'blue', 'black', 'green', 'purple', 'orange', 'brown', "yellow"];
let boxLocations = [];
let xBoxLocations = [0]
let yBoxLocations = [0]
let numberOfBoxes = [0,1,2,3,4,5,6,7,8,9];
// let numberOfBoxes = 10;


export default class blockJumper extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: {
                // xValue:
                // yValue:
            }
        };
    }
    
    render() {
        
        
        let allBoxes = numberOfBoxes.map((key, idx)=>{
            return _createBox()
        })

        return (
        <View style={styles.container}>
            <Header title={"Box Clicker!"}/>
            {allBoxes}
        </View>
        );
    }




}
  
const _generateXValues = () => {
    return _getRandomArbitrary(0, (width-boxWidth));
}

const _generateYValues = () => {
    return _getRandomArbitrary(0,(height-(boxHeight+80)));
}

const _getRandomArbitrary = (min, max)=> {
    return parseInt(Math.random() * (max - min) + min);
}

const _getRandomColor = () => {
    
    return colors[_getRandomArbitrary(0, colors.length)];
}

const _createBox = ()=> {
    let xValue;
    let yValue;
    let newXBoxLocation = true;
    let newYBoxLocation = true;
    while(newXBoxLocation === true){
        
        xValue = _generateXValues();
        newXBoxLocation = xBoxLocations.every((element)=>{
            return _checkOverlap2(xValue, element)
            });
        
    }
    while(newYBoxLocation === true){
        
        yValue = _generateYValues();
        newYBoxLocation = yBoxLocations.every((element)=>{
            return _checkOverlap2(yValue, element)
            });
        
    }
    


     
    xBoxLocations.push(xValue);
    yBoxLocations.push(yValue);
    console.log(xBoxLocations);
    console.log(yBoxLocations);

    return (
        <Box 
        boxText = {'Box Color'}
        xValue = {xBoxLocations[xBoxLocations.length-1]} 
        yValue={yBoxLocations[yBoxLocations.length-1]} 
        color={_getRandomColor()} 
        boxWidth={boxWidth} 
        boxHeight={boxHeight}/>
    );
}

// const _checkOverlap = (currentValue, valueToCheck) => {
//     let safeRange = [(currentValue - 40), (currentValue + 40)];
//     if (safeRange[0] <= valueToCheck && valueToCheck <= safeRange[1]){
//         return false;
//     }
//     return true;
// }

const _checkOverlap2 = (value, element) => {
    let safeRange = [(element - 60), (element + 60)];
    return (safeRange[0] <= value && value <= safeRange[1])
}





const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    height: height,
    backgroundColor: 'white'
  },
});