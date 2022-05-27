'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn('Hotels', 'reserveId')]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Rooms', 'reserveId', {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ReserveHabs',
          },
          key: 'id',
        },
        allowNull: false,
      }),
    ]);
  },
};
