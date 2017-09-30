import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    style
} from 'react-native';



const NextLevel = (props) => {
    //but a button in here that takes a function that changes the state in app.js
    return (
        <View style={styles.container}>
            <Text>You did it! </Text>
            <TouchableHighlight onPress={props.nextLevel}>
                <View><Text style={styles.welcome}>Next Level</Text></View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0000',
        margin: 50
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    },
});

export default NextLevel;
