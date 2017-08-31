import React, { Component } from 'react';

class ClockForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textData: 'chris is a dork'
    };
  }

  render() {
    return (
      <form onSubmit={this._doSubmit}>

        <input
          type="text"
          value={this.state.textData}
          onChange={this._doTextInput}
        />

        <input type="submit" />
      </form>
    );
  }

  _doTextInput = (event) => {
    let val = event.target.value;
    this.setState({
      textData: val
    });
  }

  _doSubmit = (event) => {
    event.preventDefault();
    this.props.formHandler(this.state.textData);
  }
}

export default ClockForm;