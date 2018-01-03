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
    height={width / 2}
    width={width}
    version="1.1"
    viewBox="0 0 400 400"
    xmlLang="he"
    direction="rtl"
  >
    <Text fontFamily="AvenirNextLTPro-Regular" fontSize={20} x="200" y="200">
      כתובת MAC:‏
      <TSpan direction="ltr">00-24-AF-2A-55-FC</TSpan>
    </Text>
  </Svg>
);
