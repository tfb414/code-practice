import React from 'react';
import { StyleSheet, View, Button, Alert, TouchableHighlight } from 'react-native';

export default class Avatar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={[styles.avatar, { backgroundColor: this.props.avatarColor }]} />
        );
    }

}
const styles = StyleSheet.create({
    avatar: {
        height: 50,
        width: 50,
    }
});


