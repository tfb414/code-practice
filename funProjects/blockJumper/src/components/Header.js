import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'

const Header = (props) => {
    const {headerContainer, headerText} = styles

    return (
        <View style={styles.headerContainer}>
            <Text>Time: </Text>
            <Text style={styles.headerText}>{props.title}</Text>
            <Text>Score: </Text>
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
        height: 60,
        paddingTop: 15

    },
    headerText: {
        fontSize: 20
    }
}

export default Header;