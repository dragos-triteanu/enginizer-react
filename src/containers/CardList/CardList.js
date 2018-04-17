import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "../../components/Card/Card";
import Radium from "radium";
import {connect} from "react-redux";

class CardList extends Component {

  state = {
    style: {
      display: 'flex'
    },
    childStyle: {
      backgroundColor: 'green',
      // ':hover': {
      //   backgroundColor: 'yellow'
      // },
      // '@media (max-width: 1000px)': {
      //   display: 'none'
      // }
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

  createCard(card, index) {
    let cardComponent =
        (
            <Card key={index}
                  onRef={ref => (this.state.cards.push(ref))}
                  title={card.title}
                  subtitle={card.subtitle}
                  click={(e) => this.handleChildClick(e, card.id)}>
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

function mapPropsToState(state) {
  return {
    cards: state.cards
  }
}

CardList.propTypes = {
  cards: PropTypes.array
};

export default connect(mapPropsToState)(CardList)