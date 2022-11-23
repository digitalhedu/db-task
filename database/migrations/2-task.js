'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', { 
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isComplete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userid:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
