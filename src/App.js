import React, {Component} from 'react';
import './App.css';
import Card from "./Components/Card/Card";
import Radium, {StyleRoot} from "radium";
import InputComponent from "./Components/Input/Input";

class App extends Component {
  state = {
    components: [
      {id: 1, name: 'Zetta'},
      {id: 2, name: 'Gamma'},
      {id: 3, name: 'Delta'},
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
              <Card onRef={ref => (this.card = ref)}
                    title="Some title"
                    name={this.state.components[0].name}
                    subtitle="Subtitle"
                    click={this.renameHandler.bind(this, 3)}>
                <div className="card-content">
                  Random content: {this.state.components[0].name}

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
                <div className="card-footer">
                  <button onClick={this.renameHandler.bind(this, 5)}>Card footer
                  </button>
                  <button onClick={this.handleChildvisibility}
                          style={this.state.style}>Show
                    subtitle
                  </button>
                </div>
              </Card>
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

  handleChildvisibility = (style) => {
    this.card.toggleSubtitleVisibility();
    this.setState({
      style: {
        backgroundColor: this.state.style.backgroundColor === 'red' ? 'green'
            : 'red'
      }
    });
  };
}

export default Radium(App);
