'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rols', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'user',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rols');
  },
};
