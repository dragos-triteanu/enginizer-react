import React, {Component} from 'react';
import Radium from "radium";
import CardList from "../../components/CardList/CardList";
import {bindActionCreators} from "redux";
import {selectCard} from "../../actions";
import {connect} from "react-redux";
import CardDetails from "../../components/CardDetails/CardDetails";

export const AuthContext = React.createContext(false);

class CardsPage extends Component {
  render() {
    return (
        <div className='CardsPage'>
          <AuthContext.Provider value={this.state.authenticated}>
            <CardList cards={this.props.cards}
                      cardClick={(e) => this.onCardClick(e)}/>
          </AuthContext.Provider>
          <CardDetails card={this.props.card}/>

        </div>
    );
  }

  onCardClick(card) {
    this.props.selectCard(card);
  }

}

CardsPage.propTypes = {};

function mapPropsToState(state) {
  return {
    cards: state.cards,
    card: state.selectedCard
  }
}

// When selecting a card, the selection should be passed to all of the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectCard: selectCard}, dispatch)
}

// Create a react-redux container from the current component. For this, it has to pass on the state from the reducers and also
// dispatch events to the reducers.
export default connect(mapPropsToState, mapDispatchToProps)(Radium(CardsPage))
