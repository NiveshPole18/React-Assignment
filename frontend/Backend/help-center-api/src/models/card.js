let cards = []; // In-memory store

// Functions to interact with the cards array
const createCard = (card) => {
  cards.push(card);
  return card;
};

const getAllCards = () => cards;

const getCardByTitle = (title) => cards.find(card => card.title === title);

module.exports = { createCard, getAllCards, getCardByTitle };
