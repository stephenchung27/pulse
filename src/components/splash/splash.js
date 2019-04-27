import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './splash.scss';

class Splash extends Component {
  render() {
    return (
      <div className='login'>
        <header>
          <img src='/favicon.png' alt='Pulse logo' />
          <h1>
            Pulse
          </h1>
        </header>
        <form>
          <input type='text' placeholder='Name' />
          <input type='password' placeholder='Password' />
          <Link to='/dashboard'>
            <button className='login-btn'>
              Login
            </button>
          </Link>
          <a href='/' className='forgot-password'>Forgot password?</a>
          <button className='signup-btn'>
            <h1>Sign Up</h1>
            <i className='material-icons'>keyboard_arrow_right</i>
          </button>
        </form>
      </div>
    )
  }
}

export default Splash;