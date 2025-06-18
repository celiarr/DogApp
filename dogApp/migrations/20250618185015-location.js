'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'location',
      {
      id:{        
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      memberId:{
        type: Sequelize.INTEGER, 
        references:{
        model: 'member',
        key: 'userId'
        }
      },
      timestamp:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      locationVisibility:{
        type: Sequelize.STRING,
        allowNull: false
      }
    }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('location');
  }
};