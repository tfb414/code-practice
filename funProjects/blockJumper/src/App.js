import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert
} from 'react-native';

import Box from './components/Box'
import Header from './components/Header'

let { height, width } = Dimensions.get('window');
console.log('big' + height)

let colors = ['red', 'blue', 'black', 'green', 'purple', 'orange', 'brown', "yellow"];
let numberOfBoxes = [0, 1, 2, 3]
let boxSpaceHeight = (height - 80)
let boxHeight = boxSpaceHeight / numberOfBoxes.length;
// let allBoxes = [];

export default class blockJumper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [{ 1: { text: 'dummy!' } }],
            height: "",
            width: ""
        };
        // this._createBoxStates = this._createBoxStates.bind(this);
    }

    measureView(event) {
        console.log('event properties: ', event.nativeEvent.layout.height);
        let boxHeight = event.nativeEvent.layout.height / numberOfBoxes.length

        this.setState({
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width,


        })

    }

    componentWillMount() {

        let newBox = []
        numberOfBoxes.forEach((key, idx) => {
            let color = _getRandomColor();
            boxId = idx;
            console.log(boxId)
            newBox.push({
                [boxId]: {
                    id: boxId,
                    visible: true,
                    true: "",
                    height: "",
                    color: color,
                    text: color,

                }
            })

        })
        console.log(newBox);
        this._createBoxStates(newBox);

    }







    render() {

        let allBoxes = this.state.boxes.map((key, idx) => {
            return this._createBox(idx);
        })



        return (
            <View style={styles.container}>
                <Header title={"Box Clicker!"} />
                <View onLayout={(event) => this.measureView(event)} style={styles.boxContainer}>
                    {allBoxes}
                </View>

            </View>
        );
    }

    _createBoxStates = (newBox) => {
        this.setState({
            boxes: newBox

        })

    }

    _createBox = (boxId) => {
        console.log(this.state.boxes);

        let boxText = this.state.boxes[boxId][boxId].text;
        let boxColor = this.state.boxes[boxId][boxId].color;

        return (
            <View style={{ height: boxHeight }}>
                <Box
                    boxText={boxText}
                    id={boxId}
                    color={boxColor}
                    width={width}
                    height={boxHeight}
                    onPress={() => this._removeBox(boxId)}
                />
            </View>
        );
    }

    _removeBox = (boxId) => {
        let updateBoxes = [{ ...this.state.boxes, [boxId]: {...this.state.boxes} }]
        console.log(updateBoxes);

        this.setState({
            boxes: updateBoxes
        })
        console.log(this.state.boxes)

    }

}





const _getRandomArbitrary = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

const _getRandomColor = () => {

    return colors[_getRandomArbitrary(0, colors.length)];
}






//you need to create state for each box you create. You should rewrite your box creater so that you have all of the information in the state: Text, color, width, height, etc.
//then you pass in id then within your onPress function you could do isvisibile if you wanted.








const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        height: height,
        backgroundColor: 'white'
    },
    boxContainer: {

        display: 'flex',
        flexDirection: 'column',
        height: boxSpaceHeight,

    }
});