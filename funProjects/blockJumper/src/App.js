
//include the score header between levels, also change the message when they run out of time.

//add better looks
//fix game over screen
//add title
//color scheme - 5ABC97(grene) EF814C(orange) F5C766(yellow) white 104471(blue)
//add pause button
//figure out the sizing of the buttons on each screen
//also see if you want to have background color, color of the text, and written color
//add highscore
//fix button on android
//add shapes and colors to game

//you can also do shapes with the word of the shapes
//you can also do color shape and the word at the same time


//things I've done
//when they run out of time they should lose a life
//updated the ui of the header
//two columns of answers
//basic procedurally generated levels
//time aspect
//make it so procedurally generated have a certain number of right and wrong answers
//when they click an option it gives a green check or a red x if it is correct or incorrect
//fix error in criteria 2 where there are more than one correct answer but it moves on to the next page
//styled the out of time page




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
    measureView(event) {
        console.log(event.nativeEvent.layout.height)
        this.setState({

            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width,
        })
    }


    render() {
        console.log(this.state.height)
        return (
            <View style={[styles.container, { width: this.state.width, height: this.state.height }]} onLayout={(event) => this.measureView(event)}>
                {renderIf(this.state.active.menu)(<Menu startGame={this._goToLevel} height={this.state.height} />)}
                {renderIf(this.state.active.level)(<Level score={this.state.score} ranOutOfTime={this._ranOutOfTime} lives={this.state.lives} level={this._createLevel} onRemoveLife={this._removeLife} onGameOver={this._goToGameOver} onNextLevel={this._goToNextLevel} addScore={(score) => { this._addScore(score) }} />)}
                {renderIf(this.state.active.NextLevel)(<NextLevel nextLevel={this._goToLevel} level={this.state.level} height={this.state.height} />)}
                {renderIf(this.state.active.ranOutOfTime)(<RanOutOfTime nextLevel={this._goToLevel} height={this.state.height} />)}
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
            lives: (this.state.lives - 1),
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#5ABC97',

        // borderRadius: 30,
        // color: '#ffffff',


    }
})


