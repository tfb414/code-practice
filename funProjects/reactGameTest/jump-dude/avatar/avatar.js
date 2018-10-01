import React from 'react';
import { StyleSheet, View, Button, Alert, TouchableHighlight } from 'react-native';

export default class Avatar extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: 'red'
        }
    }

    colorChange() {
        Alert.alert('this is not a test')
        this.setState({ backgroundColor: 'black ' })
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


