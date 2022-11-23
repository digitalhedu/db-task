'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        title: 'Tarea numero 1',
        isComplete: false,
        user: 2
      },
      {
        title: 'Tarea numero 2',
        isComplete: false,
        user: 3
      },
      {
        title: 'Tarea numero 3',
        isComplete: false,
        user: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
