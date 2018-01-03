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

export default ({ width, height, native }) => (
  <Svg
    width={width}
    height={width * 300 / 1000}
    viewBox="0 0 1000 300"
    version="1.1"
  >
    <Defs>
      <Path
        id="MyPath2"
        d="M 100 200
          C 200 100 300   0 400 100
          C 500 200 600 300 700 200
          C 800 100 900 100 900 100"
      />
    </Defs>

    <Use href="#MyPath2" fill="none" stroke="red" />
    <Text fontFamily="AvenirNextLTPro-Regular" fontSize={42.5} fill="blue">
      <TextPath href="#MyPath2">
        We go
        <TSpan dy="-30" fill="red">
          up
        </TSpan>
        <TSpan dy="30">,</TSpan>
        then we go down, then up again
      </TextPath>
    </Text>

    <Rect
      x="1"
      y="1"
      width="998"
      height="298"
      fill="none"
      stroke="blue"
      strokeWidth="2"
    />
  </Svg>
);
