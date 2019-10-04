import React from "react";
import {players} from './players';
import {
  BarChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function Chart(props) => {
    
    return( 
        <div>
            <h3>Player Origins</h3>
            <BarChart 
                data={props.country} 
                width={600} 
                height={270} 
                className='barchart'>
                <XAxis dataKey = 'country'/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="country" stroke="#8884d8" />
            </BarChart>
        </div>
)}

