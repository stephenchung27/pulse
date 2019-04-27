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
              <img src='/images/pills/HTP5.svg' />
              <h1>HTP-5</h1>
              <h3>150 mg</h3>
            </div>
            <div className='pill-view-item'>
              <img src='/images/pills/HTP5.svg' />
              <h1>HTP-5</h1>
              <h3>150 mg</h3>
            </div>
            <div className='pill-view-item'>
              <img src='/images/pills/HTP5.svg' />
              <h1>HTP-5</h1>
              <h3>150 mg</h3>
            </div>
          </section>
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