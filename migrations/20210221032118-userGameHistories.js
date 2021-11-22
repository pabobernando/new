'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserGameHistories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        autoIncrement: true
      },
      name_player: {
        allowNull: true,
        type: Sequelize.STRING
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      score: {
        allowNull: true,
        type: Sequelize.STRING
      },
      playDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      room_name : {
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
    return queryInterface.dropTable('UserGameHistories');
  }
};
