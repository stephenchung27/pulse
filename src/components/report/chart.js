import React, { Component } from 'react';

class Chart extends Component {
  render() {
    return (
     <h1>
       {this.props.data}
     </h1>
    )
  }
}

export default Chart;