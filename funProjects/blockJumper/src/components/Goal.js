import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Goal = (props) => {
    const { goalContainer, goalText } = styles

    return (
        <View style={styles.goalContainer}>
            <Text style={styles.goalText}>{props.title}</Text>
        </View>
    )
}

const styles = {
    goalContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: 'center',
        height: 40,

    },
    goalText: {
        fontSize: 20,
        color: 'white'
    }
}

export default Goal;