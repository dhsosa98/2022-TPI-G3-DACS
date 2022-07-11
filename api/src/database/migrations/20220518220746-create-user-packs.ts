'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PackageBookings', {
      subTotal: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      pending: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },

      packId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Packages',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserPacks');
  },
};
