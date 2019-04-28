import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 70
    }
  }

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('dashboard').classList.add('visible');
    }, 0);

    this.interval = setInterval(() => {
      this.setState({ bpm: (this.state.bpm + Math.floor(Math.random() * 3) - 1) })
    }, 1750);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const name = 'Mary';

    return (
      <div id='dashboard'>
        <header>
          <h1>Hello {name},</h1>
          <i className='material-icons'>account_circle</i>
        </header>
        <section className='pills'
        onClick={() => {
          document.getElementById('dashboard').classList.remove('visible');
          setTimeout(() => this.props.history.push('/calendar'), 500);
        }}>
          <h1>Take your next pills</h1>
          <h1 className='time'>9:00 PM</h1>
          <section className='pill-view' onClick={(e) => e.stopPropagation()}>
            <div className='pill-view-item'>
              <img src='/images/pills/1.svg' alt='drug' />
              <div className='pill-details'>
                <h1>HTP-5</h1>
                <h3>150 mg</h3>
              </div>
            </div>
            <div className='pill-view-item'>
              <img src='/images/pills/2.svg' alt='drug' />
              <div className='pill-details'>
                <h1>HTP-5</h1>
                <h3>150 mg</h3>
              </div>
            </div>
            <div className='pill-view-item'>
              <img src='/images/pills/3.svg' alt='drug' />
              <div className='pill-details'>
                <h1>HTP-5</h1>
                <h3>150 mg</h3>
              </div>
            </div>
            <div className='pill-view-item'>
              <img src='/images/pills/4.svg' alt='drug' />
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
            <img src='/images/arrow_down.svg' alt='drug' />
            <p>Your new prescription bmp 35 mg decrease blood pressure by 10%.</p>
          </div>
        </section>
        <section className='realtime'>
          <h3>Realtime</h3>
          <section>
            <div className='pulse'>
              <div className='pulse1'></div>
              <div className='pulse2'></div>
              <div className='pulse3'></div>
              <div className='pulse4'></div>
              <div className='pulse5'></div>
              <div className='pulse6'></div>
              <div className='pulse7'></div>
              <div className='pulse8'></div>
              <div className='pulse9'></div>
              <div className='pulse10'></div>
            </div>
            <h1>{this.state.bpm}<span>bpm</span></h1>
          </section>
        </section>
        <h1 className='divider'>Key metrics</h1>
        <section className='key-metrics'>
          <div className='stat-item'>
            <h1 className='title'>Steps</h1>
            <h1 className='number'>4,265</h1>
            <h1 className='unit'>steps</h1>
          </div>
          <div className='stat-item'>
            <h1 className='title'>Heart Rate</h1>
            <h1 className='number'>100</h1>
            <h1 className='unit'>bpm</h1>
          </div>
          <div className='stat-item'>
            <h1 className='title'>Blood Pressure</h1>
            <h1 className='number'>110</h1>
            <h1 className='unit'>mmHg</h1>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouter(Dashboard);