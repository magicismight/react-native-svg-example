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
    height={width * 400 / 1200}
    width={width}
    version="1.1"
    viewBox="0 0 1200 400"
  >
    <Rect
      height="398"
      width="1198"
      fill="none"
      stroke="blue"
      strokeWidth="2"
      x="1"
      y="1"
    />
    <G
      fontFamily="AvenirNextLTPro-Regular"
      fontSize={60}
      fill="blue"
      stroke="red"
      strokeWidth="1"
    >
      <Text x="100" y="75">
        Normal text
      </Text>
      <Text x="100" y="165" textDecoration="line-through">
        Text{' '}
        <TSpan fill="yellow" stroke="darkgreen" textDecoration="underline">
          with{' '}
        </TSpan>
        line-through
      </Text>
      <Text x="100" y="255" textDecoration="underline">
        Underlined text
      </Text>
      <Text x="100" y="345" textDecoration="underline">
        <TSpan>One </TSpan>
        <TSpan fill="yellow" stroke="purple">
          word{' '}
        </TSpan>
        <TSpan fill="yellow" stroke="black">
          has{' '}
        </TSpan>
        <TSpan fill="yellow" stroke="darkgreen" textDecoration="underline">
          different{' '}
        </TSpan>
        <TSpan fill="yellow" stroke="blue">
          underlining
        </TSpan>
      </Text>
    </G>
  </Svg>
);
