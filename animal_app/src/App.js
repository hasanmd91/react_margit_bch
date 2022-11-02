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

  removeAdd = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes - 1 };
        } else {
          return animal;
        }
      });
      return { animals: updatedArray };
    });
  };

  addHandeler = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          console.log({ ...animal, likes: animal.likes + 1 });
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return { animals: updatedArray };
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
        removeLikes={() => this.removeAdd(animal.name)}
      />
    ));
    return (
      <div className="">
        <div className="container">
          {" "}
          <h1> {this.state.animals.length} Animals were found</h1>
          <input
            onChange={this.searchHandeler}
            placeholder={"Serach animal name here"}
          />
        </div>
        <div className="animalList_container">{animalList}</div>
      </div>
    );
  }
}
