
// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  style
} from 'react-native';
import { Button } from 'react-native-elements';

// <TouchableHighlight onPress={props.startGame}>
//         <View><Text style={styles.welcome}>Start</Text></View>
//       </TouchableHighlight>



const Menu = (props) => {
  //put a button in here that takes a function that changes the state in app.js
  return (


    <View style={styles.container}>
      {/* <View style={styles.container}> */}
      <Button
        raised
        /* icon={{ name: 'home', size: 32 }} */
        buttonStyle={{ backgroundColor: '#5ABC97', borderRadius: 10 }}
        fontSize={50}
        textStyle={{ textAlign: 'center' }}
        title={`Start`}
        onPress={props.startGame}
      />
    </View>

  );
}



const styles = StyleSheet.create({
  container: {

    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#5ABC97',
    margin: 50,
    // borderRadius: 30,
    // color: '#ffffff',


  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    borderRadius: 30,
    backgroundColor: '#5ABC97',
  },
});

export default Menu;
