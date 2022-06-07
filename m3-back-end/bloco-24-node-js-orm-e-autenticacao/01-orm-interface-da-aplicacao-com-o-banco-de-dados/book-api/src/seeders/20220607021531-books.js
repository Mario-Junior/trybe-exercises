'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('Books',
    [
      {
        title: 'Pescando Tolos',
        author: 'Akerlof',
        page_quantity: 300,
        created_at: Sequelize.literal('NOW()'),
        updated_at: Sequelize.literal('NOW()'),
      },
      {
        title: 'Rápido e Devagar',
        author: 'Daniel Kahneman',
        page_quantity: 400,
        created_at: Sequelize.literal('NOW()'),
        updated_at: Sequelize.literal('NOW()'),
      },
      {
        title: 'A Arte da Guerra',
        author: 'Sun Tzu',
        page_quantity: 250,
        created_at: Sequelize.literal('NOW()'),
        updated_at: Sequelize.literal('NOW()'),
      },
    ], {}),

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('Books', null, {}),
};
