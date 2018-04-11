import React, {Component} from 'react';

import './Card.css';

export class SomeComponent extends Component {

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

    return (
        <div className="SomeComponent">
          <header style={styles.headerStyle}>
            <h1>{this.props.title}</h1>
          </header>
          <content style={styles.contentStyle}>
            {this.props.children[0]}
          </content>
          <footer>
            {this.props.children[1]}
          </footer>
        </div>

        //The same as
        //React.createElement('div',{className: 'bonzoi'}, 'Lalaband');
    );
  }
}

export default SomeComponent;
