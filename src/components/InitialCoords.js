import React from 'react';
import Svg, { G, Line, Defs, Rect, Path, Text, TextPath, TSpan } from 'svgs';

export default ({ width, height, native }) => (
  <Svg
    width={width}
    height={width * 100 / 300}
    version="1.1"
    viewBox="0 0 300 100"
  >
    <G fill="none" stroke="black" strokeWidth="3">
      <Line x1="0" y1="1.5" x2="300" y2="1.5" />
      <Line x1="1.5" y1="0" x2="1.5" y2="100" />
    </G>
    <G fill="red" stroke="none">
      <Rect x="0" y="0" width="3" height="3" />
      <Rect x="297" y="0" width="3" height="3" />
      <Rect x="0" y="97" width="3" height="3" />
    </G>
    <G fontSize={14} fontFamily="AvenirNextLTPro-Regular">
      <Text x="10" y="20">
        (0,0)
      </Text>
      <Text x="240" y="20">
        (300,0)
      </Text>
      <Text x="10" y="90">
        (0,100)
      </Text>
    </G>
  </Svg>
);
