import React, { Component } from 'react';

import Log from './log.jsx';

// App component - represents the whole app
export default class App extends Component {
  getLogs() {
    return [
      { _id: 1, text: 'You are in a dark tomb.' },
      { _id: 2, text: 'The air is damp.' },
      { _id: 3, text: 'A skeleton is here.' },
    ];
  }

  renderLogs() {
    return this.getLogs().map((log) => (
      <Log key={log._id} text={log.text} />
    ));
  }

  render() {
    return (
      <div className="background">
        <div className="console-screen">
          <ul className="console-logs">
            {this.renderLogs()}
          </ul>

          <input type="text" className="console-input"></input>
        </div>
      </div>
    );
  }
}