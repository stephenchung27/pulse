import React, { Component } from 'react';
import './pill_info.scss';

class PillInfo extends Component {
  render() {
    return (
      <div className='pill-info'
        onClick={(e) => e.stopPropagation()}>
        <img src='/images/pills/1.svg' alt='drug'/>
        <h1>Alfuzosin</h1>
        <h3>150 mg</h3>
        <p>Alfuzosin comes as an extended-release (long-acting) tablet to take by mouth. It is usually taken once a day, immediately after a meal. Do not take alfuzosin on an empty stomach.</p>
      </div>
    )
  }
}

export default PillInfo;