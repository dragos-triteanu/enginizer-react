import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import Radium from "radium";
import CardDetails from "../CardDetails/CardDetails";

class CardList extends Component {

  state = {
    style: {
      display: 'flex'
    },
    childStyle: {
      backgroundColor: 'green',
      ':hover': {
        backgroundColor: 'yellow'
      },
      '@media (max-width: 1000px)': {
        display: 'none'
      }
    },
    cards: []
  };

  render() {
    return (
        <div className="CardPage">
          <div className="CardList" style={this.state.style}>
            {
              this.props.cards.map((card, index) => {
                return this.createCard(card, index);
              })
            }
          </div>
        </div>
    );
  }

  createCard(card, index) {
    let cardComponent =
        (
            <Card key={index}
                  onRef={ref => (this.state.cards.push(ref))}
                  title={card.title}
                  subtitle={card.subtitle}
                  click={(e) => this.props.cardClick(card)}>
              <div className="card-content">
                <p>Random content</p>
              </div>
              <div className="card-footer">
                <button onClick={(e) => this.handleChildVisibility(e, index)}
                        style={this.state.childStyle}>Show
                  subtitle
                </button>
              </div>
            </Card>
        );

    return cardComponent;

  }

  handleChildVisibility = (event, id) => {
    this.state.cards[id].toggleSubtitleVisibility();
  };

  handleChildClick(event) {
    console.log(event);
  }

}

CardList.propTypes = {
  cards: PropTypes.array,
  cardClick: PropTypes.func
};

// Create a react-redux container from the current component. For this, it has to pass on the state from the reducers and also
// dispatch events to the reducers.
export default Radium(CardList)