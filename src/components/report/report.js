import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReport } from '../../actions/report_actions';
import { withRouter } from 'react-router-dom';
import Chart from './chart';
import './report.scss'

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = { type: this.props.currentReport };

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
        <header>
          <i className='material-icons'
          onClick={() => {
            this.props.history.goBack();
          }}>
          keyboard_arrow_left
          </i>
          <h2 className="report-title">Daily Report</h2>
        </header>
        <div className="buttons">
          <div onClick={this.handleChange("bloodPressure")} 
          className={"data-type " + (this.state.type === "bloodPressure" && " active")}>
            Blood Pressure
        </div>
          <div onClick={this.handleChange("heartRate")} 
            className={"data-type " + (this.state.type === "heartRate" && " active")}>
            Heart Rate
        </div>
          <div onClick={this.handleChange("steps")} 
            className={"data-type " + (this.state.type === "steps" && " active")}>
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
    currentReport: state.entities.currentReport,
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    fetchReport: () => dispatch(fetchReport()),
  }
}

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(Report));
