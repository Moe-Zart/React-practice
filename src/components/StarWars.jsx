import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      character: {},
    };
  }
  async componentDidMount() {
    const starData = await fetch("https://swapi.dev/api/people/3");
    const starComponents = await starData.json();
    this.setState({
      character: starComponents,
    });
  }
  render() {
    return (
      <div className="star-container">
        <h2 className="starwars-title">my favourite starwars character is:</h2>
        <h3 className="starwars-character">{this.state.character.name}</h3>
      </div>
    );
  }
}

export default StarWars;
