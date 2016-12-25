import React, { Component, PropTypes } from 'react';

export default class Log extends Component {
  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}

Log.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  text: PropTypes.object.isRequired,
};