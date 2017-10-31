import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Header, Icon } from 'react-native-elements'

import { Time, Score, Lives } from './Icons'

const HeaderComponent = (props) => {
    const { headerContainer, headerText } = styles


    return (
        // <View style={styles.headerContainer}>
        //     <Text style={styles.headerText}>Time: {props.time}</Text>
        //     {/* <Text style={styles.headerText}>{props.title}</Text> */}
        //     <Text style={styles.headerText}> Lives: {props.lives}</Text>
        //     <Text style={styles.headerText}>Score: {props.score}</Text>
        // </View>

        <View style={styles.headerContainer}>
            <Header style={styles.headerContainer}
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={<Time time={props.time} />}
                centerComponent={<Score score={props.score} />}
                rightComponent={<Lives lives={props.lives} />}
            />
        </View>
    );
}


const styles = {
    headerContainer: {

        // flex: 1,
        display: 'flex',
        // flexDirection: 'row',
        backgroundColor: '#5ABC97',
        justifyContent: "space-around",
        justifyContent: 'center',
        // alignItems: 'center',
        height: 69,




    }
}

export default HeaderComponent;