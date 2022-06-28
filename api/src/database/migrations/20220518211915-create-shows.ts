'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      seat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dateShow: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      amount: {
        type: Sequelize.REAL,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shows');
  },
};
