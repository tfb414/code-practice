import React from 'react';
import { StyleSheet, View, Button, Alert, TouchableHighlight } from 'react-native';

export default class Avatar extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: 'red'
        }
    }

    colorChange = () => {
        const color = this.state.backgroundColor === 'red' ? 'black' : 'red';
        this.setState({ backgroundColor: color })
    };

    render() {
        return (
            <TouchableHighlight onPress={this.colorChange}>
                <View style={[styles.avatar, { backgroundColor: this.state.backgroundColor }]} />
            </TouchableHighlight >
        );
    }

}
const styles = StyleSheet.create({
    avatar: {
        height: 50,
        width: 50,
    }
});


