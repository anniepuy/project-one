import React from 'react';
import ChartBar from './ChartBar';
import'./Chart.css';
import './ChartBar.css';

const Chart = props => {
    //const to take an array of objects to return a new array of just numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //using the spread operator to transform the array of numbers to single, standalone elements
    const totalMaximumExpenses = Math.max(...dataPointValues);

    return (
        <div className="char">
            {props.dataPoints.map((dataPoint => 
                <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximumExpenses}
                label={dataPoint.label}
                />
            ))}
        </div>
    )
};

export default Chart;