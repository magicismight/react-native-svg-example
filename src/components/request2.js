import React from 'react';
import Svg, { Defs, Rect, Path, Text, TextPath, TSpan, Use } from 'svgs';
// TODO investigate letter-spacing and start-offset
export default ({ width, height, native, sharp, letterSpacing }) => (
  <Svg
    width={width}
    height={width * 240 / 330}
    viewBox="200 0 330 240"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <Defs>
      <Path id="textpath" d="M225,150 v-80 h240 v80 Z" />
    </Defs>
    <Use href="#textpath" stroke="#00f" strokeWidth="1px" fill="none" />
    <Text
      stroke="#000"
      fontFamily="American Typewriter"
      fontSize={24}
      wordSpacing="0"
      letterSpacing={letterSpacing}
      x="0"
      y="0"
    >
      <TextPath
        href="#textpath"
        startOffset="0%"
        {...(native ? { midLine: sharp ? 'sharp' : 'smooth' } : null)}
      >
        <TSpan dx="0" dy="0">
          WAVE WAVE WAVE .
        </TSpan>
      </TextPath>
    </Text>
    <Rect
      x="200"
      y="0"
      width="330"
      height="240"
      strokeWidth="5px"
      stroke="black"
      fill="none"
    />
  </Svg>
);
