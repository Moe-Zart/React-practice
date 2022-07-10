import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    let increment = this.state.counter;
    function Increment(){
        increment++
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={Increment}>Change!</button>
      </div>
    );
  }
}

export default Counter;
