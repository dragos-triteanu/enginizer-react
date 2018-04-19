import CardReducer from './reducer_cards';
import SelectCardReducer from './reducer_selected_card';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  cards: CardReducer,
  selectedCard: SelectCardReducer
});

export default rootReducer;