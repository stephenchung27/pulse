import React, { Component } from 'react';
import { LineChart, Line, YAxis, Tooltip, XAxis, CartesianGrid } from 'recharts';

class Chart extends Component {
  render() {
    const width = window.innerWidth*0.8;
    const height = window.innerHeight*0.65;
    
    let line1;
    let line2 = null;
    let smallest;
    let biggest;
    if (this.props.type === "bloodPressure") {
      line1 = <Line type="monotone" dataKey="systolic" stroke="#FFFFFF" dot={false} strokeWidth={3} />
      line2 = <Line type="monotone" dataKey="diastolic" stroke="#FFFFFF" dot={false} strokeWidth={3} />
      smallest = 72;
      biggest = 150;
    } 
    else if (this.props.type === 'heartRate') {
      line1 = <Line type="monotone" dataKey="BPM" stroke="#FFFFFF" dot={false} strokeWidth={3} />
      smallest = 56;
      biggest = 95;
    } 
    else if (this.props.type === 'steps') {
      line1 = <Line type="monotone" dataKey="steps" stroke="#FFFFFF" dot={false} strokeWidth={3} />
      smallest = 450;
      biggest = 1300;
    }
    else if (this.props.type === 'glucose') {
      line1 = <Line type="monotone" dataKey="glucose" stroke="#FFFFFF" dot={false} strokeWidth={3} />
      smallest = 97;
      biggest = 130;
    }

    let ticks = [];
    for (let i = smallest; i < biggest; i += Math.floor((biggest-smallest) / 30)) {
      ticks.push(i);
    }

    const dateTicks = ["4/22","4/23","4/24","4/25","4/26","4/27","4/28","4/29"]
  
    return (
     <>
       <LineChart width={width} height={height} data={this.props.data} 
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <XAxis ticks={dateTicks} />
        <CartesianGrid stroke="#eee" />
        <YAxis tickSize={4} domain={[smallest, biggest]} ticks={ticks} axisLine={false}/>
        <Tooltip contentStyle={{ backgroundColor: 'purple', border: '0', borderRadius: "5px" }}/>
        {line1}
        {line2}
      </LineChart>
     </>
    )
  }
}

export default Chart;