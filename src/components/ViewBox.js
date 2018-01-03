import React from 'react';
import Svg, { G, Line, Defs, Rect, Path, Text, TextPath, TSpan } from 'svgs';

export default ({ width, height, native }) => (
  <Svg
    width={width}
    height={width * 1000 / 1500}
    viewBox="0 0 1500 1000"
    preserveAspectRatio="none"
    version="1.1"
  >
    <Rect
      x="0"
      y="0"
      width="1500"
      height="1000"
      fill="yellow"
      stroke="blue"
      strokeWidth="12"
    />
    <Path fill="red" d="M 750,100 L 250,900 L 1250,900 z" />
    <Text x="100" y="600" fontSize={200} fontFamily="AvenirNextLTPro-Regular">
      Stretch to fit
    </Text>
  </Svg>
);
