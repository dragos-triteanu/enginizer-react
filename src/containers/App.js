import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium";
import InputComponent from "../components/Input/Input";
import CardList from "../components/CardList/CardList";

class App extends Component {
  state = {
    components: [
      {id: 1, name: 'Zetta'},
      {id: 2, name: 'Gamma'},
      {id: 3, name: 'Delta'},
    ],
    cards: [
      {id: 1, title: "card", subtitle: "subtitle"},
      {id: 2, title: "card", subtitle: "subtitle"},
      {id: 3, title: "card", subtitle: "subtitle"}
    ],
    style: {
      backgroundColor: 'green',
      ':hover': {
        backgroundColor: 'yellow'
      },
      '@media (max-width: 1000px)': {
        display: 'none'
      }
    }
  };

  render() {
    return (
        <StyleRoot>
          <div className="App">
            <div className="AppHeader">
              <h1 className="centered">React playground</h1>
            </div>
            <div className="AppContent">
              <CardList cards={this.state.cards}/>
              <div className="inputSwarm">
                <h2>Illustration of list rendering</h2>
                {
                  this.state.components.map((component, index) => {
                    return <InputComponent key={component.id}
                                           delete={() =>
                                               this.deletePersonHandler(
                                                   component.id)}
                                           change={(e) => this.inputChange(
                                               e,
                                               component.id)}
                                           initVal={component.name}/>
                  })
                }
              </div>
            </div>
          </div>
        </StyleRoot>
    );
  }

  renameHandler = (param) => {
    console.log(this.state.components[0].name);
    // Don't mutate like this this.state.components[0].name = 'Lalaband';
    this.setState({
      components: [
        {id: 1, name: param + Math.random()},
        {name: 'q'},
        {name: 'z'}
      ]
    })
  };

  inputChange = (event, componentId) => {
    console.log("inputChange::", event, componentId);

    let components = [...this.state.components];
    components[componentId - 1].name = event.target.value;
    this.setState(components);
  };

  deletePersonHandler = (event) => {
    const componets = this.state.components;
    componets.splice(event, 1);
    debugger
    this.setState({components: componets});
  };
}

export default Radium(App);
