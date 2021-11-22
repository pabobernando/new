'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('RoomPlayers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        autoIncrement: true
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      player_1: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      player_2: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      count_player: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    return queryInterface.dropTable('RoomPlayers');
  }
};
