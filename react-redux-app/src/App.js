import React, { Component } from 'react';
import AddPet from './AddPet';
import Pet from './Pet';

class App extends Component {

  state = {
    pets: [
      { name: 'Dog', age: 12, eyes: "black", id: 1 },
      { name: 'cat', age: 8, eyes: "blue", id: 2 },
      { name: 'parrot', age: 15, eyes: "green", id: 3 }
    ]
  }

  addPet = (pet) => {
    pet.id = Math.random();
    let pets = [...this.state.pets, pet];
    this.setState({
      pets: pets
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to React App!</h1>
        <AddPet addPet={this.addPet} />
        <Pet pets={this.state.pets} />
      </div>
    )
  }
}

export default App;
