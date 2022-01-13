const getMagicCardUrl = (cardId) => `https://api.magicthegathering.io/v1/cards/${cardId}`;

const getMagicCard = async (cardId) => {
  try {
    const url = getMagicCardUrl(cardId);
    const response = await fetch(url);
    const data = await response.json();

    const { name, manaCost, types, subtypes, rarity } = data.card;

    return {
      name,
      manaCost,
      types,
      subtypes,
      rarity,
    };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getMagicCard,
};
