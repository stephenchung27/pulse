import React, { Component } from 'react';
import { LineChart, Line, YAxis, Tooltip, XAxis } from 'recharts';

class Chart extends Component {
  render() {
    const width = window.innerWidth*0.9;
    
    let line1;
    let line2 = null;
    let smallest;
    let biggest;
    if (this.props.type === "bloodPressure") {
      line1 = <Line type="monotone" dataKey="systolic" stroke="#8884d8" dot={false} strokeWidth={3} />
      line2 = <Line type="monotone" dataKey="diastolic" stroke="#756234" dot={false} strokeWidth={3} />
      smallest = 70;
      biggest = 150;
    } 
    else if (this.props.type === 'heartRate') {
      line1 = <Line type="monotone" dataKey="BPM" stroke="#8884d8" dot={false} strokeWidth={3} />
    } 
    else if (this.props.type === 'steps') {
      line1 = <Line type="monotone" dataKey="steps" stroke="#8884d8" dot={false} strokeWidth={3} />
    }
    else if (this.props.type === 'glucose') {
      line1 = <Line type="monotone" dataKey="glucose" stroke="#8884d8" dot={false} strokeWidth={3} />
    }
    return (
     <>
       <LineChart width={width} height={100} data={this.props.data} >
        <XAxis/>
        <YAxis domain={[smallest, biggest]} />/>
        <Tooltip contentStyle={{ backgroundColor: 'purple', border: '0', borderRadius: "5px" }}/>
        {line1}
        {line2}
      </LineChart>
     </>
    )
  }
}

export default Chart;