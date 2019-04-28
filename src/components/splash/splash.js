import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './splash.scss';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true }, () => {
      setTimeout(() => {
        document.getElementById('modal-overlay').classList.add('visible');
      })
    });
  }

  render() {
    return (
      <div className='login'>
        {this.state.modalOpen &&
          <div id='modal-overlay'>
            <div className='modal'>
              <p>By clicking "I agree" you are agreeing </p>
              <Link to='/dashboard'>I Agree</Link>
            </div>
          </div>}
        <header>
          <img src='/favicon.png' alt='Pulse logo' />
          <h1>
            Pulse
          </h1>
        </header>
        <form>
          <input type='text' placeholder='Name' />
          <input type='password' placeholder='Password' />
          <button
            onClick={this.openModal}
            className='login-btn'>
            Login
            </button>
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