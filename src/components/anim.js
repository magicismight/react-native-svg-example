import React from 'react';

import { Animated, Dimensions } from 'react-native';
// Use import Svg from 'react-native-svg' if you are not using Expo
import Svg, { G, Path } from 'react-native-svg';

const A = {
  Svg: Animated.createAnimatedComponent(Svg),
  G: Animated.createAnimatedComponent(G),
  Path: Animated.createAnimatedComponent(Path),
};

let { width } = Dimensions.get('window');
width -= 25;

export default class SvgExample extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 15, // Animate to opacity: 1 (opaque)
        duration: 5000, // Make it take a while
        //useNativeDriver: true
      },
    ).start(); // Starts the animation
    this.state.fadeAnim.addListener(({ value }) => {
      this._view.setNativeProps({ strokeWidth: `${value}` });
    });
  }

  render() {
    return (
      <Svg viewBox="-100 -100 200 200" width={width} height={width}>
        <Path
          fill="#F7931E"
          stroke="#000"
          strokeWidth="2"
          d="M-100,0 L100,0z M0,-100 L0,100z"
        />
        <A.Path
          ref={view => {
            this._view = view;
          }}
          fill="#F7931E"
          stroke="#000"
          strokeWidth="1"
          d="M36.9 23.6c0-4.07-1.32-7.34-4-9.8-2.7-2.5-6.24-3.75-10.6-3.75H1.74v57.9l18.58-.02c6.3 0 11.3-1.5 15-4.48 3.67-3 5.5-7.06 5.5-12.15 0-4.15-1.12-7.43-3.38-9.84l-.42-.42c-2.27-2.15-5.55-3.55-9.84-4.2 3.27-1.34 5.72-3.13 7.36-5.34 1.6-2.22 2.4-4.85 2.4-7.9zm-21.68 8.7v-11h2.52c1.85 0 3.24.43 4.16 1.28.9.84 1.37 2.1 1.37 3.77 0 1.86-.58 3.3-1.73 4.37-1.2 1.06-2.8 1.6-4.82 1.6h-1.5zm0 10.75h4.34c2.14 0 3.92.6 5.36 1.85 1.43 1.22 2.15 2.85 2.15 4.9 0 2-.7 3.64-2.1 4.9-1.43 1.25-3.23 1.87-5.4 1.87H15.2V43.05z"
        />
      </Svg>
    );
  }
}
