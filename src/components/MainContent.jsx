import React from "react";
import Joke from "./Joke";
const MyInfo = () => {
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
      <Joke
        question="Whats the difference between a snowman and snowwoman?"
        punchLine="Snowballs"
      />
      <Joke
        question="Why couldn't the bicycle stand up"
        punchLine="Because it was two tired!"
      />
      <Joke punchLine="To the person who stole my copy of Microsoft Office, I will find you. You have my word." />
    </main>
  );
};

export default MyInfo;
