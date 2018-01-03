import React from 'react';
import Svg, { G, Line, Defs, Rect, Path, Text, TextPath, TSpan } from 'svgs';

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
    <G transform="translate(50,50)">
      <G fill="none" stroke="red" strokeWidth="3">
        <Line x1="0" y1="0" x2="50" y2="0" stroke="red" />
        <Line x1="0" y1="0" x2="0" y2="50" />
      </G>
      <Text x="30" y="30" fontSize={20} fontFamily="AvenirNextLTPro-Regular">
        ABC (translated coord system)
      </Text>
    </G>
  </Svg>
);
