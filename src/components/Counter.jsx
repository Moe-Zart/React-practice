import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this); //must bind in order to use the setState method
  }
  handleClick() {
    //setState is used to change the state
    this.setState((prev) => {
      //prev represents the counter before the the state is changed
      return {
        counter: prev.counter + 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default Counter;
