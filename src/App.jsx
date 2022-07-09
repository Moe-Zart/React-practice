import React, {Component} from "react";
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
          <div className="message"><Greeting/>!</div>
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
  render(props) {
    //note: always use 'this' for objects in aclass
    return (
      <header>
        <p>Weclome, {this.props.username}!</p>
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
    return (message);
  }
}
export default App;
