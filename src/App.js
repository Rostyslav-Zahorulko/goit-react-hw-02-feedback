import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGoodBtn = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleClickNeutralBtn = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleClickBadBtn = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div>
        <b>Please leave feedback</b>

        <button type="button" onClick={this.handleClickGoodBtn}>
          Good
        </button>
        <button type="button" onClick={this.handleClickNeutralBtn}>
          Neutral
        </button>
        <button type="button" onClick={this.handleClickBadBtn}>
          Bad
        </button>

        <h2>Statistics</h2>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default App;
