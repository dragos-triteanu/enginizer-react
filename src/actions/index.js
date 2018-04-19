export function selectCard(card) {
  return {
    type: 'CARD_SELECTED',
    payload: card
  }
}