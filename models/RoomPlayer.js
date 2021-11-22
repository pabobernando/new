
'use strict';
const { Model } = require('sequelize');
let bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class RoomPlayer extends Model {

  };
  RoomPlayer.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    player_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    player_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    count_player: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize:sequelize,
    modelName: 'RoomPlayer',
  });

  
  return RoomPlayer;
};