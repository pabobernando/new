
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameBio extends Model {

  };
  UserGameBio.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      },
      nama: {
      allowNull: true,
      type: DataTypes.STRING
      },
      umur: {
      allowNull: true,
      type: DataTypes.STRING
      },
      hobi: {
      allowNull: true,
      type: DataTypes.STRING
      },
      user_id: {
      allowNull: true,
      type: DataTypes.INTEGER
      },
  }, {
    sequelize:sequelize,
    modelName: 'UserGameBio',
  });
  return UserGameBio;
};