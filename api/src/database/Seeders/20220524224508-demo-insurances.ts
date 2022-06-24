'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('insurances', [
      {
        name: 'La segunda',
        amount: 500,
      },
      {
        name: 'Triunfo Seguros',
        amount: 700,
      },
      {
        name: 'Seguro Recursamos',
        amount: 800,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('insurances', null, {});
  },
};
