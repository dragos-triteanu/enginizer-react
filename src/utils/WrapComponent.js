import React, {Component} from 'react';

/**
 * This is practically used in order to enrich the functionality of a class.
 * Radium works pretty much the same. Practically we wrap a component using this
 * wrapper in order to add various stylings or functionality. State however should not be altered.
 *
 * ErrorBoundries work the same
 *
 *
 * The Input component displays an example of this in action.
 * */
const wrapComponent = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div className='wrapped'>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
};

export default wrapComponent;
