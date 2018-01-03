import React, { Component } from 'react';
import { VictoryPie, VictoryLabel } from 'victory-native';

export default class Chart extends Component {
  render() {
    return (
      <VictoryPie
        {...this.props}
        style={{ labels: { fontSize: 16, fontWeight: 'bold' } }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 4 },
          { x: 5, y: 5 },
        ]}
        labelComponent={<VictoryLabel text={d => d.y} />}
        height={250}
      />
    );
  }
}
