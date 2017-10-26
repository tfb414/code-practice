import React from 'react'
import { Icon } from 'react-native-elements'
import { View, StyleSheet, Text } from 'react-native'

export const Time = (props) => {
    return (
        <View style={styles.iconContainer}>

            <Icon style={styles.timeIcon}
                name='hourglass'
                type='font-awesome'
                color='#fff'
                size={30}

            />
            <Text style={styles.headerText}>{props.time}</Text>
        </View>

    )

}

export const Score = (props) => {
    return (
        <View style={styles.iconContainer}>

            <Icon style={styles.timeIcon}
                name='trophy'
                type='font-awesome'
                color='#fff'
                size={30}

            />
            <Text style={styles.headerText}>{props.score}</Text>
        </View>

    )
}

export const Lives = (props) => {
    livesDisplay = [];

    const lives = (lives) => {
        var i;
        for (i = 0; i < props.lives; i++) {
            livesDisplay.push(
                <Icon style={styles.timeIcon}
                    name='male'
                    type='font-awesome'
                    color='#fff'
                    size={30}
                />
            )
        }
    }
    lives(props.lives)


    return (
        <View style={styles.iconContainer}>
            {livesDisplay}
        </View>
    )
}
const styles = {
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'grey',
        // justifyContent: "space-around",
        alignItems: 'center',
        padding: 15,
        // height: 80,
    },
    headerText: {
        fontSize: 25,
        marginLeft: 10,
        color: 'white'
    },

}

export default Time
{/* <i class="fa fa-hourglass" aria-hidden="true"></i> */ }
