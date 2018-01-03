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
    height={width * 300 / 1000}
    width={width}
    version="1.1"
    viewBox="0 0 1000 300"
  >
    <Text fill="blue" fontFamily="AvenirNextLTPro-Regular" fontSize={55}>
      <TSpan x="250" y="150" rotate="-30,0,30">
        Hello, out there
      </TSpan>
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
