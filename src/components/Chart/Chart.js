import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props =>{
    
const dataPointValues  = props.datapoints.map(dataPoint => dataPoint.value);
const totalMaximum = Math.max(...dataPointValues);

    return(
    <div className="chart">
   {props.datapoints.map((dataPoint) =>(
   <ChartBar 
   Key = {dataPoint.label}
   value={dataPoint.value} 
   maxValue={totalMaximum}
   label = {dataPoint.value}
   />))}
    </div>
    );
};

export default Chart;