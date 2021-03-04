//for the class
import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {WelcomeFunction("mauricio")}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//Stateless Functional Component (es6 class)
export default App;
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello,{this.props.name}</h1>;
  }
}
//javascript function
function WelcomeFunction(props) {
  return <h1>Hola, {props.name}</h1>;
}
