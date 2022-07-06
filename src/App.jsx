import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  //Javascript
  const websiteFramework = "React";
  const websiteTitle = "Practice";

  const date = new Date();
  const hours = date.getHours();
  let message = "Good";
  if (hours < 12) {
    message += " Morning";
  } else if (hours >= 12 && hours < 17) {
    message += " Afternoon";
  } else {
    message += " Night";
  }
  //
  //HTML
  return (
    <div className="App">
      <div className="javascript-bar">
        <div>{websiteFramework + "-" + websiteTitle}</div>
        <div>{message + "!"}</div>
      </div>
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
  //
}

export default App;
