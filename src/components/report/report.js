import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReport } from '../../actions/report_actions';
import Chart from './chart';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "bloodPressure" };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchReport();
  }

  handleChange(type) {
    return (e) => this.setState({ type });
  }

  render() {
    if (!this.props.report.steps) return null;

    return (
    <>
      <h1>
        {this.state.type}
      </h1>

      < Chart data={this.props.report[this.state.type]} />
      <div onClick={this.handleChange("bloodPressure")}>
          BloodPressure
      </div>
      <div onClick={this.handleChange("heartRate")}>
          HeartRate
      </div>
      <div onClick={this.handleChange("steps")}>
          Steps
      </div>
      <div onClick={this.handleChange("glucose")}>
          Glucose
      </div>
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    report: state.entities.report,
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    fetchReport: () => dispatch(fetchReport()),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Report);
