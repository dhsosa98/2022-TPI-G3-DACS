'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Rooms', 'roomNumber', {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn('Rooms', 'roomNumber')]);
  },
};
