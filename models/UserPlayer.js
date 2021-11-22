
'use strict';
const { Model } = require('sequelize');
let bcrypt = require('bcrypt');
const { authenticate } = require('passport');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  class UserPlayer extends Model {

  };
  UserPlayer.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize:sequelize,
    modelName: 'UserPlayer',
  });
  UserPlayer.prototype.validPassword = (password,hash) => {
    password = password.toString();
    return bcrypt.compareSync(password, hash);
  };

  UserPlayer.authenticate = async({username, password})=>{
    try{
      const user = await UserPlayer.findOne({where:{username}})
      if(!user ) return Promise.reject("User not found");
      const isPasswordValid = user.validPassword(password,user.password);
      if (!isPasswordValid) return Promise.reject("Wrong password") 
      return Promise.resolve(user)
    }catch(error){
      return Promise.reject(error);
    }
  },

  UserPlayer.prototype.generateToken = (user) =>{
    const payload = {
      id      : user.id,
      username: user.username
    }

    const rahasia = "super-secret";
    const token = jwt.sign(payload,rahasia,{expiresIn: 86400});
    return token;
  }

  UserPlayer.prototype.findAllUserGame=()=>{
      try {
          return UserPlayer.findAll({});   
      } catch (error) {
          res.status(500).status(error)
      }
  }


  return UserPlayer;
};


