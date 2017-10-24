//when they run out of time they should lose a life
//include the score header between levels, also change the message when they run out of time.
//when they click the wrong thing it should draw a red line through it
//two columns of answers


//you can also do shapes with the word of the shapes
//you can also do color shape and the word at the same time


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
import { levelCreator } from './utility/levelCreator'

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
        return (
            <View>
                {renderIf(this.state.active.menu)(<Menu startGame={this._goToLevel} />)}
                {renderIf(this.state.active.level)(<Level score={this.state.score} ranOutOfTime={this._ranOutOfTime} lives={this.state.lives} level={this._createLevel} onRemoveLife={this._removeLife} onGameOver={this._goToGameOver} onNextLevel={this._goToNextLevel} addScore={(score) => { this._addScore(score) }} />)}
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

    _createLevel = () => {
        // return [['red', "blue", true], ['red', "green", false], ['yellow', "blue", true], ['black', "purple", false]]
        return levelCreator(this.state.level);
        // let criteriaType = ['Click all words that are the same color as the word', 'click all the words that are not the same color as the word', 'click all the words that are colored '];
        // let colors = ['blue', 'red', 'black', 'brown', 'yellow', 'purple', 'orange'];



    }




    //https://facebook.github.io/react-native/docs/navigation.html

}



