import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';





export default class Box extends Component {
    
    render(){
        return(
            <View style={[styles.box, 
                {
                    left: this.props.xValue,
                    bottom: this.props.yValue,
                    backgroundColor: "white",
                    width: this.props.boxWidth,
                    height: this.props.boxHeight,
                }
            ]}>
                <Text style={[styles.text, {color: this.props.color}]}>{this.props.boxText}</Text>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'grey',
    },
    text:{
        
    }
})