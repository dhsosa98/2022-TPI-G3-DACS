'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('packagebookings', [
      {
        subTotal: 2000,
        pending: 1,
        userId: 1,
        packId: 1,
      },
      {
        subTotal: 3000,
        pending: 1,
        userId: 2,
        packId: 1,
      },
      {
        subTotal: 4000,
        pending: 1,
        userId: 2,
        packId: 2,
      },
      {
        subTotal: 5000,
        pending: 1,
        userId: 3,
        packId: 1,
      },
      {
        subTotal: 2200,
        pending: 1,
        userId: 4,
        packId: 2,
      },
      {
        subTotal: 3600,
        pending: 1,
        userId: 4,
        packId: 3,
      },
      {
        subTotal: 2600,
        pending: 1,
        userId: 5,
        packId: 2,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('packagebookings', null, {})
  }
};
