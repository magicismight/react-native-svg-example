import React from 'react';
import Svg, { G, Line, Defs, Rect, Path, Text, TextPath, TSpan } from 'svgs';

export default ({ width, height, native }) => (
  <Svg
    width={width}
    height={width * 2000 / 4000}
    viewBox="0 0 4000 2000"
    version="1.1"
  >
    <Rect
      x="5"
      y="5"
      width="3990"
      height="1990"
      fill="none"
      stroke="blue"
      strokeWidth="10"
    />

    <G
      fill="blue"
      stroke="red"
      fontFamily="AvenirNextLTPro-Regular"
      fontSize={150}
    >
      <G transform="translate(400,0)">
        <Text x="-50" y="300" fill="black" stroke="none">
          Abs. units:
        </Text>
        <Rect x="0" y="400" width="4in" height="2in" strokeWidth=".4in" />
        <Rect x="0" y="750" width="384" height="192" strokeWidth="38.4" />
        <G transform="scale(2)">
          <Rect x="0" y="600" width="4in" height="2in" strokeWidth=".4in" />
        </G>
      </G>

      <G transform="translate(1600,0)">
        <Text x="-50" y="300" fill="black" stroke="none">
          Rel. units:
        </Text>
        <Rect x="0" y="400" width="2.5em" height="1.25em" strokeWidth=".25em" />
        <Rect x="0" y="750" width="375" height="187.5" strokeWidth="37.5" />
        <G transform="scale(2)">
          <Rect
            x="0"
            y="600"
            width="2.5em"
            height="1.25em"
            strokeWidth=".25em"
          />
        </G>
      </G>

      <G transform="translate(2800,0)">
        <Text x="-50" y="300" fill="black" stroke="none">
          Percentages:
        </Text>
        <Rect x="0" y="400" width="10%" height="10%" strokeWidth="1%" />
        <Rect x="0" y="750" width="400" height="200" strokeWidth="31.62" />
        <G transform="scale(2)">
          <Rect x="0" y="600" width="10%" height="10%" strokeWidth="1%" />
        </G>
      </G>
    </G>
  </Svg>
);
