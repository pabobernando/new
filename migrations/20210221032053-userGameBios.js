'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserGameBios', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        autoIncrement: true
      },
      nama: {
        allowNull: true,
        type: Sequelize.STRING
      },
      umur: {
        allowNull: true,
        type: Sequelize.STRING
      },
      hobi: {
        allowNull: true,
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {         
          model: 'UserPlayers',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserGameBiodatas');
  }
};
