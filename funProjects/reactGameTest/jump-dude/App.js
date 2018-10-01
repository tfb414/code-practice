import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, Alert } from 'react-native';
import Avatar from './avatar/avatar';
import Ground from './elements/ground';

export default class App extends React.Component {

  render() {
    return (

      <View style={styles.container}>
        <Avatar></Avatar>
        <Ground></Ground>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
