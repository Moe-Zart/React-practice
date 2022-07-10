import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    //Javascript
    const websiteFramework = "React";
    const websiteTitle = "Practice";
    //
    //HTML
    return (
      <div className="App">
        <div className="javascript-bar">
          <div>{websiteFramework + "-" + websiteTitle}</div>
          <div className="message">
            <Greeting />!
          </div>
        </div>
        <Nav />
        <Header username="Mohamed" />
        <MainContent />
        <Footer />
      </div>
    );
    //
  }
}

class Header extends React.Component {
  //when using a constructor, always add super
  constructor() {
    super();
    this.state = {
      addressTitle: "Master",
      //This state is like props, except it can be changed
    };
  }
  render(props) {
    //note: always use 'this' for objects in aclass
    return (
      <header>
        <p>
          Weclome, {this.state.addressTitle} {this.props.username}!
        </p>
        <Logged />
      </header>
    );
  }
}

class Greeting extends React.Component {
  render() {
    let message = "Good ";
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      message += "Morning";
    } else if (hours >= 12 && hours < 17) {
      message += "Afternoon";
    } else {
      message += "Night";
    }
    return message;
  }
}

class Logged extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      this.state.isLoggedIn = "in";
    } else {
      this.state.isLoggedIn = "out";
    }
    return (
      <div>
        <p>You are currently logged {this.state.isLoggedIn}</p>
      </div>
    );
  }
}

export default App;
