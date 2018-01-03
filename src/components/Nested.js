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
    <G transform="translate(50,90)">
      <G fill="none" stroke="red" strokeWidth="3">
        <Line x1="0" y1="0" x2="50" y2="0" />
        <Line x1="0" y1="0" x2="0" y2="50" />
      </G>
      <Text x="0" y="0" fontSize={16} fontFamily="AvenirNextLTPro-Regular">
        ....Translate(1)
      </Text>
      <G transform="rotate(-45)">
        <G fill="none" stroke="green" strokeWidth="3">
          <Line x1="0" y1="0" x2="50" y2="0" />
          <Line x1="0" y1="0" x2="0" y2="50" />
        </G>
        <Text x="0" y="0" fontSize={16} fontFamily="AvenirNextLTPro-Regular">
          ....Rotate(2)
        </Text>
        <G transform="translate(130,160)">
          <G fill="none" stroke="blue" strokeWidth="3">
            <Line x1="0" y1="0" x2="50" y2="0" />
            <Line x1="0" y1="0" x2="0" y2="50" />
          </G>
          <Text x="0" y="0" fontSize={16} fontFamily="AvenirNextLTPro-Regular">
            ....Translate(3)
          </Text>
        </G>
      </G>
    </G>
  </Svg>
);
