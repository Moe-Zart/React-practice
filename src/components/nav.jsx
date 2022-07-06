import React from "react";

const Nav = () => {
  const logo = "MZ" //just for the sake of using javascript
  return (
    <nav>
      <h3 className="logo">{logo}</h3>
      <ul className="nav-links">
        <li className="nav-link">one</li>
        <li className="nav-link">two</li>
        <li className="nav-link">three</li>
      </ul>
    </nav>
  );
};

export default Nav;
