import React, { Component } from 'react';

import Log from './log.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.consoleLogs = [
      {_id: 1, text: 'You are in a dark tomb.'},
      {_id: 2, text: 'The air is damp.'},
      {_id: 3, text: 'A skeleton is here.'},
    ];
  }

  renderLogs() {
    return this.consoleLogs.map((log) => (
      <Log key={log._id} text={log.text} />
    ));
  }

  submitCommand() {
    const newLog = {_id: Random.id(), text: 'You are in a dark tomb.'};
    this.consoleLogs.push(newLog);
  }

  render() {
    return (
      <div className="background">
        <div className="console-screen">
          <ul className="console-logs">
            {this.renderLogs()}
          </ul>

          <input type="text"
                 className="console-input"
                 onSubmit={this.submitCommand}>
          </input>
        </div>
      </div>
    );
  }
}
