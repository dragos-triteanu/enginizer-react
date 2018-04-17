import CardReducer from './reducer_cards';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  cards: CardReducer
});

export default rootReducer;