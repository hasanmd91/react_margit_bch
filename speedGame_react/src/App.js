import React, { Component } from "react";
import Circle from "./components/Circle";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="conatiner">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
    );
  }
}
