import React, {Component} from 'react';
import './App.css';
import SomeComponent from "./Components/SomeComponent/SomeComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React starter</h1>
        <SomeComponent name="sandu" />
        <SomeComponent name="sandu">
          Component content
        </SomeComponent>
      </div>
    );
  }
}

export default App;
