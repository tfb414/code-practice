import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ComponentSquare extends Component {
    render(){
        return (
            <View style={styles.square}/>
        )
    }
};


const styles = StyleSheet.create({
    square: {
        flex: 1,
        alignItems: 'flex-end',
        width: 60,
        height: 60,
        backgroundColor: 'red'
    }
})


export default ComponentSquare;