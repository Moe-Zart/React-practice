import React from "react";

const Joke = (props) => {
  return (
    <div className="joke">
      <h3
        className="question"
        style={{ display: !props.question ? "none" : "block" }}
      >
        Question: {props.question}
      </h3>
      <h3 className="punchline">Answer: {props.punchLine}</h3>
    </div>
  );
};

export default Joke;
