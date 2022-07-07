import React from "react";

const Joke = (props) => {
  return (
    <div className="Jokes">
      <h3 style={{display: !props.question ? "none" : "block"}}>Question: {props.question}</h3>
      <h3>Answer: {props.punchLine}</h3>
    </div>
  );
};

export default Joke;
