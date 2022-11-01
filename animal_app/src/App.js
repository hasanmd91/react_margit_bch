import React, { Component } from "react";
import { animals } from "./Animal";
import Card from "./Card";

export default class App extends Component {
  state = { animals: animals };

  render() {
    const animalList = animals.map((animal) => (
      <Card name={animal.name} likes={animal.likes} key={animal.name} />
    ));
    return <div className="container">{animalList}</div>;
  }
}
