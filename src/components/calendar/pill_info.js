import React, { Component } from 'react';
import { connect } from 'react-redux';
import './pill_info.scss';

class PillInfo extends Component {
  render() {
    return (
      <div className='pill-info'
        onClick={(e) => e.stopPropagation()}>
        <img src={this.props.pills[this.props.pill].picture_path} alt='drug'/>
        <h1>{this.props.pills[this.props.pill].drug}</h1>
        <h3>{this.props.pills[this.props.pill].dose}</h3>
        <p>{this.props.pills[this.props.pill].description}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pills: state.entities.pills,
  }
}

export default connect(mapStateToProps, null)(PillInfo);