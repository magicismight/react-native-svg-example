import React from 'react';
import Svg, { G, Line, Defs, Rect, Path, Text, TextPath, TSpan } from 'svgs';

export default ({ width, height, native }) => (
  <Svg
    width={width}
    height={width * 120 / 400}
    version="1.1"
    viewBox="0 0 400 120"
  >
    <G fill="none" stroke="black" strokeWidth="3">
      <Line x1="0" y1="1.5" x2="400" y2="1.5" />
      <Line x1="1.5" y1="0" x2="1.5" y2="120" />
    </G>
    <G transform="translate(50,30)">
      <G transform="rotate(30)">
        <G fill="none" stroke="red" strokeWidth="3">
          <Line x1="0" y1="0" x2="50" y2="0" />
          <Line x1="0" y1="0" x2="0" y2="50" />
        </G>
        <Text
          x="0"
          y="0"
          fontSize={20}
          fontFamily="AvenirNextLTPro-Regular"
          fill="blue"
        >
          ABC (rotate)
        </Text>
      </G>
    </G>
    <G transform="translate(200,40)">
      <G transform="scale(1.5)">
        <G fill="none" stroke="red" strokeWidth="3">
          <Line x1="0" y1="0" x2="50" y2="0" />
          <Line x1="0" y1="0" x2="0" y2="50" />
        </G>
        <Text
          x="0"
          y="0"
          fontSize={20}
          fontFamily="AvenirNextLTPro-Regular"
          fill="blue"
        >
          ABC (scale)
        </Text>
      </G>
    </G>
  </Svg>
);
