//when they run out of time they should lose a life
//include the score header between levels, also change the message when they run out of time.
//when they click the wrong thing it should draw a line through it

//procedurally generate levels

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert

} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

import Level from './components/Level'
import Menu from './components/Menu'
import Header from './components/Header'
import renderIf from "./utility/renderIf"
import GameOver from "./components/GameOver"
import NextLevel from "./components/NextLevel"
import RanOutOfTime from './components/RanOutOfTime'

export default class blockJumper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            lives: 3,
            active: {
                menu: true,
                level: false,
                gameOver: false,
                nextLevel: false,
                ranOutOfTime: false,
            },
            level: 0,
        }
    }
    render() {
        let levelOne = [['red', "blue", true], ['red', "green", false], ['yellow', "blue", true], ['black', "purple", false]];
        let levelTwo = [['red', "red", true], ['blue', "green", false], ['yellow', "yellow", true], ['black', "purple", false]];
        let levelThree = [['red', "green", true], ['purple', "green", true], ['yellow', "yellow", false], ['green', "blue", false], ["purple", "purple", false], ['green', 'green', true]];
        let levels = [levelOne, levelTwo, levelThree]
        let levelTime = [5, 5, 10]
        let numberOfTrue = [2, 2, 3]
        let criteriaOne = "click all words colored blue";
        let criteriaTwo = "click all words that are the same color as their letters";
        let criteriaThree = "click all words colored green"
        let criteria = [criteriaOne, criteriaTwo, criteriaThree];


        return (
            <View>
                {renderIf(this.state.active.menu)(<Menu startGame={this._goToLevel} />)}
                {renderIf(this.state.active.level)(<Level time={levelTime[this.state.level]} score={this.state.score} ranOutOfTime={this._ranOutOfTime} lives={this.state.lives} level={levels[this.state.level]} criteria={criteria[this.state.level]} onRemoveLife={this._removeLife} onGameOver={this._goToGameOver} numberOfTrue={numberOfTrue[this.state.level]} onNextLevel={this._goToNextLevel} addScore={(score) => { this._addScore(score) }} />)}
                {renderIf(this.state.active.NextLevel)(<NextLevel nextLevel={this._goToLevel} />)}
                {renderIf(this.state.active.ranOutOfTime)(<RanOutOfTime nextLevel={this._goToLevel} />)}
                {renderIf(this.state.active.gameOver)(<GameOver score={this.state.score} />)}
            </View >
        );

    }
    _removeLife = () => {
        if (this.state.lives === 1) {
            this._goToGameOver();
        }
        this.setState({
            lives: this.state.lives - 1
        })
    }

    _addScore(score) {
        this.setState({
            score: score
        })
    }

    _goToLevel = () => {
        this.setState({
            active: {
                menu: false,
                level: true,
                gameOver: false,
                NextLevel: false,
                ranOutOfTime: false,
            }
        })
    }

    _goToMenu = () => {
        this.setState({
            active: {
                menu: true,
                level: false,
                gameOver: false,
                NextLevel: false,
                ranOutOfTime: false,
            }
        })



    }
    _goToGameOver = () => {
        this.setState({
            active: {
                menu: false,
                level: false,
                gameOver: true,
                NextLevel: false,
                ranOutOfTime: false,
            }
        })
    }

    _goToNextLevel = () => {
        this.setState({
            level: (this.state.level + 1),
            active: {
                menu: false,
                level: false,
                gameOver: false,
                NextLevel: true,
                ranOutOfTime: false,
            }
        })
    }

    _ranOutOfTime = () => {
        this.setState({
            level: (this.state.level + 1),
            active: {
                menu: false,
                level: false,
                gameOver: false,
                NextLevel: false,
                ranOutOfTime: true
            }

        })
    }




    //https://facebook.github.io/react-native/docs/navigation.html

}



