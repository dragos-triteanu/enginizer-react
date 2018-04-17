import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium";
import CardList from "./CardList/CardList";

export const AuthContext = React.createContext(false);

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
    },
    authenticated: false
  };

  render() {
    return (
        <StyleRoot>
          <div className="App">
            <div className="AppHeader">
              <h1 className="centered">React playground</h1>
              <button
                  className="centered"
                  onClick={this.passStateToChildren.bind(this)}>Pass state
                globally
              </button>
            </div>
            <div className="AppContent">
              <AuthContext.Provider value={this.state.authenticated}>
                <CardList/>
              </AuthContext.Provider>
            </div>
          </div>
        </StyleRoot>
    );
  }

  passStateToChildren(event) {
    this.setState((previousState, props) => {
      return {
        authenticated: !previousState.authenticated
      }
    });
  }
}

export default Radium(App);
