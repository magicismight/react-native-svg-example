import React, { Component } from 'react';
import {
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import All from './components/all';

import Svg, {
    Circle,
    Rect,
} from 'react-native-svg';

import Anim from "./components/anim";

let { width, height } = Dimensions.get('window');
width -= 25;

const shadow = require('./components/shadow-min.png');

class RNSvgTests extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <Anim width={width} height={height} />
        <All
          View={View}
          width={width}
          height={height}
          native={true}
          shadow={shadow}
        />
      </ScrollView>
    );
  }
}

const icon = (
  <Svg height="20" width="20">
    <Circle cx="10" cy="10" r="8" stroke="blue" strokeWidth="1" fill="green" />
    <Rect
      x="4"
      y="4"
      width="12"
      height="12"
      stroke="red"
      strokeWidth="1"
      fill="yellow"
    />
  </Svg>
);

const samples = [RNSvgTests];

export { icon, samples };
