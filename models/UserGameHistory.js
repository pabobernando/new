
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {

  };
  UserGameHistory.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_player: {
      allowNull: true,
      type: DataTypes.STRING
    },
    status: {
      allowNull: true,
      type: DataTypes.STRING
    },
    score: {
      allowNull: true,
      type: DataTypes.STRING
    },
    playDate: {
      allowNull: true,
      type: DataTypes.DATE
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    room_name: {
      allowNull: true,
      type: DataTypes.STRING
    },
  }, {
    sequelize:sequelize,
    modelName: 'UserGameHistory',
  });
  return UserGameHistory;
};
