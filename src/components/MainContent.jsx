import React from "react";

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
    </main>
  );
};

export default MyInfo;
