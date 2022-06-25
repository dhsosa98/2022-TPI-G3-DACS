'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rols', [
      {
        id: 1,
        description: 'User',
      },
      {
        id: 2,
        description: 'Admin',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Rols', null, {});
  },
};
