import React from 'react';
import Svg, {
  G,
  Circle,
  Line,
  Defs,
  Rect,
  Path,
  Text,
  TextPath,
  TSpan,
} from 'svgs';

export default ({ width, height, native }) => (
  <Svg
    width={width}
    height={width * 300 / 450}
    version="1.1"
    viewBox="0 0 450 300"
  >
    <Rect x="1" y="1" width="448" height="298" fill="none" stroke="blue" />
    <G fontFamily="AvenirNextLTPro-Regular" fontSize={9}>
      <Text x="10" y="30">
        SVG to fit
      </Text>
      <G transform="translate(20,40)">
        <Rect x=".5" y=".5" width="29" height="39" fill="black" stroke="red" />
        <G transform="translate(0, 5)">
          <Circle cx="15" cy="15" r="10" fill="yellow" />
          <Circle cx="12" cy="12" r="1.5" fill="black" />
          <Circle cx="17" cy="12" r="1.5" fill="black" />
          <Path d="M 10 19 A 8 8 0 0 0 20 19" stroke="black" strokeWidth="2" />
        </G>
      </G>
      <Text x="10" y="110">
        Viewport 1
      </Text>
      <G transform="translate(10,120)">
        <Rect x=".5" y=".5" width="49" height="29" fill="none" stroke="blue" />
      </G>
      <Text x="10" y="180">
        Viewport 2
      </Text>
      <G transform="translate(20,190)">
        <Rect x=".5" y=".5" width="29" height="59" fill="none" stroke="blue" />
      </G>

      <G id="meet-group-1" transform="translate(100, 60)">
        <Text x="0" y="-30">
          --------------- meet ---------------
        </Text>
        <G>
          <Text y="-10">xMin*</Text>
          <Rect
            x=".5"
            y=".5"
            width="49"
            height="29"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 30 40"
            width="50"
            height="30"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
        <G transform="translate(70,0)">
          <Text y="-10">xMid*</Text>
          <Rect
            x=".5"
            y=".5"
            width="49"
            height="29"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 30 40"
            width="50"
            height="30"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
        <G transform="translate(0,70)">
          <Text y="-10">xMax*</Text>
          <Rect
            x=".5"
            y=".5"
            width="49"
            height="29"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMaxYMax meet"
            viewBox="0 0 30 40"
            width="50"
            height="30"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
      </G>

      <G id="meet-group-2" transform="translate(250, 60)">
        <Text x="0" y="-30">
          ---------- meet ----------
        </Text>
        <G>
          <Text y="-10">*YMin</Text>
          <Rect
            x=".5"
            y=".5"
            width="29"
            height="59"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 30 40"
            width="30"
            height="60"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
        <G transform="translate(50, 0)">
          <Text y="-10">*YMid</Text>
          <Rect
            x=".5"
            y=".5"
            width="29"
            height="59"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 30 40"
            width="30"
            height="60"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
        <G transform="translate(100, 0)">
          <Text y="-10">*YMax</Text>
          <Rect
            x=".5"
            y=".5"
            width="29"
            height="59"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMaxYMax meet"
            viewBox="0 0 30 40"
            width="30"
            height="60"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
      </G>

      <G id="slice-group-1" transform="translate(100, 220)">
        <Text x="0" y="-30">
          ---------- slice ----------
        </Text>
        <G>
          <Text y="-10">xMin*</Text>
          <Rect
            x=".5"
            y=".5"
            width="29"
            height="59"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMinYMin slice"
            viewBox="0 0 30 40"
            width="30"
            height="60"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
        <G transform="translate(50,0)">
          <Text y="-10">xMid*</Text>
          <Rect
            x=".5"
            y=".5"
            width="29"
            height="59"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 30 40"
            width="30"
            height="60"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
        <G transform="translate(100,0)">
          <Text y="-10">xMax*</Text>
          <Rect
            x=".5"
            y=".5"
            width="29"
            height="59"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMaxYMax slice"
            viewBox="0 0 30 40"
            width="30"
            height="60"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
      </G>

      <G id="slice-group-2" transform="translate(250, 220)">
        <Text x="0" y="-30">
          --------------- slice ---------------
        </Text>
        <G>
          <Text y="-10">*YMin</Text>
          <Rect
            x=".5"
            y=".5"
            width="49"
            height="29"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMinYMin slice"
            viewBox="0 0 30 40"
            width="50"
            height="30"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
        <G transform="translate(70,0)">
          <Text y="-10">*YMid</Text>
          <Rect
            x=".5"
            y=".5"
            width="49"
            height="29"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 30 40"
            width="50"
            height="30"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
        <G transform="translate(140,0)">
          <Text y="-10">*YMax</Text>
          <Rect
            x=".5"
            y=".5"
            width="49"
            height="29"
            fill="none"
            stroke="blue"
          />
          <Svg
            preserveAspectRatio="xMaxYMax slice"
            viewBox="0 0 30 40"
            width="50"
            height="30"
          >
            <Rect
              x=".5"
              y=".5"
              width="29"
              height="39"
              fill="black"
              stroke="red"
            />
            <G transform="translate(0, 5)">
              <Circle cx="15" cy="15" r="10" fill="yellow" />
              <Circle cx="12" cy="12" r="1.5" fill="black" />
              <Circle cx="17" cy="12" r="1.5" fill="black" />
              <Path
                d="M 10 19 A 8 8 0 0 0 20 19"
                stroke="black"
                strokeWidth="2"
              />
            </G>
          </Svg>
        </G>
      </G>
    </G>
  </Svg>
);
