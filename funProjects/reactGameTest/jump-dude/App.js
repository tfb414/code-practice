import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import Avatar from './avatar/avatar';
import Ground from './elements/ground';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jump: false,
    }
  }

  colorChange = () => {
    const color = this.state.avatarColor === 'red' ? 'blue' : 'red';
    this.setState({ avatarColor: color });
    console.log(this.state.avatarColor);
  };

  toggleJump = () => {
    this.setState({jump: !this.state.jump})
  }

  spriteAction =  () => {
    console.log('teststselkfjalksdjfalksjdflkaj');
}
  render() {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={this.toggleJump}>
          <View>
            <Avatar jump={this.state.jump}></Avatar>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
