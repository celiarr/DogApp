'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('messages', 'message', {
      type: Sequelize.BOOLEAN,
      allowNull:false
    });
    await queryInterface.removeColumn('messages', 'content');

  },

  down: (queryInterface, Sequelize) => {
   
  }
};