import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPills } from '../../actions/pill_actions';
import PillInfo from './pill_info';
import PillIndexItem from './pill_index_item'
import Footer from '../footer';
import './calendar.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      drugId: null,
      topPosition: 50,
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchPills();
    setTimeout(() => {
      document.getElementById('calendar').classList.add('visible');
    });
  }

  closeModal() {
    document.getElementById('modal-overlay').classList.remove('visible');

    setTimeout(() => this.setState({ modalOpen: false }), 500);
  }

  openModal(drugName, domElement) {
    this.setState({
      modalOpen: true,
      drugName,
      topPosition: domElement.current.offsetTop,
    }, () => {
      setTimeout(() => {
        console.log(domElement.current.offsetTop)
        // document.getElementById('pill-info').style.cssText = `top': ${domElement.current.offsetTop}`
        return document.getElementById('modal-overlay').classList.add('visible');
      });
    }
    )}

  render() {
    if (!this.props.pills) return null;

    const pills = Object.keys(this.props.pills).map((pill, i) => {
      return <PillIndexItem pill={pill} openModal={this.openModal} key={i} />
    })

    return (
      <div id='calendar'>
        {this.state.modalOpen &&
          <div id='modal-overlay'
            onClick={this.closeModal}>
            <PillInfo closeModal={this.closeModal} pill={this.state.drugName} topPos={this.state.topPosition}/>
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
            <h1>28</h1>
          </div>
        </div>
        <section className='period'>
          <header className='blue'>
            <h1>8:00 AM</h1>
          </header>
          <main>
            {pills}
          </main>
        </section>
        <section className='period'>
          <header className='purple'>
            <h1>3:00 PM</h1>
          </header>
          <main>
            {pills}
          </main>
        </section>
        <section className='period'>
          <header className='red'>
            <h1>9:00 PM</h1>
          </header>
          <main>
            {pills}
          </main>
        </section>
        <Footer />
      </div>
    )
  }
}

const msp = (state) => {
  return {
    pills: state.entities.pills,
  }
}

const mdp = (dispatch) => {
  return {
    fetchPills: () => dispatch(fetchPills()),
  }
}

export default withRouter(connect(msp, mdp)(Calendar));