import React from 'react';
import Svg, { Rect, Text, TSpan } from 'svgs';

export default class App extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <Svg height={width * 67 / 120} width={width} viewBox="0 0 120 67">
        <Rect fill="blue" x="0" y="25" width="5" height="42" />
        <Text
          y="20"
          dx="5 5"
          fontFamily="AvenirNextLTPro-Regular"
          fontSize={15}
          wordSpacing="2"
        >
          <TSpan x="10">tspan line 1</TSpan>
          <TSpan x="10" dy="15">
            tspan line 2
          </TSpan>
          <TSpan x="10" dx="10" dy="15">
            tspan line 3
          </TSpan>
        </Text>
      </Svg>
    );
  }
}
