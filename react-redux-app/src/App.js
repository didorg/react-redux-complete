import React, {Component} from 'react';
import AddPerson from './AddPerson';

class App extends Component{

  render() {
    return (
      <div className="App">
      <h1> My first React App!</h1>
      <AddPerson/>
      </div>
    )
  }
}

export default App;
