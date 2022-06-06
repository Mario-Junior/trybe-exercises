'use strict';
// duas formas diferentes de fazer, com arrow function e sem, no mesmo código
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Adrielle',
        email: 'dri@test.com',
        // uso a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: +5534912345678,
      },
      {
        fullName: 'Eduarda',
        email: 'duda@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: +5534912345678,
      },
      {
        fullName: 'Mário Júnior',
        email: 'mjr@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: +5534912345678,
      },
    ], {}),

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
