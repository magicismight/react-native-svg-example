import React from 'react';

import Svg, { Line, Rect, G, Text } from 'svgs';

export default ({ width, height, native, fontData }) => (
  <Svg width={width} height={width} viewBox="0 0 960 500">
    <Line style={{ stroke: 'green' }} x1="10" x2="920" y1="200.5" y2="200.5" />
    <Text
      alignmentBaseline="central"
      fill="green"
      fontSize="14px"
      x="926"
      y="200.5"
      fontFamily="AvenirNextLTPro-Regular"
    >
      y=0
    </Text>
    <G
      className="terms"
      fontSize="60px"
      fontFamily="AvenirNextLTPro-Regular"
      transform="translate(20,200.5)"
      {...(native ? { fontData } : null)}
    >
      <Text alignmentBaseline="alphabetic" x="0">
        (+)
      </Text>
      <Text baselineShift="-24%" x="100">
        (+)
      </Text>
      <Text alignmentBaseline="ideographic" x="200">
        (+)
      </Text>
      <Text alignmentBaseline="hanging" x="300">
        (+)
      </Text>
      <Text alignmentBaseline="mathematical" x="400">
        (+)
      </Text>
      <Text alignmentBaseline="middle" x="500">
        (+)
      </Text>
      <Text alignmentBaseline="central" x="600">
        (+)
      </Text>
      <Text alignmentBaseline="text-before-edge" x="700">
        (+)
      </Text>
      <Text alignmentBaseline="text-after-edge" x="800">
        (+)
      </Text>
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="0"
        y="-56.5"
      />
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="100"
        y="-42.09375"
      />
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="200"
        y="-71"
      />
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="300"
        y="-11.296875"
      />
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="400"
        y="-28.25"
      />
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="500"
        y="-42.453125"
      />
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="600"
        y="-35.5"
      />
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="700"
        y="0"
      />
      <Rect
        fill="none"
        height="71"
        strokeDasharray="6, 6"
        stroke="gray"
        width="75.953125"
        x="800"
        y="-71"
      />
    </G>
    <G
      className="labels"
      transform="translate(50,120)"
      fontFamily="AvenirNextLTPro-Regular"
    >
      <Text transform="translate(0,0),rotate(-45)">alphabetical</Text>
      <Text transform="translate(100,0)rotate(-45)">+ bl-shift: -24%</Text>
      <Text transform="translate(200,0)rotate(-45)">ideographic</Text>
      <Text transform="translate(300,0)rotate(-45)">hanging</Text>
      <Text transform="translate(400,0)rotate(-45)">mathemetical</Text>
      <Text transform="translate(500,0)rotate(-45)">middle</Text>
      <Text transform="translate(600,0)rotate(-45)">central</Text>
      <Text transform="translate(700,0)rotate(-45)">text-before-edge</Text>
      <Text transform="translate(800,0)rotate(-45)">text-after-edge</Text>
    </G>
  </Svg>
);
