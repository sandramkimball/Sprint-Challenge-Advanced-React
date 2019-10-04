import React from "react";
import {
  BarChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function Chart(props) {
    return( 
        <div>
            <h3>Player Nations</h3>
            <BarChart 
                data={props.countries} 
                width={600} 
                height={270} 
                className='barchart'>
                <CartesianGrid stroke='#e6e6e6' strokeDasharray='5 5' />
                <XAxis dataKey = 'country'/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="players" stroke="#8884d8" />
            </BarChart>
        </div>
)}

export default Chart;