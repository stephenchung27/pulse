import React, { Component } from 'react';
import { LineChart, Line, YAxis, Tooltip, XAxis, CartesianGrid } from 'recharts';

class Chart extends Component {
  render() {
    const width = window.innerWidth - 10;
    const height = window.innerHeight * 0.65;

    let line1;
    let line2 = null;
    let smallest;
    let biggest;
    let ticks;
    if (this.props.type === "bloodPressure") {
      line1 = <Line type="monotone" dataKey="systolic" stroke="#FFFFFF" dot={false} strokeWidth={4} />
      line2 = <Line type="monotone" dataKey="diastolic" stroke="#FFFFFF" dot={false} strokeWidth={4} />
      ticks = [72, 98, 124, 150]
      smallest = 72;
      biggest = 150;
    }
    else if (this.props.type === 'heartRate') {
      line1 = <Line type="monotone" dataKey="BPM" stroke="#FFFFFF" dot={false} strokeWidth={4} />
      ticks = [56, 66, 76, 86, 96]
      smallest = 56;
      biggest = 95;
    }
    else if (this.props.type === 'steps') {
      line1 = <Line type="monotone" dataKey="steps" stroke="#FFFFFF" dot={false} strokeWidth={4} />
      ticks = [450, 620, 790, 960, 1130, 1300];
      smallest = 450;
      biggest = 1300;
    }
    // else if (this.props.type === 'glucose') {
    //   line1 = <Line type="monotone" dataKey="glucose" stroke="#FFFFFF" dot={false} strokeWidth={3} />
    //   smallest = 97;
     //   biggest = 130;
    // }

    let timeTicks = [1, 5, 9, 13, 17, 21, 25, 29];

    return (
      <>
        <LineChart width={width} height={height} data={this.props.data}
          margin={{ top: 20, right: 0, bottom: 0, left: -10 }}>
          <XAxis tickLine={false} tickMargin={10}
            tick={{ fontSize: 15, fontWeight: 700, fill: '#FFF' }}
            ticks={timeTicks} />
          <CartesianGrid stroke="#eee" vertical={false}/>
          <YAxis tickSize={4} domain={[smallest, biggest]}
            tickLine={false}
            tick={{ fontSize: 15, fontWeight: 700, fill: '#FFF' }}
            ticks={ticks} axisLine={false} tickMargin={10} />
          <Tooltip contentStyle={{ backgroundColor: 'purple', border: '0', borderRadius: "5px" }} />
          {line1}
          {line2}
        </LineChart>
      </>
    )
  }
}

export default Chart;