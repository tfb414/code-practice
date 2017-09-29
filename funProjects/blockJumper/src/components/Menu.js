
// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';



const Menu = (props) => {
  //but a button in here that takes a function that changes the state in app.js
  return (
    <View style={styles.container}>

      <TouchableHighlight onPress={props.startGame}><View><Text>Start</Text></View></TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
    margin: 50
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Menu;
