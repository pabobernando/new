
'use strict';
const { Model } = require('sequelize');
let bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class SuperAdmin extends Model {

  };
  SuperAdmin.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize:sequelize,
    modelName: 'SuperAdmin',
  });

  SuperAdmin.prototype.validPassword = function(password) {
    password = password.toString();
    return bcrypt.compare(password, this.password);
  };
  return SuperAdmin;
};