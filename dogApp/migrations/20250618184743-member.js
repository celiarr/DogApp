'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'member',
      {
        userId: { 
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        email: { 
          type: Sequelize.STRING,
          allowNull: false
        },
        password: { 
          type: Sequelize.STRING(100),
          allowNull: false
        },
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('member');
  }
};