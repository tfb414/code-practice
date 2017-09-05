import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          style={styles.stretch}
          source={require('./headshot.jpg')}
        /> */}
        <Text>Hey CC!</Text>
        <Text>That was a weird error</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 50,
    height: 200
  },
});

