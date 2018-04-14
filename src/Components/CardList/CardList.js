import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import Radium from "radium";

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
        <div className="CardList" style={this.state.style}>
          {
            this.props.cards.map((card, index) => {
              return this.createCard(card, index);
            })
          }
        </div>
    );
  }

  createCard(card) {
    let cardComponent =
        (
            <Card key={card.id}
                  onRef={ref => (this.state.cards.push(ref))}
                  title={card.title}
                  subtitle={card.subtitle}
                  click={this.handleChildClick}>
              <div className="card-content">
                Random content
              </div>
              <div className="card-footer">
                <button onClick={(e) => this.handleChildVisibility(e, card.id)}
                        style={this.state.childStyle}>Show
                  subtitle
                </button>
              </div>
            </Card>
        );

    return cardComponent;
  }

  handleChildVisibility = (event, id) => {
    this.state.cards[id - 1].toggleSubtitleVisibility();
  };

  handleChildClick(event) {
    console.log(event);
  }

}

CardList.propTypes = {};

export default Radium(CardList);
