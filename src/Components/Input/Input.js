import React, {Component} from 'react';

export class Input extends Component {

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

export default Input;