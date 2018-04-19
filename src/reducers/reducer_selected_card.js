export default function (state = null, action) {

  switch (action.type) {
    case 'CARD_SELECTED':
      console.log('[REDUCER: CardSelected]', action.payload);
      return action.payload;
    default:
      break;
  }

  return state;
}