import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableHighlight, Alert } from 'react-native';


let { height, width } = Dimensions.get('window');
console.log(height);



export default class Box extends Component {




    render() {
        return (
            <View>
                <View style={[styles.box,
                {
                    backgroundColor: "white",
                    width: this.props.width,
                    height: this.props.height,


                }
                ]}><TouchableHighlight onPress={this.props.onPress}>
                        <Text style={[styles.text, { color: this.props.color }]} value={this.props.id}>{this.props.boxText}</Text>
                    </TouchableHighlight>
                </View>
            </View >
        )

    }
}

// _test = () => {
//     this.props.boxText = ""
// }



const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'grey',
    },
    text: {
        fontSize: 50
    }
})