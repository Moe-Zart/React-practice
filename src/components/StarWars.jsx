import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      character: {},
      loading: false, // start loading with false
    };
  }
  async componentDidMount() {
    this.setState({ loading: true }); //set loading to true until the api is called
    const starData = await fetch("https://swapi.dev/api/people/3");
    const starComponents = await starData.json();
    this.setState({
      character: starComponents,
      loading: false //set loading back to false since the api is now called
    });
  }
  render() {
    return (
      <div className="star-container">
        <h2 className="starwars-title">my favourite starwars character is:</h2>
        <h3 className="starwars-character">
          {this.state.loading ? "Loading..." : this.state.character.name}
        </h3>
      </div>
    );
  }
}

export default StarWars;
