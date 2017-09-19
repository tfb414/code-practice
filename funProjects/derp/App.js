import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ComponentSquare from './components/ComponentSquare'
import ComponentGround from './components/ComponentGround'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
        <ComponentSquare />
        {/* <ComponentGround /> */}
        
        {/* <Button
          onPress={startGame}
          title="Start"
          color="grey"
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </View>
    );
  }
}

const startGame = () => {
  
  }

const styles = StyleSheet.create({
  container: {
    flex: .9,
    backgroundColor: 'black',
    
  },
  title: {
    color: 'white',
    fontSize: 30
  }
});
