import React from 'react';

import Svg, { Path, Defs, Text, TSpan, TextPath } from 'svgs';

const Label = ({ name, x, native }) => (
  <Text y="0" fontSize={10}>
    <TextPath href="#textcurve" fill="red" fontFamily="AvenirNextLTPro-Regular">
      <TSpan x={x}>{name}</TSpan>
    </TextPath>
  </Text>
);

export default ({ width, native }) => (
  <Svg width={width} height={width * 300 / 300} viewBox="0 0 300 300">
    <Defs>
      <Path
        id="textcurve"
        d="M150 50c55.23 0 100 44.77 100 100s-44.77 100-100 100S50 205.23 50 150 94.77 50 150 50"
      />
    </Defs>
    <Path
      fill="none"
      stroke="#00f"
      d="M150 50c55.23 0 100 44.77 100 100s-44.77 100-100 100S50 205.23 50 150 94.77 50 150 50"
    />
    <Label native={native} x="25" name="Test 1" />
    <Label native={native} x="180" name="Test 2" />
    <Label native={native} x="485" name="Test 3" />
  </Svg>
);
