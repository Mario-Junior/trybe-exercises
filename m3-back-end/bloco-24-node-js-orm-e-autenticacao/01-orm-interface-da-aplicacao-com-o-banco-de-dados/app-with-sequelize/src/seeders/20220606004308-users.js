'use strict';
// duas formas diferentes de fazer, com arrow function e sem, no mesmo código
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        full_name: 'Adrielle',
        email: 'dri@test.com',
        // uso a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: +5534912345678,
      },
      {
        full_name: 'Eduarda',
        email: 'duda@test.com',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: +5534912345678,
      },
      {
        full_name: 'Mário Júnior',
        email: 'mjr@test.com',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: +5534912345678,
      },
    ], {}),

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
