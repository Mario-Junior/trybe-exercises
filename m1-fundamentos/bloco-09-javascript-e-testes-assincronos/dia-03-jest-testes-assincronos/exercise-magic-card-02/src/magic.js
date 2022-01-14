const fetch = require('node-fetch');
const favoriteCards = require('../data/favoriteCards.js')

const getMagicCardUrl = (cardId) => `https://api.magicthegathering.io/v1/cards/${cardId}`;

const saveFavoriteMagicCard = async (cardId) => {
  try {
    const url = getMagicCardUrl(cardId);
    const response = await fetch(url);
    const data = await response.json();

    const { name, manaCost, types, subtypes, rarity } = data.card;

    favoriteCards.push({
      name,
      manaCost,
      types,
      subtypes,
      rarity,
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  saveFavoriteMagicCard,
};
