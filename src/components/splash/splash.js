import React, { Component } from 'react';
import { connect } from 'react-redux';

class Splash extends React.Component {
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