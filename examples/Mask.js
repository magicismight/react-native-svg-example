import React, {
    Component
} from 'react';

import Svg, {
    Mask,
    Circle,
    Defs,
    Rect,
    LinearGradient,
    Text,
    Use,
    Stop
} from 'react-native-svg';

class MaskExample extends Component {
    static title = 'Mask';
    render() {
        <Svg width="100%" height="400" viewBox="0 0 800 300" >
            <Defs>
                <LinearGradient
                    id="Gradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="800"
                    y2="0"
                >
                    <Stop offset="0" stopColor="white" stopOpacity="0" />
                    <Stop offset="1" stopColor="white" stopOpacity="1" />
                </LinearGradient>
                <Rect
                    id="Rect"
                    x="0"
                    y="0"
                    width="800"
                    height="300"
                    fill="url(#Gradient)"
                />
                <Mask
                    id="Mask"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="800"
                    height="300"
                >
                    <Rect
                        x="0"
                        y="0"
                        width="800"
                        height="300"
                        fill="url(#Gradient)"
                    />
                </Mask>
                <Text
                    id="Text"
                    x="400"
                    y="200"
                    fontFamily="Verdana"
                    fontSize="100"
                    textAnchor="middle"
                >
                    Masked text
                </Text>
            </Defs>
            <Rect x="0" y="0" width="800" height="300" fill="#FF8080" />
            <Use href="#Text" fill="blue" mask="url(#Mask)" />
            <Use href="#Text" fill="none" stroke="black" stroke-width="2" />
        </Svg>
    }
}


const icon = <Svg
    height="20"
    width="20"
>
    // new icon needed
</Svg>;

const samples = [
    MaskExample
];
export {
    icon,
    samples
};
