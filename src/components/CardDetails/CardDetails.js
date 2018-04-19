import React, {Component} from 'react';
import Radium from "radium";

class CardDetails extends Component {

  render() {
    const inlineStyle = {
      textAlign: 'center'
    };

    return (
        <div className='CardDetails'
             style={inlineStyle}>
          {
            this.renderCard(this.props.card)
          }
        </div>
    )
  }

  renderCard(card) {
    if (!card) {
      return (
          <h3>Please select a card</h3>
      )
    }

    return (
        <h3>Details for: {this.props.card.title}</h3>
    )
  }

}

CardDetails.propTypes = {};

export default Radium(CardDetails);


