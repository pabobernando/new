'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserPlayers', [{
      username: 'yoanes',
      email: 'yoanesrn@gmail.com',
      password : '$2b$08$dL7Riy6ZRAo7Fiwu4bBzKeA98av.sKCYmyNn2sumf.KfLz6fPOR0O',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserGames', null, {});
  }
};
