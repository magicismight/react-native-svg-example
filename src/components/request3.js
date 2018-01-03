import React from 'react';
import Svg, { Defs, Rect, Path, Text, TextPath, TSpan, Use } from 'svgs';
// TODO investigate letter-spacing and start-offset
export default ({ width, height, native, sharp }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 1000 500"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <Defs>
      <Path id="textpath" d="M225,150 v-80 h240 v80 Z" />
    </Defs>
    <Use href="#textpath" stroke="#00f" strokeWidth="1px" fill="none" />
    <Text
      stroke="#000"
      fontFamily="AvenirNextLTPro-Regular"
      fontSize="10px"
      letterSpacing="0"
      style={{ 'font-kerning': 'none' }}
      kerning="0"
    >
      <TextPath
        href="#textpath"
        {...(native ? { midLine: sharp ? 'sharp' : 'smooth' } : null)}
      >
        <TSpan>&#8203;s</TSpan>
      </TextPath>
    </Text>
  </Svg>
);
