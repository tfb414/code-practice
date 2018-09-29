import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Ground extends React.Component {
    render() {
        return (
            <View style={styles.ground} />
        );
    }
}

const styles = StyleSheet.create({
    ground: {
        backgroundColor: 'purple',
        height: 30,
        width: '100%',
    }
});