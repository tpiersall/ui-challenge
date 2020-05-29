import React from 'react';
import { Line, Rose, Bar } from '@ant-design/charts';

export const LineChart = () => {
    const data = [
        { year: '1', value: 6 },
        { year: '2', value: 9 },
        { year: '3', value: 15 },
        { year: '4', value: 25 },
        { year: '5', value: 37 },
        { year: '6', value: 72 },
        { year: '7', value: 99 },
        { year: '8', value: 120 },
        { year: '9', value: 130 },
        { year: '10', value: 131 },
        { year: '11', value: 129 },
        { year: '12', value: 127 },
        { year: '13', value: 127 },
        { year: '14', value: 122 },
        { year: '15', value: 72 },
        { year: '16', value: 50 },
        { year: '17', value: 20 },
        { year: '18', value: 15 },
    ];

    const config = {
        data,
        forceFit: true,
        xField: 'year',
        yField: 'value',
        guideLine: [
            {
                type: 'max',
                start: ['3', 150] || ['20%', '100%'],
                end: ['3', 0] || ['100%', '100%'],
                lineStyle: { opacity: .3 },
                text: { content: "Service Start Cue", position: 'center' },
            },
            {
                type: 'max',
                start: ['9', 150] || ['100%', '100%'],
                end: ['9', 0] || ['100%', '100%'],
                lineStyle: { opacity: .3 },
                text: {
                    content: "Message Start Cue", position: 'center', style: { color: 'blue' }
                },
            },
            {
                type: 'max',
                start: ['15', 150] || ['100%', '100%'],
                end: ['15', 0] || ['100%', '100%'],
                lineStyle: { opacity: .3 },
                text: { content: "Message End Cue", position: 'center' },
            },
        ],

        point: {
            visible: true,
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2,
            },
        }
    };

    return <Line {...config} />;
}


export const RoseChart = () => {
    const data = [
        {
            type: '0 - 10 Minutes',
            value: 53,
        },
        {
            type: '10 - 30 Minutes',
            value: 34,
        },
        {
            type: '30+ Minutes',
            value: 189,
        }
    ];
    const config = {
        forceFit: true,
        radius: 0.8,
        data,
        radiusField: 'value',
        categoryField: 'type',
        colorField: 'type',
        color: ['#30DFC1', '#3076DF', '#75A6F0'],
        label: {
            visible: true,
            type: 'outer',
            content: (text) => text.value,
        },
    };
    return <Rose {...config} />;
};

export const BarChart = () => {
    const data = [
        {
            resolution: '144p',
            value: 56,
        },
        {
            resolution: '270p',
            value: 4,
        },
        {
            resolution: '360p',
            value: 9,
        },
        {
            resolution: '540p',
            value: 82,
        },
        {
            resolution: '720p',
            value: 27,
        },
        {
            resolution: '1080p',
            value: 98,
        },
    ];
    const config = {
        forceFit: true,
        color: ['#1A61CB'],
        data,
        xField: 'value',
        yField: 'resolution',
        legend: {
            visible: false,
        }
    };
    return <Bar {...config} />;
};

