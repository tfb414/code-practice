import React, { Component } from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';


let {height, width} = Dimensions.get('window');
console.log(height);



export default class Box extends Component {
    
   


    render(){
        return(
            <View>
                <View style={[styles.box, 
                    {
                        backgroundColor: "white",
                        width: this.props.width,
                        height: this.props.height
                    }
                ]}>
                    <Text style={[styles.text, {color: this.props.color}]}>{this.props.boxText}</Text>
                </View>
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