import React, { Component } from 'react';
import { connect } from 'react-redux';

class Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <h1>
       Report
     </h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Report);