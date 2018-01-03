import React from 'react';

import { Circle, Path, G } from 'svgs';

/*
 <Circle cx="421" cy="298.5" fill="#d1d3d4" r="79.3" />
* */

export default () => (
  <G>
    <Path
      d="M421,298.5l0-66.1c36.5,0,66.1,29.6,66.1,66.1l0,0H421z"
      fill="#fbb040"
    />
    <Path
      d="M421,298.5v-66.1c-36.5,0-66.1,29.6-66.1,66.1c0,18.2,7.4,34.8,19.3,46.7L421,298.5z"
      fill="#ec008c"
    />
    <Path
      d="M487.1,298.5H421l46.7,46.7C479.7,333.3,487.1,316.7,487.1,298.5z"
      fill="#8dc63f"
    />
    <Circle cx="421" cy="298.5" fill="#ffffff" r="49.9" />
  </G>
);
