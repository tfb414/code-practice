import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Avatar extends React.Component {
    constructor() {
        super();
    }

    render() {
        const spriteImage = this.props.jump
        ? require('../images/sprite/adventurer-jump-03.png')
        : require('../images/sprite/adventurer-idle-00.png');


        return (
            <View>
                <Image
                style={{width: 100, height: 100}}
                source={spriteImage}
                />
            </View>
        );
    }
}


