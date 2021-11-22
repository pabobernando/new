
'use strict';
const { Model } = require('sequelize');
let bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Choice extends Model {

  };
  Choice.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    room_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    choice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize:sequelize,
    modelName: 'Choice',
  });

  
  return Choice;
};