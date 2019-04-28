import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PillInfo from './pill_info';
import './calendar.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      drugId: null,
    }

    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('calendar').classList.add('visible');
    });
  }

  closeModal() {
    document.getElementById('modal-overlay').classList.remove('visible');

    setTimeout(() => this.setState({ modalOpen: false }), 500);
  }

  openModal(drugId) {
    return () => {
      this.setState({
        modalOpen: true,
        drugId
      }, () => {
        setTimeout(() => document.getElementById('modal-overlay').classList.add('visible'));  
      });
    }
  }

  render() {
    return (
      <div id='calendar'>
        {this.state.modalOpen &&
          <div id='modal-overlay'
            onClick={this.closeModal}>
            <PillInfo closeModal={this.closeModal} drugId={this.state.drugId} />
          </div>
        }
        <header>
          <button
            onClick={() => {
              document.getElementById('calendar').classList.remove('visible');

              setTimeout(() => this.props.history.goBack(), 500);
            }}
            className='back'
          >
            <i className='material-icons'>keyboard_arrow_left</i>
          </button>
          <h1>Pill Calendar</h1>
        </header>
        <div className='date'>
          <div>
            <h2>APR</h2>
            <h1>17</h1>
          </div>
        </div>
        <section className='period'>
          <header className='blue'>
            <h1>9:00 AM</h1>
          </header>
          <main>
            <div className='period-item'
              onClick={this.openModal(1)}>
              <div>
                <h1>Alfuzosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/1.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Doxazosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/2.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Silodosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/3.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Tamsulosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/4.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Terazosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/2.svg' alt='drug' />
            </div>
          </main>
        </section>
        <section className='period'>
          <header className='purple'>
            <h1>9:00 AM</h1>
          </header>
          <main>
            <div className='period-item'>
              <div>
                <h1>Alfuzosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/1.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Doxazosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/2.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Silodosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/3.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Tamsulosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/4.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Terazosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/2.svg' alt='drug' />
            </div>
          </main>
        </section>
        <section className='period'>
          <header className='red'>
            <h1>9:00 AM</h1>
          </header>
          <main>
            <div className='period-item'>
              <div>
                <h1>Alfuzosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/1.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Doxazosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/2.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Silodosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/3.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Tamsulosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/4.svg' alt='drug' />
            </div>
            <div className='period-item'>
              <div>
                <h1>Terazosin</h1>
                <h3>150 mg</h3>
              </div>
              <img src='/images/pills/2.svg' alt='drug' />
            </div>
          </main>
        </section>
      </div>
    )
  }
}

export default withRouter(Calendar);