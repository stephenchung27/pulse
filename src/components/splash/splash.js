import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './splash.scss';

class Splash extends Component {
  render() {
    return (
      <div className='login'>
        <img src='/favicon.png' />
        <form>
          <input type='text' placeholder='Name' />
          <input type='password' placeholder='Password' />
          <Link to='/dashboard'>
            <button className='login-btn'>
              Login
            </button>
          </Link>
          <a href='#' className='forgot-password'>Forgot password?</a>
        </form>
        <button className='signup-btn'>
          <h1>Sign Up</h1>
          <i className='material-icons'>keyboard_arrow_right</i>
        </button>
      </div>
    )
  }
}

export default Splash;