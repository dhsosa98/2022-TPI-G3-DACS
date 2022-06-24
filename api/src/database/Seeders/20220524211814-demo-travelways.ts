'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('travelways', [
      {
        id: 1,
        name: 'Colectivo',
      },
      {
        id: 2,
        name: 'Avion',
      },
      {
        id: 3,
        name: 'Tren',
      },
      {
        id: 4,
        name: 'Onix',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('travelways', null, {});
  },
};
