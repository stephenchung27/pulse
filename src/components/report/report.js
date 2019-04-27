import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReport } from '../../actions/report_actions';
import Chart from './chart';
import './report.css'

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
    if (!Object.values(this.props.report).length) return null;

    return (
    <>
      <h1 className="data-title">
        {this.state.type}
      </h1>

      < Chart data={this.props.report[this.state.type]} type={this.state.type} />
      <div className="buttons">
        <div onClick={this.handleChange("bloodPressure")} className="data-type">
            BloodPressure
        </div>
        <div onClick={this.handleChange("heartRate")} className="data-type">
            HeartRate
        </div>
        <div onClick={this.handleChange("steps")} className="data-type">
            Steps
        </div>
        <div onClick={this.handleChange("glucose")} className="data-type">
            Glucose
        </div>
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
