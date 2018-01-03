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
    <G fontFamily="AvenirNextLTPro-Regular" fontSize={45}>
      <Text fill="rgb(255,164,0)">
        <TSpan x="300 350 400 450 500 550 600 650" y="100">
          Cute and
        </TSpan>
        <TSpan x="375 425 475 525 575" y="200">
          fuzzy
        </TSpan>
      </Text>
    </G>
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
