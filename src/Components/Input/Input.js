import React, {Component} from 'react';
import Radium from "radium";

class InputComponent extends Component {

  render() {
    return (
        <div className='someComponent'>
          <input type='text'
                 onChange={this.props.change}
                 value={this.props.initVal}/>

          <button onClick={this.props.delete}>X</button>
        </div>
    )
  }

}

export default Radium(InputComponent);