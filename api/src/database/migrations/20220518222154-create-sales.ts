'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      paymentMethod: {
        type: Sequelize.STRING,
        defaultValue: 'card',
        allowNull: false,
      },
      paymentAmount: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },

      packId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Packages',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  },
};
