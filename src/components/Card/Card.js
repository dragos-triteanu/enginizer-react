import React, {Component} from 'react';

import './Card.css';
import Radium from "radium";
import * as PropTypes from "prop-types";
import {AuthContext} from "../../containers/App";

class CardComponent extends Component {
  state = {
    showContent: true,
    toggleClicked: 0
  };

  /**
   *  #1 Never use side effects in the constructor such as http calls
   */
  constructor(props) {
    console.log('[CardComponent] :: constructor');
    super(props);
    // In react 16.3, the new reference API was introduced for creating and assigning references
    this.headerElement = React.createRef();
  }

  /**
   *  #2 Used for defining how the component should render
   */
  render() {
    console.log('[CardComponent] :: render');
    const styles = {
      headerStyle: {
        height: '50px',
        padding: '15px'
      },
      contentStyle: {
        textAlign: 'left',
        flex: 1,
        overflow: 'auto',
        padding: '15px'
      }
    };

    let subtitle = <p>{this.props.subtitle}</p>;

    return (
        <div className="SomeComponent">
          <header style={styles.headerStyle}>
            <h1 ref={this.headerElement}>{this.props.title}</h1>
            {this.state.showContent ? subtitle : null}
          </header>
          <content
              onClick={this.props.click}
              style={styles.contentStyle}> {this.props.children[0]}
            <AuthContext.Consumer>
              {auth => auth ? <p>passed state</p> : null}
            </AuthContext.Consumer>
          </content>
          <footer>
            {this.props.children[1]}
          </footer>
        </div>
    );
  }

  /**
   *  #3 Executed after component is rendered. Don't update state, because it will force a re-render.
   */
  componentDidMount() {
    console.log('[CardComponent] :: componentDidMount');
    this.props.onRef(this)
  }

  /**
   *  #4 Called immediately before a component is destroyed. Useful for cleanup
   */
  componentWillUnmount() {
    console.log('[CardComponent] :: componentWillUnmount');
    this.props.onRef(undefined)
  }

  /**
   *  UPDATE #1:  Should return the new state in case of state change, otherwise should return null
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE CardComponent] :: getDerivedStateFromProps');
    return null;
  }

  /**
   *  UPDATE #2:
   *  Executed after getDerivedStateFromProps.
   *  Called to determine whether the change in props and state should trigger a re-render
   *
   *  THIS IS AUTOIMPLEMENTED BY THE FRAMEWORK. In order to make use of this function one should extend the
   *  {@link PureComponent}.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE CardComponent] UPDATE :: shouldComponentUpdate');
    // If false if returned, the component will not be updates
    return true;
  }

  /**
   *  UPDATE #3:  Executed after shouldComponentUpdate
   */
  getSnapshotBeforeUpdate(nextProps, prevState) {
    console.log('[UPDATE CardComponent] UPDATE :: getSnapshotBeforeUpdate');
    return null;
  }

  /**
   *  UPDATE #4:  Executed after getSnapshotBeforeUpdate.
   *  Called after component has been updated
   */
  componentDidUpdate() {
    console.log('[UPDATE CardComponent] UPDATE :: componentDidUpdate');
  }

  toggleSubtitleVisibility() {
    // The call to set state is performed async by react, so it's safer to pass
    // a callback to the set state, rather than modifying the state inline.
    // It saves kittens!
    this.headerElement.current.style = {display: 'none'};
    this.setState((previousState, props) => {
      return {
        showContent: !this.state.showContent,
        toggleClicked: previousState.toggleClicked + 1
      }
    });
  }
}

/**
 *  Defines the allowed property types and also provides autocomplete.
 *  This is the same as angular's '@Input() smth: string'
 */
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  click: PropTypes.func,
  // this dallows for a single child to be passed to the component
  //children: PropTypes.element.isRequired
};

export default Radium(CardComponent);
