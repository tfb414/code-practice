import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, Alert } from 'react-native';
import Avatar from './avatar/avatar';
import Ground from './elements/ground';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      avatarColor: 'red'
    }
  }

  colorChange = () => {
    const color = this.state.avatarColor === 'red' ? 'blue' : 'red';
    this.setState({ avatarColor: color });
    console.log(this.state.avatarColor);
  };

  render() {
    return (

      <TouchableHighlight style={styles.container} onPress={this.colorChange}>
        <View >
          <Avatar avatarColor={this.state.avatarColor}></Avatar>
          <Ground></Ground>
        </View>
      </TouchableHighlight>


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
