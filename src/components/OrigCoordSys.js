import React from 'react';
import Svg, { G, Line, Defs, Rect, Path, Text, TextPath, TSpan } from 'svgs';

// <Line x1="0" y1="110" x2="400" y2="110" />
export default ({ width, height, native }) => (
  <Svg
    width={width}
    height={width * 150 / 400}
    version="1.1"
    viewBox="0 0 400 150"
  >
    <G fill="none" stroke="black" strokeWidth="3">
      <Line x1="0" y1="1.5" x2="400" y2="1.5" />
      <Line x1="1.5" y1="0" x2="1.5" y2="150" />
    </G>
    <G>
      <Text x="30" y="30" fontSize={20} fontFamily="AvenirNextLTPro-Regular">
        ABC (orig coord system)
      </Text>
    </G>

    <Rect
      x="0"
      y="0"
      width="398"
      height="150"
      fill="none"
      stroke="blue"
      strokeWidth="1"
    />
  </Svg>
);
