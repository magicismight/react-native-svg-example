import React, {
    Component
} from 'react';

import Svg, {
    Text,
    LinearGradient,
    Stop,
    Defs,
    Path,
    G,
    TSpan,
    TextPath
} from 'react-native-svg';

class TextExample extends Component{
    static title = 'Text';

    render() {
        return <Svg
            height="30"
            width="100"
        >
            <Text
                x="50"
                y="9"
                fill="red"
                textAnchor="middle"
            >I love SVG!</Text>
        </Svg>;
    }
}

class TextRotate extends Component{
    static title = 'Transform the text';

    render() {
        return <Svg
            height="60"
            width="200"
        >
            <Text
                x="0"
                y="15"
                fill="red"
                rotate="30"
                origin="20,40"
            >I love SVG</Text>
            <Text
                x="95"
                y="47"
                fill="blue"
                rotate="-25"
                origin="95, 20"
            >I love SVG</Text>
            <Text
                x="126"
                y="5"
                fill="#f60"
                rotate="106"
                scale="1.36"
                origin="140, 0"
            >I love SVG</Text>
        </Svg>;
    }
}

class TextStroke extends Component{
    static title = 'Stroke the text';
    render() {
        return <Svg
            height="60"
            width="200"
        >
            <Defs>
                <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="100%" stopColor="red" stopOpacity="0" />
                    <Stop offset="0%" stopColor="blue" stopOpacity="0.5" />
                </LinearGradient>
            </Defs>
            <Text
                stroke="url(#grad)"
                strokeWidth="2"
                fill="none"
                fontSize="30"
                fontWeight="bold"
                x="100"
                y="40"

            ><TSpan textAnchor="middle">{['STROKE TEXT']}</TSpan></Text>
        </Svg>;
    }
}

class TextFill extends Component{
    static title = 'Fill the text with LinearGradient';
    render() {
        return <Svg
            height="60"
            width="200"
        >
            <Defs>
                <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="0%" stopColor="rgb(255,255,0)" stopOpacity="0.5" />
                    <Stop offset="100%" stopColor="red" stopOpacity="1" />
                </LinearGradient>
            </Defs>

            <Text
                fill="url(#grad)"
                stroke="purple"
                strokeWidth="1"
                fontSize="30"
                fontWeight="bold"
                fontStyle="italic"
                x="100"
                y="40"
                textAnchor="middle"
            >FILL TEXT</Text>
        </Svg>;
    }
}


class TextPathExample extends Component{
    static title = 'Draw text along path';

    render() {
        const path = `
                    M 10 20
                     C 40 10 60  0 80 10
                     C 100 20 120 30 140 20
                     C 160 10 180 10 180 10
                `;

        return <Svg
            height="100"
            width="200"
        >
            <Defs>
                <Path
                    id="path"
                    d={path}
                />
            </Defs>
            <G y="20">
                <Text
                    fill="blue"

                >
                    <TextPath href="#path" startOffset="-10%">
                        We go up and down,
                        <TSpan fill="red" dy="5,5,5">then up again</TSpan>
                    </TextPath>
                </Text>
                <Path
                    d={path}
                    fill="none"
                    stroke="red"
                    strokeWidth="1"
                />
            </G>
        </Svg>;
    }
}

class TSpanExample extends Component{
    static title = 'TSpan nest';

    render() {


        return <Svg
            height="160"
            width="200"
        >
            <Text y="20" dx="5 5">
                <TSpan x="10" >tspan line 1</TSpan>
                <TSpan x="10" dy="15">tspan line 2</TSpan>
                <TSpan x="10" dx="10" dy="15">tspan line 3</TSpan>
            </Text>
            <Text x="10" y="60" fill="red" fontSize="14">
                <TSpan dy="5 10 20" >12345</TSpan>
                <TSpan fill="blue" dy="15" dx="0 5 5">
                    <TSpan>6</TSpan>
                    <TSpan>7</TSpan>
                </TSpan>
                <TSpan dx="0 10 20" dy="0 20" fontWeight="bold" fontSize="12">89a</TSpan>
            </Text>
            <Text y="140" dx="0 5 5" dy="0 -5 -5">delta on text</Text>
        </Svg>;
    }
}


const icon = <Svg
    height="20"
    width="20"
>
    <Text
        x="-2"
        y="15"
        fontSize="14"
        fontWeight="bold"
        textAnchor="middle"
        fill="none"
        stroke="blue"
        strokeWidth="1"
    >字</Text>
</Svg>;

const samples = [
    TextExample,
    TextRotate,
    TextStroke,
    TextFill,
    TextPathExample,
    TSpanExample
];

export {
    icon,
    samples
};
