export const state = () => ({
  cards: []
});

export const mutations = {
  setCards(state, cards) {
    state.cards = cards;
  }
};
