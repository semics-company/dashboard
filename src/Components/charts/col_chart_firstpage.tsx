import React from 'react';
import { Bar } from 'react-chartjs-2'
import {Typography} from "@material-ui/core";
const data = {
    labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10'],
    datasets: [
        {
            label: '# of Red Votes',
            data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5],
            backgroundColor: '#13003e',
        },
        {
            label: '# of Blue Votes',
            data: [2, 3, 20, 5, 1, 4,2, 3, 20, 5],
            backgroundColor: '#fb6761',
        },
        {
            label: '# of Green Votes',
            data: [3, 10, 13, 15, 22, 30,3, 10, 13,9],
            backgroundColor: 'rgb(75, 192, 192)',
        },

    ],
    borderWidth: 1,
    borderRadius:"30px"

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


const ColChartFirstpage = () => {
    return (
        <>
            <div>
                <Typography style={{fontWeight:"bolder"}}>Daily view report</Typography>
                <Typography style={{fontSize:"14px"}}>All advert by company</Typography>

            </div>
            <Bar type={options} data={data}/>
        </>
    );
};

export default ColChartFirstpage;