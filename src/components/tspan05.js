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

export default ({ width, height }) => (
  <Svg
    height={width * 120 / 500}
    width={width}
    version="1.1"
    viewBox="0 0 500 120"
  >
    <Text
      fontFamily="AvenirNextLTPro-Regular"
      fontSize={32}
      fill="red"
      x="40"
      y="40"
      rotate="5,15,25,35,45,55"
    >
      Not{' '}
      <TSpan id="child1" rotate="-10,-20,-30,-40" fill="orange">
        all characters{' '}
        <TSpan id="child2" rotate="70,60,50,40,30,20,10" fill="yellow">
          in <TSpan id="child3">the</TSpan>
        </TSpan>
        <TSpan id="child4" fill="orange" x="40" y="90">
          text
        </TSpan>
        have a
      </TSpan>
      <TSpan id="child5" rotate="-10" fill="blue">
        specified
      </TSpan>
      rotation
    </Text>
    <Rect
      height="118"
      width="498"
      fill="none"
      stroke="blue"
      strokeWidth="2"
      x="1"
      y="1"
    />
  </Svg>
);
