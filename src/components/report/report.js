import React, { Component } from 'react';
import { connect } from 'react-redux';

class Report extends Component {
  render() {
    return (
     <h1>
       report
     </h1>
    )
  }
}

const msp = (state) => {
  return {
  }
}

const mdp = (dispatch) => {
  return {
  }
}

export default connect(msp, mdp)(Report);