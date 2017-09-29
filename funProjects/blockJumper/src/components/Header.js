import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = (props) => {
    const { headerContainer, headerText } = styles

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Time: {props.time}</Text>
            {/* <Text style={styles.headerText}>{props.title}</Text> */}
            <Text style={styles.headerText}> Lives: {props.lives}</Text>
            <Text style={styles.headerText}>Score: {props.score}</Text>
        </View>
    );
}

const styles = {
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        justifyContent: "space-around",
        alignItems: 'center',
        height: 80,
    },
    headerText: {
        fontSize: 20
    }
}

export default Header;