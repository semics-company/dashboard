import React from 'react';
import { Line } from 'react-chartjs-2';
import {Typography} from "@material-ui/core";

const data = {
    labels: ['1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'All visit',
            data: [12, 19, 3, 5, 8, 5,12, 19, 11, 5, 4, 9],
            fill: true,
            backgroundColor: '#ffa3a2',
            borderColor: '#fb6761',
            borderRadius:"10px"
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const LineChart_firstpage = () => (
    <>
        <div>
            <Typography style={{fontWeight:"bolder"}}>Daily view report</Typography>
            <Typography style={{fontSize:"14px"}}>All advert</Typography>

        </div>

        <Line data={data} options={options} type={Line} />
    </>
);

export default LineChart_firstpage;