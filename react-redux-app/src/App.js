import React, { Component } from 'react';
import AddAnimal from './AddAnimal';
import Animals from './Animal';

class App extends Component {

  state = {
    animals: [
      { name: 'Dog', age: 12, eyes: "black", id: 1 },
      { name: 'cat', age: 8, eyes: "blue", id: 2 },
      { name: 'parrot', age: 15, eyes: "green", id: 3 }
    ]
  }

  addAnimal = (animal) => {
    animal.id = Math.random();
    let animals = [...this.state.animals, animal];
    this.setState({
      animals: animals
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to React App!</h1>
        <AddAnimal addAnimal={this.addAnimal} />
        <Animals animals={this.state.animals} />
      </div>
    )
  }
}

export default App;
