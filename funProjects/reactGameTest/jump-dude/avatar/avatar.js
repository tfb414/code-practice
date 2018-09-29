import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Avatar extends React.Component {
    render() {
        return (
            <View style={styles.avatar} />
        );
    }

}
const styles = StyleSheet.create({
    avatar: {
        backgroundColor: 'black',
        height: 50,
        width: 50,
    }
});