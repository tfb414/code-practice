
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





const Menu = (props) => {
  //put a button in here that takes a function that changes the state in app.js
  return (

    <View style={{ marginTop: props.height / 8 }}>
      <Text style={styles.welcome}> COLOR CLICKER</Text >
      <View style={styles.container}>


        <Button
          raised
          buttonStyle={{ backgroundColor: '#F5C766', borderRadius: 10 }}
          fontSize={50}
          textStyle={{ textAlign: 'center' }}
          title={`Start`}
          onPress={props.startGame}
        />
      </View>
    </View >

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
    // fontFamily: 'Lato-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    borderRadius: 30,
    backgroundColor: '#5ABC97',
  },
});

export default Menu;
