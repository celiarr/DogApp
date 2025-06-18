'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'messages',
      {
      id:{
        type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      senderId:{
        type: Sequelize.INTEGER, 
        references:{
        model: 'member',
        key: 'userId'
        }
      },
      recipientId:{
        type: Sequelize.INTEGER, 
        references:{
        model: 'member',
        key: 'userId'
        }
      },
      content:{
        type: Sequelize.STRING,
        allowNull: false
      },
      timestamp:{
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
      },
      isRead:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('messages');
  }
};