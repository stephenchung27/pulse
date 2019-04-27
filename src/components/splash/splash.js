import React, { Component } from 'react';
import { connect } from 'react-redux';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  

    return (
     <h1>
       splashy
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

export default connect(msp, mdp)(Splash);