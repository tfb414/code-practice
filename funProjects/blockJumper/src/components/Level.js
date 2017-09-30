import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert
} from 'react-native';


import Box from './Box'
import Header from './Header'
import Goal from './Goal'

let { height, width } = Dimensions.get('window');

//pass in the numberOfBoxes
//pass in amount of Time
//pass in score
//pass in width? or logic that in here
//pass in criteria
//current lives



let boxSpaceHeight = (height - 80 - 40)

let boxWidth = width

export default class Level extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: [{ 1: { text: 'dummy!' } }],
            boxHeight: "",
            boxWidth: "",
            time: props.time,
            score: props.score,
            level: props.level,

            height: "",
            width: "",
        };


        // this._createBoxStates = this._createBoxStates.bind(this);
    }



    measureView(event) {
        let boxHeight = event.nativeEvent.layout.height / this.state.level.length
        this.setState({
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width,

        })
    }
    componentWillMount() {
        this._createState();
        this._createBoxStates();
    }
    componentDidMount() {

        this.countdown = setInterval(() => {

            if (this.state.time === 0) {
                clearInterval(this.countdown)
            }
            this._updateTimer();

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }
    render() {
        console.log(this.props.criteria)
        let allBoxes = this.state.boxes.map((key, idx) => {
            return this._createBox(idx, key);
        })
        return (
            <View style={styles.container}>
                <Header title={"Color Clicker!"} time={this.state.time} score={this.state.score} lives={this.props.lives} />
                <Goal title={this.props.criteria} />
                <View onLayout={(event) => this.measureView(event)} style={styles.boxContainer}>
                    {allBoxes}
                </View>
            </View>
        );
    }

    _createBoxStates = () => {
        let newBox = []
        this.state.level.forEach((key, idx) => {
            let isItTrue = this.state.level[idx][2];
            let theColor = this.state.level[idx][1];
            let whatIsTheText = this.state.level[idx][0];
            boxId = idx;
            newBox.push({
                [boxId]: {
                    id: boxId,
                    visible: true,
                    true: isItTrue,
                    color: theColor,
                    text: whatIsTheText,
                }
            })

        })



        this.setState({
            boxes: newBox,
            boxHeight: (height - 80 - 40) / this.state.level.length,
        })
    }



    _createBox = (boxId, key) => {
        let boxText = this.state.boxes[boxId][boxId].text;
        let boxColor = this.state.boxes[boxId][boxId].color;
        let visible = this.state.boxes[boxId][boxId].visible;

        return (
            <View style={{ height: this.state.boxHeight }} key={boxId}>
                <Box
                    boxText={boxText}
                    id={boxId}
                    color={boxColor}
                    width={boxWidth}
                    height={this.state.boxHeight}

                    onRemoveLife={() => this._removeBox(boxId)}
                    visible={visible}
                />
            </View>
        );
    }


    _removeLife = () => {
        this.props.onRemoveLife();
    }

    _checkScore = () => {
        if (this.state.score == this.props.score + this.props.numberOfTrue) {
            this.props.addScore(this.state.score);
            this.props.onNextLevel();
        }

    }


    _removeBox = (boxId) => {
        let startingBoxState = [...this.state.boxes];
        startingBoxState[boxId][boxId].visible = false;
        singleBox = startingBoxState[boxId][boxId];
        console.log(singleBox.visible);
        if (startingBoxState[boxId][boxId].true) {


            this.setState({
                boxes: startingBoxState,
                score: (this.state.score + 1)
            }, (() => {
                this._checkScore()
            })
            )






        }
        if (!startingBoxState[boxId][boxId].true) {
            this._removeLife();

            this.setState({
                boxes: startingBoxState
            })
        }
    }
    _updateTimer = () => {
        if (this.state.time > 0) {
            this.setState({
                time: this.state.time - 1
            })
        }
        else {
            this.props.addScore(this.state.score);
            this.props.onNextLevel();
        }
    }

    _createState = () => {
        this.setState({
            time: this.props.time
        })
    }



}



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