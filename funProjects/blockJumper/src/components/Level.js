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
import Header from './header/Header'
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
            boxes: [],
            boxHeight: "",
            boxWidth: "",
            time: 15,
            score: props.score,
            level: "",
            criteria: "",
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
        let level = this.props.level(this.props.level);

        this._createLevelFromProps(level);
        this._createBoxStates(level[0]);


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
        let leftBoxes = []
        let rightBoxes = []
        this.state.boxes.forEach((key, idx) => {
            if (idx >= (this.state.boxes.length / 2)) {
                leftBoxes.push(this._createBox(idx, key))
            }
            else {
                rightBoxes.push(this._createBox(idx, key))
            }
        })

        return (
            <View style={styles.container}>
                <Header title={"Color Clicker!"} time={this.state.time} score={this.state.score} lives={this.props.lives} />
                <Goal title={this.state.criteria} />
                <View onLayout={(event) => this.measureView(event)} style={styles.boxContainer}>
                    <View style={styles.boxContainerLeft}>
                        {leftBoxes}
                    </View>
                    <View style={styles.boxContainerRight}>
                        {rightBoxes}
                    </View>
                </View>
            </View>
        );
    }

    _createLevelFromProps = (level) => {

        let numberOfTrue = this._numberOfTrue(level[0]);


        this.setState({
            level: level[0],
            criteria: level[1],
            numberOfTrue: numberOfTrue,
            time: level[2]
        })
    }

    _numberOfTrue = (level) => {
        let derp = level.filter((thing) => {
            return thing[2] === true;
        })

        return derp.length;
    }


    _createBoxStates = (level) => {

        let newBox = []

        level.forEach((key, idx) => {

            let isItTrue = level[idx][2];
            let theColor = level[idx][1];
            let whatIsTheText = level[idx][0];

            boxId = idx;
            newBox.push({
                [boxId]: {
                    id: boxId,
                    isCorrect: "",
                    true: isItTrue,
                    color: theColor,
                    text: whatIsTheText,
                }
            })

        })



        this.setState({
            boxes: newBox,
            boxHeight: (height - 80 - 40) / level.length * 2,
        })
    }



    _createBox = (boxId, key) => {
        let boxText = this.state.boxes[boxId][boxId].text;
        let boxColor = this.state.boxes[boxId][boxId].color;
        let isCorrect = this.state.boxes[boxId][boxId].isCorrect;

        //add the styles to the view to make it space between, it needs tobe an array
        return (
            <View style={{ height: this.state.boxHeight }} key={boxId} >

                <Box
                    boxText={boxText}
                    id={boxId}
                    color={boxColor}
                    width={boxWidth / 2}
                    height={this.state.boxHeight}

                    onRemoveLife={() => this._removeBox(boxId)}
                    isCorrect={isCorrect}
                />
            </View>
        );
    }


    _removeLife = () => {
        let display;
        if (this.props.display === true) {
            console.log('true');
        }
        if (this.props.display === false) { console.log('false') }
        this.props.onRemoveLife();
    }

    _checkScore = () => {

        if (this.state.score == (this.props.score + this.state.numberOfTrue)) {

            this.props.addScore(this.state.score);
            this.props.onNextLevel();
        }

    }


    _removeBox = (boxId) => {
        let startingBoxState = [...this.state.boxes];
        startingBoxState[boxId][boxId].isCorrect = false;
        singleBox = startingBoxState[boxId][boxId];
        if (startingBoxState[boxId][boxId].true) {
            startingBoxState[boxId][boxId].isCorrect = true;

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
            this.props.ranOutOfTime();
        }
    }




}



const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        height: height,
        backgroundColor: 'white',

    },
    boxContainerLeft: {
        flex: 1,
        flexDirection: 'column',
        height: boxSpaceHeight,
        // backgroundColor: 'blue',

    },
    boxContainerRight: {

        flex: 1,
        flexDirection: 'column',
        height: boxSpaceHeight,
        // backgroundColor: 'black',
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: boxSpaceHeight,
        padding: 5,
        justifyContent: 'space-around'
        // backgroundColor: 'purple'

    }
});