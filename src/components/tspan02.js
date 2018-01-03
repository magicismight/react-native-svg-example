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
      <Text fill="blue" x="200" y="150">
        But you
        <TSpan dx="2em" dy="-50" fill="red">
          are
        </TSpan>
        <TSpan dy="100">a peach!</TSpan>
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
