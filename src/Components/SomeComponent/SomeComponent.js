import React, {Component} from 'react';

class SomeComponent extends Component {


  render() {
    return (
        <div className="someComponent">
          <div className='someClass'>
            Lalaband {this.props.name}
          </div>
        </div>
       //The same as
      //React.createElement('div',{className: 'bonzoi'}, 'Lalaband');
    );
  }
}

export default SomeComponent;
