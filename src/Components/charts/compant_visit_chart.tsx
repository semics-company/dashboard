import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Typography} from "@material-ui/core";

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
            backgroundColor: '#fb6761',

            borderColor: [
                '#fb6761',

            ],
            borderWidth: 1,
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

const Company_visit_chart = () => (
    <>
        <div>
            <Typography style={{fontWeight:"bolder"}}>Daily view report</Typography>
            <Typography style={{fontSize:"14px"}}>this advert</Typography>

        </div>
        <Bar data={data} options={options} type={Bar} />
    </>
);

export default Company_visit_chart;