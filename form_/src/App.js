import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form";
import View from "./component/View";
import Overlay from "./component/Overlay";
import form from "./component/Form";

export default class App extends Component {
  state = {
    note: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: " ",
      role: "",
    },

    overlay: false,
  };

  sentMessage = () => {
    this.setState({
      note: {
        firstname: "",
        lastname: "",
        phonenumber: "",
        message: " ",
        role: "",
      },
      overlay: false,
    });
  };

  remOverlay = (e) => {
    this.setState({ overlay: !this.state.overlay });
  };

  onsubmit = (e) => {
    e.preventDefault();
    this.setState({ overlay: !this.state.overlay });
    e.target.reset();
  };

  inputhandeler = (e) => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <div className="App">
        <Form inputhandeler={this.inputhandeler} onsubmit={this.onsubmit} />
        <View {...this.state.note} />
        {this.state.overlay && (
          <Overlay
            {...this.state.note}
            remOverlay={this.remOverlay}
            sentMessage={this.sentMessage}
          />
        )}
      </div>
    );
  }
}
