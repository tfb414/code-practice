import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ComponentGround extends Component {
    render(){
        return (
            <View style={styles.groundContainer}>
                <View style={styles.ground}/>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    groundCountainer: {
        flex: 1,
        alignItems: 'flex-start'

    },
    ground: {
        
        width: 100,
        height: 100,
        backgroundColor: 'white'
    }
});


export default ComponentGround;