'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'location-sharing',
      {
      userSharing:{
        type: Sequelize.INTEGER, 
        references:{
        model: 'member',
        key: 'userId'
        }
      },
      sharedWith:{
        type: Sequelize.INTEGER, 
        references:{
        model: 'member',
        key: 'userId'
        }
      }
    }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('location-sharing');
  }
};