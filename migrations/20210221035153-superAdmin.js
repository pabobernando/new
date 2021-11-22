'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('SuperAdmins', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        autoIncrement: true
      },
      username: {
        allowNull: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
      	allowNull: true,
      	type: Sequelize.STRING
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
    return queryInterface.dropTable('SuperAdmin');
  }
};
