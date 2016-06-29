'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// Import the react-native-sound module
var Sound = require('react-native-sound');

import styles from './styles/common';

// Load the sound file 'music.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var music = new Sound('canghaiyishengxiao.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + music.getDuration() + 'number of channels: ' + music.getNumberOfChannels());
    // music.play();
  }
});

class App extends Component {
  constructor() {
    super();
    this.playMusic = this.playMusic.bind(this);
    this.pauseMusic = this.pauseMusic.bind(this);
  }
  state = {
    playStatus: false
  };
  playMusic() {
    this.setState({
      playStatus: true
    }, () => {
      music.play();
    });
  }
  pauseMusic() {
    this.setState({
      playStatus: false
    }, () => {
      music.pause();
    });
  }
  render() {
    return (
      <View  style = {[styles.flex1, styles.layoutCenter]}>
        <TouchableOpacity
          onPress = {() => {
            if (!this.state.playStatus) {
              this.playMusic();
            } else {
              this.pauseMusic();
            }
          }}
        >
          <Icon name = {!this.state.playStatus ? "play-circle-filled" : "pause"}size = {50} color = "#2ecc71" />
        </TouchableOpacity>
      </View>
    )
  }
}

export default App;
