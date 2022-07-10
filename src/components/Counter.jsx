import React from "react";

class Counter extends React.Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
  render() {
    let increment = this.state.counter
    if(increment){
        increment++
    }
    return <div>
        <h1>{increment}</h1>
        <button>Change!</button>
    </div>;
  }
}

export default Counter;
