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
console.log('big' + height)

let colors = ['red', 'blue', 'black', 'green', 'purple', 'orange', 'brown', "yellow"];
let numberOfBoxes = [0,1,2,3]
let boxSpaceHeight = (height - 80)
let boxHeight = boxSpaceHeight / numberOfBoxes.length;

export default class blockJumper extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: {
                height: ""
            },
            height: "",
            width: ""
        };
    }

    measureView(event){
        console.log('event properties: ', event.nativeEvent.layout.height);
        let boxHeight = event.nativeEvent.layout.height / numberOfBoxes.length
        
        this.setState({
            
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width,
            boxes:{
                height: boxHeight
            }
            
        })
        
    }
    
    render() {
        
        let allBoxes = numberOfBoxes.map((key, idx)=>{
            return _createBox()
        })
        console.log(allBoxes);

        return (
        <View style={styles.container}>
            <Header title={"Box Clicker!"}/>
            <View onLayout={(event) => this.measureView(event)} style={styles.boxContainer}>
                {allBoxes}
            </View>
            
        </View>
        );
    }

}
  


const _getRandomArbitrary = (min, max)=> {
    return parseInt(Math.random() * (max - min) + min);
}

const _getRandomColor = () => {
    
    return colors[_getRandomArbitrary(0, colors.length)];
}

const _createBox = () => {
   
    return (
        <View style={{height: boxHeight}}>
            <Box 
            boxText = {'derp'}
            color={_getRandomColor()}
            width={width}
            height={boxHeight}
            /> 
        </View>
    );
}







const styles = StyleSheet.create({
  container:{
    
    flexDirection: 'column',
    height: height,
    backgroundColor: 'white'
  },
  boxContainer:{

      display: 'flex',
      flexDirection: 'column',
      height: boxSpaceHeight,
      
  }
});