import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = (props) => {

    return (
        <View>
            <Text>
                Game Over!
            </Text>
            <Text>
                {props.score}
            </Text>

        </View>
    );
}



export default Header;