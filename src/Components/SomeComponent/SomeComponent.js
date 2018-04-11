import React, {Component} from 'react';

export class SomeComponent extends Component {

  render() {
    return (
        <div className="someComponent">
          <div className='someClass'>
            <p onClick={this.props.click}>Name attribute: {this.props.name}</p>
            <p>Content (children): {this.props.children}</p>
          </div>
        </div>
        //The same as
        //React.createElement('div',{className: 'bonzoi'}, 'Lalaband');
    );
  }
}

export default SomeComponent;
