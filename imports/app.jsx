import React, { Component } from 'react';
import { Random } from 'meteor/random';

import Log from './log.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.submitCommand = this.submitCommand.bind(this);

    this.state = {
      logs: [
        {_id: Random.id(), text: 'You are in a dark tomb.'},
        {_id: Random.id(), text: 'The air is damp.'},
      ],
    };
  }

  renderLogs() {
    return this.state.logs.map((log) => (
      <Log key={log._id} text={log.text} />
    ));
  }

  submitCommand(event) {
    event.preventDefault();
    const commandInput = this.refs.command;
    const logs = this.state.logs;
    const newLog = {_id: Random.id(), text: commandInput.value};
    logs.push(newLog);

    this.setState({logs});

    commandInput.value = '';
  }

  render() {
    return (
      <div className="background">
        <div className="console-screen">
          <ul className="console-logs">
            {this.renderLogs()}
          </ul>

          <form onSubmit={this.submitCommand}>
            <input type="text" className="console-input" ref="command"/>
          </form>
        </div>
      </div>
    );
  }
}
