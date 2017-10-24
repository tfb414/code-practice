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
        let level = this.props.level();

        this._createLevelFromProps(level);
        this._createBoxStates(level[0]);


    }
    componentDidMount() {

        this.countdown = setInterval(() => {

            if (this.state.time === 0) {
                clearInterval(this.countdown)
            }
            console.log(this.state.time);
            this._updateTimer();

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }
    render() {
        let allBoxes = this.state.boxes.map((key, idx) => {

            return this._createBox(idx, key);
        })
        return (
            <View style={styles.container}>
                <Header title={"Color Clicker!"} time={this.state.time} score={this.state.score} lives={this.props.lives} />
                <Goal title={this.state.criteria} />
                <View onLayout={(event) => this.measureView(event)} style={styles.boxContainer}>
                    {allBoxes}
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
            time: this.props.time
        })
    }

    _numberOfTrue = (level) => {
        let derp = level.filter((thing) => {
            return thing[2] === true;
        })
        console.log('this number of true is: ' + derp.length);
        return derp.length;
    }


    _createBoxStates = (level) => {

        let newBox = []
        console.log(level)
        level.forEach((key, idx) => {

            let isItTrue = level[idx][2];
            let theColor = level[idx][1];
            let whatIsTheText = level[idx][0];

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
            boxHeight: (height - 80 - 40) / level.length,
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
        console.log(this.state.score);
        console.log(this.props.score);
        console.log(this.state.numberOfTrue);
        if (this.state.score == (this.props.score + this.state.numberOfTrue)) {
            console.log('true')
            this.props.addScore(this.state.score);
            this.props.onNextLevel();
        }

    }


    _removeBox = (boxId) => {
        let startingBoxState = [...this.state.boxes];
        startingBoxState[boxId][boxId].visible = false;
        singleBox = startingBoxState[boxId][boxId];
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
            this.props.ranOutOfTime();
        }
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