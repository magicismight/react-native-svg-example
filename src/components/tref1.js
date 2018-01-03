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

const Tref = props => <Text {...props} />;

export default ({ width, height }) => (
  <Svg
    height={width * 300 / 1000}
    width={width}
    version="1.1"
    viewBox="0 0 1000 300"
  >
    <Defs>
      <Text id="ReferencedText">Referenced character data</Text>
    </Defs>
    <Text
      fontFamily="AvenirNextLTPro-Regular"
      fill="blue"
      fontSize={45}
      x="100"
      y="100"
    >
      Inline character data
    </Text>
    <Text
      fontFamily="AvenirNextLTPro-Regular"
      x="100"
      y="200"
      fontSize={45}
      fill="red"
    >
      <Tref href="#ReferencedText" />
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
