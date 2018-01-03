import React from 'react';

import {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Text,
  TSpan,
  TextPath,
  Use,
} from 'svgs';

export default ({ width, height, native }) => (
  <Svg
    height={width * 300 / 1000}
    width={width}
    version="1.1"
    viewBox="0 0 1000 300"
  >
    <Defs>
      <Path
        id="MyPath4"
        d="M 100 125
             C 150 125 250 175 300 175
             C 350 175 450 125 500 125
             C 550 125 650 175 700 175
             C 750 175 850 125 900 125"
      />
    </Defs>
    <Use href="#MyPath4" fill="none" stroke="red" />
    <Text fill="blue" fontFamily="AvenirNextLTPro-Regular" fontSize={60}>
      <TextPath href="#MyPath4">Choose shame or get war</TextPath>
    </Text>
    <Rect
      height="298"
      width="998"
      fill="none"
      stroke="blue"
      strokeWidth="2"
      x="1"
      y="1"
    />
  </Svg>
);
