'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('rooms', [
      {
        numBeds: 4,
        description: 'Really nice view',
        amount: 58.9,
        type: 'Suite',
        roomNumber: 49,
      },
      {
        numBeds: 2,
        description: 'Has a jacuzzi',
        amount: 49.99,
        type: 'Double',
        roomNumber: 24,
      },
      {
        numBeds: 3,
        description: 'Nice view',
        amount: 49.99,
        type: 'Triple',
        roomNumber: 17,
      },
      {
        numBeds: 6,
        description: 'Bunk beds for the bois',
        amount: 60,
        type: 'Suite',
        roomNumber: 31,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('rooms', null, {});
  },
};
