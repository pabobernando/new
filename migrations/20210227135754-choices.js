'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Choices', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        autoIncrement: true
      },
      room_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      choice: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Choices');
  }
};
