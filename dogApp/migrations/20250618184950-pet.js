'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'pet',
      {
       name: {
        type: Sequelize.STRING,
      allowNull:false
       },
       id:{
        type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
       },
       size:{
        type: Sequelize.STRING,
      allowNull:false
       },
       breed:{
        type: Sequelize.STRING,
      allowNull:false
       },
       memberId:{
        type: Sequelize.INTEGER, 
        references:{
        model: 'member',
        key: 'userId'
        }
      }}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pet');
  }
};