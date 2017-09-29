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

export default class blockJumper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            lives: 10,
            active: {
                menu: true,
                level: false,
                gameOver: false
            }

        }


    }



    render() {
        console.log(this.state.lives + "live from new york")
        let numberOfBoxes = [['red', "blue", true], ['red', "green", false], ['yellow', "blue", true], ['black', "purple", false]]
        let criteria = "click all words colored blue"

        return (
            <View>
                {renderIf(this.state.active.menu)(<Menu startGame={this._startGame} />)}
                {renderIf(this.state.active.level)(<Level time={10} score={this.state.score} lives={this.state.lives} level={numberOfBoxes} criteria={criteria} onWrong={this._removeLife} />)}

                {/* <Level time={10} score={this.state.score} lives={this.state.lives} level={numberOfBoxes} criteria={criteria} onWrong={this._removeLife} /> */}
            </View >
        );

    }
    _removeLife = () => {
        console.log('confirmed: lives going down')
        this.setState({
            lives: this.state.lives - 1
        }, () => { console.log(this.state.lives + 'lives') })
    }

    _startGame = () => {
        this.setState({
            active: {
                menu: false,
                level: true
            }
        })
    }

    


    //https://facebook.github.io/react-native/docs/navigation.html

}



