import React from 'react';
import All from '../src/components/all';

export default () => (
  <All
    View={props => <div {...props} />}
    width={980}
    native={false}
    shadow="/static/shadow-min.png"
  />
);
