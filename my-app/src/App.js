import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form";
import View from "./component/View";
import Overlay from "./component/Overlay";
import form from "./component/Form";

export default class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: " ",
    role: "",
    overlay: false,
  };

  sentMessage = () => {
    this.setState({
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: " ",
      role: "",
      overlay: false,
    });
  };

  remOverlay = (e) => {
    this.setState({ overlay: false });
  };

  onsubmit = (e) => {
    e.preventDefault();
    this.setState({ overlay: true });
    e.target.reset();
  };

  inputhandeler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Form inputhandeler={this.inputhandeler} onsubmit={this.onsubmit} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role}
        />
        {this.state.overlay && (
          <Overlay
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            message={this.state.message}
            role={this.state.role}
            remOverlay={this.remOverlay}
            sentMessage={this.sentMessage}
          />
        )}
      </div>
    );
  }
}
