import React, { Component } from 'react';
import { connect } from 'react-redux';
import './calendar.scss';

class PillIndexItem extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openModal(this.props.pill, this.ref);
  }

  render() {
    return (
      <div className='period-item-container' ref={this.ref}
        onClick={this.handleClick}>
        <div className='period-item'>
          <div>
            <h1>{this.props.pills[this.props.pill].drug}</h1>
            <h3>{this.props.pills[this.props.pill].dose}</h3>
          </div>
          <img src={this.props.pills[this.props.pill].picture_path} alt='drug' />
        </div>
        {this.props.pills[this.props.pill].warning && 
          <div className='warning'>{this.props.pills[this.props.pill].warning}</div>
        }
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