import React, { Component } from 'react';
import { LineChart, Line, YAxis, Legend, Tooltip, XAxis, CartesianGrid } from 'recharts';

class Chart extends Component {
  render() {
    const data = [];
    debugger
    this.props.data.forEach( (day, i) => {
      if (i % 5 === 0) {
        data.push({name: i, value: day});
      } else {
        data.push({ name: "", value: day})
      }
    });

    const width = window.innerWidth*0.9;
    return (
     <>
       <LineChart width={width} height={150} data={data} >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: 'blue', border: '0', borderRadius: "5px" }}/>
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} strokeWidth={3} />
      </LineChart>
     </>
    )
  }
}

export default Chart;