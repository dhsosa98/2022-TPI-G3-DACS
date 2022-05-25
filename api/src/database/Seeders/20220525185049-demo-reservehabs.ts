'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('reservehabs', [
      {
        departureDate: '2022-09-14 08:00:00' ,
        returnDate: '2022-10-01 08:00:00' ,
        roomId: 1
      },
      {
        departureDate: '2022-04-25 08:00:00' ,
        returnDate: '2022-05-05 08:00:00' ,
        roomId: 2
      },
      {
        departureDate: '2022-07-16 08:00:00' ,
        returnDate: '2022-07-28 08:00:00' ,
        roomId: 3
      },
      {
        departureDate: '2022-09-09 08:00:00' ,
        returnDate: '2022-09-21 08:00:00' ,
        roomId: 4
      },

    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reservehabs', null, {})
  }
};
