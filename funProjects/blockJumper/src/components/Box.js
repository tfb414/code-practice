import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableHighlight, Alert } from 'react-native';
import renderIf from "../utility/renderIf"
import { Button, Icon } from 'react-native-elements'



let { height, width } = Dimensions.get('window');




export default class Box extends Component {




    render() {
        let display = () => {
            if (this.props.isCorrect === true) {
                return <Icon
                    name='check-circle-o'
                    type='font-awesome'
                    color='green'
                    size={70}

                />
            }
            if (this.props.isCorrect === false) {
                return <Icon
                    name='times-circle-o'
                    type='font-awesome'
                    color='red'
                    size={70}

                />
            }
            if (this.props.isCorrect === "") {
                return <Button
                    raised
                    buttonStyle={{ backgroundColor: this.props.color, borderRadius: 10, width: 150 }}
                    fontSize={30}

                    textStyle={{ textAlign: 'center' }}
                    title={this.props.boxText}
                    onPress={this.props.onRemoveLife}
                />
            }
        }

        return (
            <View style={styles.box}>

                {display()}
            </View>

        )

    }
}

// <View style={[styles.box,
//     {
//         backgroundColor: "white",
//         width: this.props.width,
//         height: this.props.height,
//         // left: this.props.left,



//     }
//     ]}> </View >


const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',

    },
    text: {
        fontSize: 50
    }
})