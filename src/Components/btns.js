import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.descrement = this.descrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  descrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment} className="btn btn-success">
          +
        </button>
        <button onClick={this.descrement} button className="btn btn-danger">
          -
        </button>
      </div>
    );
  }
}
