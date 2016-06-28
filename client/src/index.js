'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles/common';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <TouchableOpacity style = {[styles.flex1, styles.layoutCenter]}>
        <Icon name = "play-circle-filled" size = {50} color = "#2ecc71" />
      </TouchableOpacity>
    )
  }
}

export default App;
