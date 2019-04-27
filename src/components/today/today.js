import React, { Component } from 'react';
import { connect } from 'react-redux';

class Today extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <h1>
       dashbard
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

export default connect(msp, mdp)(Today);