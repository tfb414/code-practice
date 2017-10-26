import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableHighlight, Alert } from 'react-native';
import renderIf from "../utility/renderIf"
import { Button, Icon } from 'react-native-elements'



let { height, width } = Dimensions.get('window');
console.log(height);



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
                    buttonStyle={{ backgroundColor: this.props.color, borderRadius: 10 }}
                    fontSize={30}

                    textStyle={{ textAlign: 'center' }}
                    title={this.props.boxText}
                    onPress={this.props.onRemoveLife}
                />
            }
        }

        return (
            <View>
                <View style={[styles.box,
                {
                    backgroundColor: "white",
                    width: this.props.width,
                    height: this.props.height,
                    // left: this.props.left,



                }
                ]}>

                    {display()}
                </View>
            </View >
        )

    }
}



const styles = StyleSheet.create({
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'grey',
    },
    text: {
        fontSize: 50
    }
})