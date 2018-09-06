import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSittingRoomLamp() {
    const url = 'http://192.168.1.83:8123/api/services/light/toggle';
    const data = {
      "entity_id": "light.sitting_room"
    };

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-ha-access': 'timlikespi',
      }
    }).then((thing) => { console.log(thing) })
  }

  testApi() {
    fetch('htthttp://192.168.1.83:8123/api/services')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      })
      .catch((err) => { console.log(err) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => { this.toggleSittingRoomLamp() }} title="Toggle Sitting Room Light"></Button>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
