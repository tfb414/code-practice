import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Button from 'react-native-button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Block Jumper</Text>
        {/* <Button onPress={startGame()}>Start</Button> */}
      </View>
    );
  }
}

const startGame = () => {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    color: 'white',
    fontSize: 30
  }
});
