import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const name = 'Mary';
    const pill = {
      name: "Advil",
      time: "12:00 PM"
    };

    return (
      <div>
        <header>
          <h1>Hey {name},</h1>
        </header>
        <section>
          <div className='dashboard-item pills'>
            <h3>Take your {pill.name}</h3>
            <h3>{pill.time}</h3>
            <img src='/images/pills/advil.png' alt={"picture of " + pill.name} />
          </div>
          <div className='dashboard-item report'>
            <header>
              <h3>Your daily report</h3>
            </header>
            <div className='report-item'>
              <h3>Heart Rate:</h3>
              <h3>76 BPM</h3>
            </div>
            <div className='report-item'>
              <h3>Heart Rate:</h3>
              <h3>76 BPM</h3>
            </div>
            <div className='report-item'>
              <h3>Heart Rate:</h3>
              <h3>76 BPM</h3>
            </div>
          </div>
        </section>
      </div>
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

export default connect(msp, mdp)(Dashboard);