import React, {Component} from 'react';
import './App.css';
import SomeComponent from "./Components/SomeComponent/SomeComponent";
import {Input} from "./Components/Input/Input";

class App extends Component {
  state = {
    components: [
      {name: 'Zetta'},
      {name: 'q'},
      {name: 'z'},
    ]
  };

  render() {
    return (
        <div className="App">
          <h1 className="centered">React starter</h1>
          <h2>Basic component and passing props</h2>
          <SomeComponent name={this.state.components[0].name}
                         click={this.renameHandler.bind(this, 3)}>
            Component content
          </SomeComponent>

          <Input change={this.inputChange}
                 initVal={this.state.components[0].name}/>

          <button onClick={this.renameHandler.bind(this, 5)}>Click me, mortal!
          </button>

        </div>
    );
  }

  renameHandler = (param) => {
    console.log(this.state.components[0].name);
    // Don't mutate like this this.state.components[0].name = 'Lalaband';
    this.setState({
      components: [
        {name: param + Math.random()},
        {name: 'q'},
        {name: 'z'}
      ]
    })
  };

  inputChange = (event) => {
    this.setState({
      components: [
        {name: event.target.value},
        {name: 'q'},
        {name: 'z'}
      ]
    })
  }

}

export default App;
