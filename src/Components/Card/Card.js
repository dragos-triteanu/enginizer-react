import React, {Component} from 'react';

import './Card.css';
import Radium from "radium";

class SomeComponent extends Component {
  state = {
    showContent: true
  };

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  render() {

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
            <h1>{this.props.title}</h1>
            {this.state.showContent ? subtitle : null}
          </header>
          <content
              onClick={this.props.click}
              style={styles.contentStyle}> {this.props.children[0]}
          </content>
          <footer>
            {this.props.children[1]}
          </footer>
        </div>
    );
  }

  toggleSubtitleVisibility() {
    this.setState({showContent: !this.state.showContent});
  }
}

export default Radium(SomeComponent);
