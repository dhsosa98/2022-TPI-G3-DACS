'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sales', [
      {
        paymentMethod: 'Credit Card',
        paymentAmount: 3000,
        saleDate: '2022-10-01 08:00:00',
        userId: 1,
        packId: 1,
      },
      {
        paymentMethod: 'Cash',
        paymentAmount: 1800,
        saleDate: '2022-05-10 08:00:00',
        userId: 2,
        packId: 2,
      },
      {
        paymentMethod: 'Credit Card',
        paymentAmount: 2300,
        saleDate: '2022-09-21 08:00:00',
        userId: 3,
        packId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('sales', null, {});
  },
};
