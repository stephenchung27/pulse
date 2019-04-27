import React, { Component } from 'react';
import { connect } from 'react-redux';

class Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <h1>
<<<<<<< HEAD:src/components/daily_report/daily_report.js
       Report
=======
       report
>>>>>>> 60bd4875f141e4f58335096b63acc0ccb71890c4:src/components/report/report.js
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

<<<<<<< HEAD:src/components/daily_report/daily_report.js
export default connect(mapStateToProps, mapDisptachToProps)(Report);
=======
export default connect(msp, mdp)(Report);
>>>>>>> 60bd4875f141e4f58335096b63acc0ccb71890c4:src/components/report/report.js
