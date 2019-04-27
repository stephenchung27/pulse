import React, { Component } from 'react';
import { connect } from 'react-redux';

class Today extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Your pills to take today...</h1>
        </header>
        <section>
          <h1 className='time'>12:00 PM</h1>
          <div className='pills-container'>
            <div className='pill-item'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
            </div>
            <div className='pill'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
            </div>
            <div className='pill'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
            </div>
          </div>
          <h1 className='time'>12:00 PM</h1>
          <div className='pills-container'>
            <div className='pill-item'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
            </div>
            <div className='pill'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
            </div>
            <div className='pill'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
            </div>
          </div>
          <h1 className='time'>12:00 PM</h1>
          <div className='pills-container'>
            <div className='pill-item'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
            </div>
            <div className='pill'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
            </div>
            <div className='pill'>
              <h1>Advil</h1>
              <img src='/images/pills/advil.png' alt='Advil'/>
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

export default connect(msp, mdp)(Today);