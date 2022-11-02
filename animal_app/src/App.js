import React, { Component } from "react";
import { animals } from "./Animal";
import Card from "./Card";

export default class App extends Component {
  state = { animals: animals, search: "" };
  removeHandeler = (name) => {
    const UpdatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: UpdatedArray });
  };

  addHandeler = (name) => {
    this.setState((state) => {
      let UpdatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return { animals: UpdatedArray };
    });
  };

  searchHandeler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.includes(this.state.search);
    });

    const animalList = animalFilter.map((animal) => (
      <Card
        name={animal.name}
        likes={animal.likes}
        key={animal.name}
        removeCard={() => this.removeHandeler(animal.name)}
        addLikes={() => this.addHandeler(animal.name)}
      />
    ));
    return (
      <div>
        <div>
          {" "}
          <h1> {this.state.animals.length} Animal</h1>
          <input onChange={this.searchHandeler} />
        </div>
        <div className="container">{animalList}</div>
      </div>
    );
  }
}
