import React from 'react';

import Svg, {
  Circle,
  Image,
  LinearGradient,
  Path,
  Defs,
  Stop,
  Rect,
  Polygon,
  G,
  Text,
  TextPath,
  TSpan,
} from 'svgs';
import Tiheys from './Tiheys';
import TiheysGraafi from './TiheysGraafi';
import Osoitin from './Osoitin';

const colorMap = {
  Green: '#99cc33',
  Red: '#ec0687',
  Orange: '#ec920b',
};

const colors = Object.values(colorMap);

const randomColor = () =>
  colors[0 && Math.floor(Math.random() * colors.length)];

const SectorLabel = ({ name, x }) => (
  <Text
    fontSize={8}
    fontFamily="AvenirNextLTPro-Regular"
    fill="gray"
    strokeWidth="0.2px"
    dx={x}
    y="0"
  >
    <TextPath href="#textcurve" fontSize={8}>
      {name.toUpperCase()}
    </TextPath>
  </Text>
);

export default ({ width, height, native, shadow }) => (
  <Svg
    width={width}
    height={width / 841.9 * 595.3}
    version="1.1"
    viewBox="0 0 841.9 595.3"
    x="0px"
    y="0px"
    xmlSpace="preserve"
  >
    <Defs>
      <Path id="calorie" d="M 320 440 H 495" fill="none" stroke="#00f" />
      <Path id="density" d="M 375 317 H 438" fill="none" stroke="#00f" />
      <Path
        id="textcurve"
        fill="none"
        stroke="#00f"
        d="M150 50c55.23 0 100 44.77 100 100s-44.77 100-100 100S50 205.23 50 150 94.77 50 150 50"
      />
      <LinearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="577.8337"
        x2="407"
        y1="187.8545"
        y2="187.8545"
      >
        <Stop offset="0.0004060953" stopColor="#ffffff" stopOpacity="0" />
        <Stop offset="0.3827" stopColor="#fdfdfd" stopOpacity="0.0764941" />
        <Stop offset="0.5204" stopColor="#f6f6f6" stopOpacity="0.1041" />
        <Stop offset="0.6187" stopColor="#ebeaeb" stopOpacity="0.1237" />
        <Stop offset="0.6981" stopColor="#dadada" stopOpacity="0.1396" />
        <Stop offset="0.7661" stopColor="#c5c4c4" stopOpacity="0.1532" />
        <Stop offset="0.8263" stopColor="#aaa8a9" stopOpacity="0.1652" />
        <Stop offset="0.8808" stopColor="#8a8888" stopOpacity="0.1761" />
        <Stop offset="0.9309" stopColor="#656263" stopOpacity="0.1862" />
        <Stop offset="0.9754" stopColor="#3d393a" stopOpacity="0.1951" />
        <Stop offset="1" stopColor="#231f20" stopOpacity="0.2" />
      </LinearGradient>
      <LinearGradient
        id="SVGID_2_"
        gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 330.3841 -237.9088)"
        gradientUnits="userSpaceOnUse"
        x1="611.4556"
        x2="440.6219"
        y1="211.5344"
        y2="211.5344"
      >
        <Stop offset="0.0004060953" stopColor="#ffffff" stopOpacity="0" />
        <Stop offset="0.3827" stopColor="#fdfdfd" stopOpacity="0.0764941" />
        <Stop offset="0.5204" stopColor="#f6f6f6" stopOpacity="0.1041" />
        <Stop offset="0.6187" stopColor="#ebeaeb" stopOpacity="0.1237" />
        <Stop offset="0.6981" stopColor="#dadada" stopOpacity="0.1396" />
        <Stop offset="0.7661" stopColor="#c5c4c4" stopOpacity="0.1532" />
        <Stop offset="0.8263" stopColor="#aaa8a9" stopOpacity="0.1652" />
        <Stop offset="0.8808" stopColor="#8a8888" stopOpacity="0.1761" />
        <Stop offset="0.9309" stopColor="#656263" stopOpacity="0.1862" />
        <Stop offset="0.9754" stopColor="#3d393a" stopOpacity="0.1951" />
        <Stop offset="1" stopColor="#231f20" stopOpacity="0.2" />
      </LinearGradient>
      <LinearGradient
        id="SVGID_3_"
        gradientTransform="matrix(4.489659e-11 1 -1 4.489659e-11 732.9016 -173.3838)"
        gradientUnits="userSpaceOnUse"
        x1="652.8697"
        x2="482.0359"
        y1="205.1474"
        y2="205.1474"
      >
        <Stop offset="0.0004060953" stopColor="#ffffff" stopOpacity="0" />
        <Stop offset="0.3827" stopColor="#fdfdfd" stopOpacity="0.0764941" />
        <Stop offset="0.5204" stopColor="#f6f6f6" stopOpacity="0.1041" />
        <Stop offset="0.6187" stopColor="#ebeaeb" stopOpacity="0.1237" />
        <Stop offset="0.6981" stopColor="#dadada" stopOpacity="0.1396" />
        <Stop offset="0.7661" stopColor="#c5c4c4" stopOpacity="0.1532" />
        <Stop offset="0.8263" stopColor="#aaa8a9" stopOpacity="0.1652" />
        <Stop offset="0.8808" stopColor="#8a8888" stopOpacity="0.1761" />
        <Stop offset="0.9309" stopColor="#656263" stopOpacity="0.1862" />
        <Stop offset="0.9754" stopColor="#3d393a" stopOpacity="0.1951" />
        <Stop offset="1" stopColor="#231f20" stopOpacity="0.2" />
      </LinearGradient>
      <LinearGradient
        id="SVGID_4_"
        gradientTransform="matrix(0.7071 -0.7071 0.7071 0.7071 -65.097 402.5509)"
        gradientUnits="userSpaceOnUse"
        x1="571.0224"
        x2="400.1887"
        y1="146.5981"
        y2="146.5981"
      >
        <Stop offset="0.0004060953" stopColor="#ffffff" stopOpacity="0" />
        <Stop offset="0.3827" stopColor="#fdfdfd" stopOpacity="0.0764941" />
        <Stop offset="0.5204" stopColor="#f6f6f6" stopOpacity="0.1041" />
        <Stop offset="0.6187" stopColor="#ebeaeb" stopOpacity="0.1237" />
        <Stop offset="0.6981" stopColor="#dadada" stopOpacity="0.1396" />
        <Stop offset="0.7661" stopColor="#c5c4c4" stopOpacity="0.1532" />
        <Stop offset="0.8263" stopColor="#aaa8a9" stopOpacity="0.1652" />
        <Stop offset="0.8808" stopColor="#8a8888" stopOpacity="0.1761" />
        <Stop offset="0.9309" stopColor="#656263" stopOpacity="0.1862" />
        <Stop offset="0.9754" stopColor="#3d393a" stopOpacity="0.1951" />
        <Stop offset="1" stopColor="#231f20" stopOpacity="0.2" />
      </LinearGradient>
      <LinearGradient
        id="SVGID_5_"
        gradientTransform="matrix(4.489659e-11 -1 1 4.489659e-11 173.334 733.3729)"
        gradientUnits="userSpaceOnUse"
        x1="595.5544"
        x2="424.7207"
        y1="112.8249"
        y2="112.8249"
      >
        <Stop offset="0.0004060953" stopColor="#ffffff" stopOpacity="0" />
        <Stop offset="0.3827" stopColor="#fdfdfd" stopOpacity="0.0764941" />
        <Stop offset="0.5204" stopColor="#f6f6f6" stopOpacity="0.1041" />
        <Stop offset="0.6187" stopColor="#ebeaeb" stopOpacity="0.1237" />
        <Stop offset="0.6981" stopColor="#dadada" stopOpacity="0.1396" />
        <Stop offset="0.7661" stopColor="#c5c4c4" stopOpacity="0.1532" />
        <Stop offset="0.8263" stopColor="#aaa8a9" stopOpacity="0.1652" />
        <Stop offset="0.8808" stopColor="#8a8888" stopOpacity="0.1761" />
        <Stop offset="0.9309" stopColor="#656263" stopOpacity="0.1862" />
        <Stop offset="0.9754" stopColor="#3d393a" stopOpacity="0.1951" />
        <Stop offset="1" stopColor="#231f20" stopOpacity="0.2" />
      </LinearGradient>
      <LinearGradient
        id="SVGID_6_"
        gradientTransform="matrix(-0.7071 -0.7071 0.7071 -0.7071 575.7094 798.518)"
        gradientUnits="userSpaceOnUse"
        x1="636.5167"
        x2="465.683"
        y1="106.2942"
        y2="106.2942"
      >
        <Stop offset="0.0004060953" stopColor="#ffffff" stopOpacity="0" />
        <Stop offset="0.1999" stopColor="#fcfcfc" stopOpacity="0.0997806" />
        <Stop offset="0.3398" stopColor="#f3f3f3" stopOpacity="0.1698" />
        <Stop offset="0.4616" stopColor="#e4e3e4" stopOpacity="0.2307" />
        <Stop offset="0.573" stopColor="#cecece" stopOpacity="0.2864" />
        <Stop offset="0.6774" stopColor="#b2b1b1" stopOpacity="0.3386" />
        <Stop offset="0.7764" stopColor="#908e8f" stopOpacity="0.3882" />
        <Stop offset="0.8714" stopColor="#686565" stopOpacity="0.4357" />
        <Stop offset="0.9608" stopColor="#3a3637" stopOpacity="0.4804" />
        <Stop offset="1" stopColor="#231f20" stopOpacity="0.5" />
      </LinearGradient>
    </Defs>
    <G id="Layer_1">
      <G>
        <Image
          opacity="0.15"
          href={shadow}
          preserveAspectRatio="xMidYMid slice"
          transform="matrix(0.24 0 0 0.24 160 55)"
        />
        <G>
          <Circle cx="407" cy="308.7" fill="#ffffff" r="241.8" />
        </G>
      </G>
      <Circle cx="407" cy="308.7" fill="#ffffff" r="241.4" />
      <G>
        <Path
          d="M407,308.7L287.5,189.2c33-33,72.8-49.5,119.5-49.5V308.7z"
          fill={randomColor()}
        />
      </G>
      <G>
        <Path
          d="M407,308.7H238c0-46.7,16.5-86.5,49.5-119.5L407,308.7z"
          fill={randomColor()}
        />
      </G>
      <G>
        <Path
          d="M407,308.7L287.5,428.2c-33-33-49.5-72.8-49.5-119.5H407z"
          fill={randomColor()}
        />
      </G>
      <G>
        <Path
          d="M407,308.7h169c0,46.7-16.5,86.5-49.5,119.5L407,308.7z"
          fill={randomColor()}
        />
      </G>
      <G>
        <Path
          d="M407,308.7l119.5-119.5c33,33,49.5,72.8,49.5,119.5H407z"
          fill={randomColor()}
        />
      </G>
      <G>
        <Path
          d="M407,308.7v-169c46.7,0,86.5,16.5,119.5,49.5L407,308.7z"
          fill={randomColor()}
        />
      </G>
      <Path
        d="M407,466.2c-43.5,0-82.9-17.6-111.4-46.1l-8.1,8.1c33,33,72.8,49.5,119.5,49.5c46.7,0,86.5-16.5,119.5-49.5   l-8.1-8.1C489.8,448.6,450.5,466.2,407,466.2z"
        fill="#6d6e71"
      />
    </G>
    <G id="Layer_2">
      <G>
        <Path
          d="M407,308.7V67.1c66.7,0,123.7,23.6,170.8,70.8L407,308.7z"
          fill="url(#SVGID_1_)"
        />
      </G>
      <G>
        <Path
          d="M407,308.7l170.8-170.8c47.2,47.2,70.8,104.1,70.8,170.8H407z"
          fill="url(#SVGID_2_)"
        />
      </G>
      <G>
        <Path
          d="M407,308.7h241.6c0,66.7-23.6,123.7-70.8,170.8L407,308.7z"
          fill="url(#SVGID_3_)"
        />
      </G>
      <G>
        <Path
          d="M407,308.7L236.1,137.8C283.3,90.6,340.2,67.1,407,67.1V308.7z"
          fill="url(#SVGID_4_)"
        />
      </G>
      <G>
        <Path
          d="M407,308.7H165.4c0-66.7,23.6-123.7,70.8-170.8L407,308.7z"
          fill="url(#SVGID_5_)"
        />
      </G>
    </G>
    <G id="Layer_4">
      <G>
        <G>
          <Path
            d="M324.5,247l-1.1-1.1l-39.6,39.6l1.1,1.1c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2     c5.3-5.3,8.2-12.3,8.2-19.8C332.7,259.3,329.8,252.3,324.5,247z M319.1,254.5c6.4,7.5,6,18.7-1,25.8c-3.6,3.6-8.4,5.6-13.4,5.6     c-4.6,0-8.9-1.6-12.3-4.5L319.1,254.5z M322.3,284.4c-4.7,4.7-11,7.3-17.7,7.3c-6.2,0-12-2.2-16.5-6.3l2.1-2.1     c4,3.5,9.1,5.4,14.5,5.4c5.9,0,11.4-2.3,15.6-6.5c8.2-8.2,8.6-21.4,1-30.1l2.1-2.1c4.1,4.6,6.3,10.4,6.3,16.5     C329.6,273.5,327,279.7,322.3,284.4z"
            fill="#ffffff"
          />
          <Path
            d="M312.1,272.1l2.9,2.9l-2.2,2.2l-2.9-2.9L312.1,272.1z M313.3,264.5h4.1v3h-4.1V264.5z M302.4,275.5h3v4.1h-3     V275.5z"
            fill="#ffffff"
          />
        </G>
        <G>
          <Path
            d="M320.2,244.9c-3.6,0-7.1,1-10.1,2.8l7.4-7.4l-2-2l-7.4,7.4c1.8-3,2.8-6.5,2.8-10.1H308c0,4.1-1.4,7.9-4.1,11     c-0.9-0.5-1.9-0.8-3-0.8c-1.6,0-3,0.6-4.2,1.7c-0.1,0.1-0.3,0.3-0.4,0.4l-21.5,26.3c-1.5,1.9-1.4,4.6,0.3,6.3     c0.9,0.9,2.1,1.4,3.3,1.4c1.1,0,2.1-0.4,3-1.1l26.3-21.5c0.2-0.1,0.3-0.3,0.4-0.4c1.9-1.9,2.2-4.9,0.9-7.2     c3.1-2.6,6.9-4.1,11-4.1L320.2,244.9L320.2,244.9z M306.2,257c-0.1,0.1-0.2,0.1-0.2,0.2l-3.3,2.7l-3.4-3.4l-2,2l3.2,3.2l-14,11.4     l-1.9-1.9l-2,2l1.7,1.7l-4.6,3.8c-0.3,0.3-0.8,0.4-1.2,0.4c-0.5,0-1-0.2-1.3-0.5c-0.7-0.7-0.7-1.8-0.1-2.5l10.4-12.7l2.5,2.5l2-2     l-2.7-2.7l9.3-11.4c0.1-0.1,0.1-0.2,0.2-0.2c0.6-0.6,1.3-0.9,2.2-0.9c0.8,0,1.6,0.3,2.2,0.9l3.2,3.2     C307.4,253.9,307.4,255.8,306.2,257z"
            fill="#ffffff"
          />
        </G>
      </G>
      <G>
        <Path
          d="M488.8,293.6l6.9-6.5l0,0l6.8,6.5l2.1-2.2l-6.8-6.4c2.1-2.3,3.8-4.9,5-7.8c1.5-3.5,2.2-7.2,2.2-11    c0-0.1,0-0.1,0-0.2c0-3.9-0.9-7.6-2.4-11.1c-1.5-3.4-3.6-6.4-6.3-8.9l-1.1-1l-1,1c-2.6,2.5-4.7,5.5-6.1,8.9    c-1.5,3.5-2.2,7.2-2.2,11c0,0.1,0,0.2,0,0.3c0,3.9,0.8,7.6,2.4,11.1c1.3,2.9,3,5.5,5.2,7.8l-6.8,6.4L488.8,293.6z M500.7,257.9    c-1.6,0.8-3.5,1.2-5.3,1.2c-1.8,0-3.5-0.4-5.1-1.1c1.1-3.2,2.8-6.2,5.1-8.8C497.7,251.7,499.5,254.7,500.7,257.9z M495.7,282.9    c-4.3-4.5-6.6-10.5-6.7-16.8c0-0.1,0-0.2,0-0.2c0-1.7,0.2-3.3,0.5-4.9c1.9,0.8,3.9,1.2,5.9,1.2c2.1,0,4.2-0.5,6.2-1.3    c0.4,1.7,0.6,3.4,0.6,5.2c0,0.1,0,0.1,0,0.2C502.1,272.5,499.8,278.4,495.7,282.9z"
          fill="#ffffff"
        />
        <G>
          <Path
            d="M526.3,236.5c-1.4,0-2.6,0.5-3.6,1.5l-1.6,1.6l-1.6-1.6c-1-1-2.2-1.5-3.6-1.5c-1.4,0-2.6,0.5-3.6,1.5     s-1.5,2.2-1.5,3.6c0,1.4,0.5,2.6,1.5,3.6l2.9,2.9l0,9l-7.8,12.5c-1.6,2.5-2.4,5.5-2.4,8.5c0,4.3,1.7,8.3,4.7,11.3     c3,3,7.1,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7c3-3,4.7-7.1,4.7-11.3c0-3-0.8-5.9-2.4-8.5l-7.8-12.5l0-9l2.9-2.9     c1-1,1.5-2.2,1.5-3.6c0-1.4-0.5-2.6-1.5-3.6C528.9,237,527.6,236.5,526.3,236.5z M532.1,271.1c1.3,2,2,4.4,2,6.8     c0,3.4-1.3,6.7-3.8,9.1c-2.4,2.4-5.7,3.8-9.1,3.8c-3.4,0-6.7-1.3-9.1-3.8c-2.4-2.4-3.8-5.7-3.8-9.1c0-2.4,0.7-4.8,2-6.8l7.6-12.1     h6.7L532.1,271.1z M528.2,241.5c0,0.5-0.2,1-0.6,1.4l-3.8,3.8v9.1h-5.4v-9.1l-3.8-3.8c-0.4-0.4-0.6-0.9-0.6-1.4     c0-0.5,0.2-1,0.6-1.4c0.4-0.4,0.9-0.6,1.4-0.6s1,0.2,1.4,0.6l3.8,3.8l3.8-3.8c0.4-0.4,0.9-0.6,1.4-0.6c0.5,0,1,0.2,1.4,0.6     C528,240.5,528.2,241,528.2,241.5z"
            fill="#ffffff"
          />
          <Path
            d="M522.5,284.9h-3.1v-4.2h3.1V284.9z M516.6,279h-3.1v-4.2h3.1V279z"
            fill="#ffffff"
          />
        </G>
      </G>
      <G>
        <Path
          d="M538.6,342.2v-11.2h-22v11.2h1.9v1.8l-1.9,1.9v31.8h22v-31.8l-1.9-1.9v-1.8L538.6,342.2L538.6,342.2z     M519.5,333.8h16.2v5.4h-16.2V333.8z M519.5,374.9v-20.7c4.6-4.2,11.6-4.2,16.2,0v20.7L519.5,374.9L519.5,374.9z M535.7,347.1v3.5    c-2.4-1.5-5.2-2.4-8.1-2.4s-5.7,0.8-8.1,2.4v-3.5l1.9-1.9v-3h12.5v3L535.7,347.1z"
          fill="#ffffff"
        />
        <G>
          <Path
            d="M500.8,357.7c7.3-0.8,13-7,13-14.5c0-0.6,0-1.2-0.1-1.8l-2.1-16.5h-24.9l-2.1,16.5c-0.1,0.6-0.1,1.2-0.1,1.8     c0,7.5,5.7,13.7,13,14.5v16.9h-11.2v3.3H512v-3.3h-11.2V357.7z M508.7,328.1l1.5,11.8h-22l1.5-11.8H508.7z M487.8,343.2h22.6     c0,6.2-5.1,11.3-11.3,11.3C492.9,354.5,487.8,349.4,487.8,343.2z"
            fill="#ffffff"
          />
        </G>
      </G>
      <G>
        <G id="Watch_1_">
          <G>
            <Path
              d="M303.2,327.3c-13.3,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S316.5,327.3,303.2,327.3z M303.2,372.4      c-11.6,0-21-9.4-21-21c0-11.6,9.4-21,21-21c11.6,0,21,9.4,21,21C324.3,363,314.8,372.4,303.2,372.4z M307.2,353.5      c0.4-0.6,0.6-1.4,0.6-2.2c0-2-1.3-3.6-3-4.2v-12.3c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v12.3c-1.7,0.6-3,2.3-3,4.2      c0,2.5,2,4.5,4.5,4.5c0.6,0,1.2-0.1,1.7-0.3l6.3,6.3c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1      L307.2,353.5z M303.2,352.9c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5      C304.7,352.2,304.1,352.9,303.2,352.9z"
              fill="#ffffff"
            />
          </G>
        </G>
      </G>
      <G>
        <Rect height="3.6" width="2.7" fill="#ffffff" x="356.7" y="211.6" />
        <Rect
          height="2.7"
          width="3.6"
          fill="#ffffff"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -49.6988 310.661)"
          x="348.4"
          y="214"
        />
        <Rect
          height="3.6"
          width="2.7"
          fill="#ffffff"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -39.8685 297.9624)"
          x="338.4"
          y="195.3"
        />
        <Polygon
          fill="#ffffff"
          points="359,192.4 357.1,194.3 359.7,196.8 361.3,195.2 361.3,194.6   "
        />
        <Rect height="3.6" width="2.7" fill="#ffffff" x="334.8" y="201.6" />
        <Rect height="3.6" width="0.5" fill="#ffffff" x="360.8" y="205.2" />
        <Rect height="3.6" width="2.7" fill="#ffffff" x="351.8" y="187.8" />
        <Path
          d="M361.3,216.9c-3.3,2.6-7.4,4.2-11.9,4.2c-10.5,0-19-8.5-19-19c0-10.5,8.5-19,19-19c4.5,0,8.6,1.6,11.9,4.2    V184c-3.5-2.3-7.6-3.5-11.9-3.5c-5.8,0-11.2,2.3-15.3,6.4c-4.1,4.1-6.4,9.5-6.4,15.3c0,5.8,2.3,11.2,6.4,15.3    c4.1,4.1,9.5,6.4,15.3,6.4c4.8,0,9.3-1.5,13.1-4.4l-1.2-1.9V216.9z"
          fill="#ffffff"
        />
        <Path
          d="M349.4,195.7c-3.5,0-6.4,2.9-6.4,6.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4    C355.8,198.6,352.9,195.7,349.4,195.7z M349.4,205.8c-2.1,0-3.7-1.7-3.7-3.7c0-2.1,1.7-3.7,3.7-3.7c2.1,0,3.7,1.7,3.7,3.7    C353.1,204.2,351.4,205.8,349.4,205.8z"
          fill="#ffffff"
        />
        <G>
          <Path
            d="M390.8,170.8v-0.1h1.7v-3.5H362v3.5h1.7v0.1c-2.2,1.1-3.7,3.4-3.7,5.9v40.8c0,3.6,3,6.6,6.6,6.6h21.1     c3.6,0,6.6-3,6.6-6.6v-40.8C394.4,174.2,393,171.9,390.8,170.8z M363.6,190.5c8.3-5.1,17.7-8.2,27.4-9v12.5     c-10.1,5.1-19.3,11.7-27.4,19.5V190.5z M365.9,173.7l1.3-0.3v-2.7h20.1v2.7l1.3,0.3c1.4,0.4,2.4,1.6,2.4,3v1.2     c-9.6,0.7-19,3.7-27.4,8.5v-9.7C363.6,175.3,364.5,174.1,365.9,173.7z M387.8,220.7h-21.1c-1.5,0-2.8-1.1-3.1-2.5     c8.1-8.2,17.2-15,27.4-20.4v19.7C391,219.3,389.6,220.7,387.8,220.7z"
            fill="#ffffff"
          />
        </G>
      </G>
      <G>
        <Path
          d="M457.3,223l-0.4-0.3h0c0,0,0,0,0,0l-2-1.8c-0.4,1.1-1.5,1.8-2.7,1.8h-19.1v0c-1.6,0-2.9-1.3-2.9-2.9v-22.1    l-0.7-0.4c-1.4-0.7-2.3-2.1-2.3-3.7c0-2.3,1.8-4.1,4.1-4.1H454c0.4,0,0.8,0.1,1.2,0.2l-0.1-2.8H454h-22.7c-3.7,0-6.7,3-6.7,6.7    c0,2.3,1.1,4.3,3,5.6v20.5c0,3,2.5,5.5,5.5,5.5h19.1h6.2c1.3,0,2.5-0.5,3.4-1.2l-1.1,0L457.3,223z"
          fill="#ffffff"
        />
        <Polygon
          fill="#ffffff"
          points="455.1,198.4 455.5,198.6 455.5,197.5 455.1,197.6   "
        />
        <Rect height="3.5" width="2.6" fill="#ffffff" x="443.1" y="215.2" />
        <Polygon
          fill="#ffffff"
          points="448.6,209.5 448,209.5 448,213 449.7,213 448.6,210.8   "
        />
        <G>
          <Path
            d="M468,167.4l-2,2v-3.5h-3.1v3.5l-1.9-1.9l-2.2,2.2l2.4,2.4c-1.7,0.5-3.2,1.4-4.5,2.7     c-2.1,2.1-3.2,4.8-3.2,7.7v12.8c-1-0.9-2-1.8-3-2.7v-9.2h-3.1l0,25.2c0,4.5,1.8,8.8,5,12c3.2,3.2,7.5,5,12,5c4.7,0,9-1.9,12-5     c3.1-3.1,5-7.3,5-12l0-25.2h-3.1l0,9.2c-1,0.8-2,1.7-3,2.7v-12.8c0-4.9-3.2-9-7.7-10.4l2.4-2.4L468,167.4z M454.7,218.4     c-2.6-2.6-4.1-6.1-4.1-9.8v-11.9c7.5,6.9,11.9,16,12.3,25.7C459.8,222.1,456.9,220.7,454.7,218.4z M478.4,208.6     c0,3.8-1.6,7.3-4.1,9.8c-2.2,2.2-5,3.6-8.3,4c0.4-9.7,4.8-18.9,12.3-25.7V208.6z M472.3,182.5l0,16.1c-2,2.4-3.7,5-5.1,7.8     c-1.1,2.2-2,4.5-2.7,6.9c-0.7-2.4-1.6-4.7-2.7-6.9c-1.4-2.8-3.1-5.4-5.1-7.8l0-16.1c0-2.1,0.8-4.1,2.3-5.5     c1.5-1.5,3.4-2.3,5.5-2.3C468.8,174.7,472.3,178.2,472.3,182.5z"
            fill="#ffffff"
          />
        </G>
      </G>
    </G>
    <Text
      fontSize={24}
      fontStyle="normal"
      fontWeight="normal"
      fontFamily="AvenirNextLTPro-Regular"
      textAnchor="middle"
      stroke="black"
      strokeWidth="0.2px"
    >
      <TextPath href="#calorie" startOffset="52%">
        <TSpan dx="0">22%</TSpan>
      </TextPath>
    </Text>
    <Image
      opacity="0.05"
      width="2067"
      height="2066"
      href={shadow}
      preserveAspectRatio="xMidYMid slice"
      transform="matrix(0.075 0 0 0.075 330 228.5)"
    />
    <Circle
      fill="#ffffff"
      cx="407"
      cy="308.7"
      r="70"
      stroke="gray"
      strokeOpacity="0.4"
    />

    <G scale="0.7">
      <G transform="translate(160, 142.5)">
        <TiheysGraafi />
        <Osoitin />
      </G>
    </G>
    <Image
      opacity="0.15"
      width="2067"
      height="2066"
      href={shadow}
      preserveAspectRatio="xMidYMid slice"
      transform="matrix(0.026 0 0 0.026 380 281.5)"
    />
    <Circle
      fill="#ffffff"
      cx="407"
      cy="308.7"
      r="25"
      stroke="none"
      strokeOpacity="0.4"
    />
    <Text
      fontSize={20}
      fontStyle="normal"
      fontWeight="normal"
      fontFamily="AvenirNextLTPro-Regular"
      textAnchor="middle"
      stroke="black"
      strokeWidth="0.1px"
    >
      <TextPath href="#density" startOffset="49%" fontSize={20}>
        152
      </TextPath>
    </Text>
    <G scale="0.45">
      <G transform="translate(482, 485)" opacity="0.3">
        <Tiheys />
      </G>
    </G>

    <G transform="translate(100, 0)" opacity="0.5">
      <G scale="2.05">
        <Path
          fill="none"
          stroke="none"
          d="M150 50c55.23 0 100 44.77 100 100s-44.77 100-100 100S50 205.23 50 150 94.77 50 150 50"
        />
      </G>
    </G>
    <G transform="translate(100, 0)" opacity="0.9">
      <G scale="2.05">
        <SectorLabel x="25" name="Kuidut" />
        <SectorLabel x="90" name="Ravintoaineet" />
        <SectorLabel x="180" name="Terveys" />
        <SectorLabel x="400" name="Ateriarytmi" />
        <SectorLabel x="485" name="Kasvikset" />
        <SectorLabel x="575" name="Herkut" />
      </G>
    </G>
  </Svg>
);
