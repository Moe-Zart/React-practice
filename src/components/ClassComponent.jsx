import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mohamed",
      age: 19,
    };
  }
  render() {
    return (
      <div>
        <h3>This was rendered by:</h3>
        <div>
          <h1>{this.state.name}</h1>
          <h3>{this.state.age} years old</h3>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
