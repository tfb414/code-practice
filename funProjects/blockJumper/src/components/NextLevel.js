import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    style
} from 'react-native';
import { Button } from 'react-native-elements'


const NextLevel = (props) => {
    return (
        <View style={{ marginTop: props.height / 8 }}>
            <Text style={styles.welcome}>Level {props.level} Complete!</Text>
            <View style={styles.container}>
                <Button
                    raised
                    buttonStyle={{ backgroundColor: '#F5C766', borderRadius: 10 }}
                    fontSize={40}
                    textStyle={{ textAlign: 'center' }}
                    title={`Next Level`}
                    onPress={props.nextLevel}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        margin: 50
    },
    welcome: {
        fontSize: 40,
        // fontFamily: 'Lato-Bold',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        borderRadius: 30,
        backgroundColor: '#5ABC97',
    },
});

export default NextLevel;
