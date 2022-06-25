'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      seat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departureDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      returnDate: {
        type: Sequelize.DATE,
      },
      travelWayId: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'TravelWays' }, key: 'id' },
        allowNull: false,
      },
      amount: {
        type: Sequelize.REAL,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  },
};
