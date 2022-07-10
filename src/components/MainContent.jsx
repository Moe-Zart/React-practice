import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";
import ClassComponent from "./ClassComponent";
import Counter from "./Counter";
const MyInfo = () => {
  const jokeComponents = jokesData.map((joke)=> <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
  //here we map through the jokesData and make each joke have the question from the jokesData and the punchline, while maintaining the properties of Joke.jsx
  return (
    <main>
      <div className="container">
        <h1 className="myName">Mohamed Zreika</h1>
        <p className="myBlurb">
          I am a self-taught frontend software developer who wants to learn
          react
        </p>
        <ul className="myVacationList">
          My Top 3 vacation spots:
          <li className="myVacationSpot">Switzerland</li>
          <li className="myVacationSpot Dubai">Dubai</li>
          <li className="myVacationSpot">Italy</li>
        </ul>
      </div>
      <div className="jokes-container">
        <h2>My Jokes</h2>
        <div className="jokes">
          {jokeComponents}
        </div>
      </div>
      <ClassComponent />
      <Counter />
    </main>
  );
};

export default MyInfo;
