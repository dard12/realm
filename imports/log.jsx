import React, { Component, PropTypes } from 'react';

export default class Log extends Component {
  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}

Log.propTypes = {
  text: PropTypes.string.isRequired,
};
