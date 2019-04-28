import React, { Component } from 'react';
import { connect } from 'react-redux';
import './calendar.scss';

class PillIndexItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openModal(this.props.pill);
  }

  render() {
    return (
      <div className='period-item'
      onClick={this.handleClick}>
        <div>
          <h1>{this.props.pills[this.props.pill].drug}</h1>
          <h3>{this.props.pills[this.props.pill].dose}</h3>
        </div>
        <img src={this.props.pills[this.props.pill].picture_path} alt='drug' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pills: state.entities.pills,
  }
}

export default connect(mapStateToProps, null)(PillIndexItem);