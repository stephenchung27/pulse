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
    <section className="report">
      <h2 className="report-title">
        Report
      </h2>
      <div className="buttons">
        <div onClick={this.handleChange("bloodPressure")} className="data-type active">
            Blood Pressure
        </div>
        <div onClick={this.handleChange("heartRate")} className="data-type">
            Heart Rate
        </div>
        <div onClick={this.handleChange("steps")} className="data-type">
            Steps
        </div>
      </div>
      < Chart data={this.props.report[this.state.type]} type={this.state.type} />
    </section>
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
