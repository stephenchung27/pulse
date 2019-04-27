import React, { Component } from 'react';
import { connect } from 'react-redux';
import './dashboard.scss';

class Dashboard extends Component {
  render() {
    const name = 'Mary';
    const pill = {
      name: "Advil",
      time: "12:00 PM"
    };

    return (
      <div className='dashboard'>
        <header>
          <h1>Hello {name},</h1>
          <i className='material-icons'>account_circle</i>
        </header>
        <section className='pills'>
          <h1>Take your next pills</h1>
          <h1 className='time'>9:00 PM</h1>
          <section className='pill-view'>
            <div className='pill-view-item'>
              <img src='/images/pills/1.svg' />
              <div className='pill-details'>
                <h1>HTP-5</h1>
                <h3>150 mg</h3>
              </div>
            </div>
            <div className='pill-view-item'>
              <img src='/images/pills/2.svg' />
              <div className='pill-details'>
                <h1>HTP-5</h1>
                <h3>150 mg</h3>
              </div>
            </div>
            <div className='pill-view-item'>
              <img src='/images/pills/3.svg' />
              <div className='pill-details'>
                <h1>HTP-5</h1>
                <h3>150 mg</h3>
              </div>
            </div>
            <div className='pill-view-item'>
              <img src='/images/pills/4.svg' />
              <div className='pill-details'>
                <h1>HTP-5</h1>
                <h3>150 mg</h3>
              </div>
            </div>
          </section>
        </section>
        <h1 className='divider'>Your daily report</h1>
        <section className='notifications'>
          <div className='notification-item'>
            <img src='/images/arrow_down.svg' />
            <p>Your new prescription bmp 35 mg decrease blood pressure by 10%.</p>
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