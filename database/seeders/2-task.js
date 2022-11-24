module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('tasks', [
            {
                title: 'Tarea numero 1',
                isComplete: false,
                userId: 2
            },
            {
                title: 'Tarea numero 2',
                isComplete: true,
                userId: 3
            },
            {
                title: 'Tarea numero 3',
                isComplete: false,
                userId: 2
            },
            {
                title: 'Tarea numero 4',
                isComplete: false,
                userId: 3
            },
            {
                title: 'Tarea numero 5',
                isComplete: true,
                userId: 2
            },
            {
                title: 'Tarea numero 6',
                isComplete: false,
                userId: 3
            },
            {
                title: 'Tarea numero 7',
                isComplete: false,
                userId: 2
            },
            {
                title: 'Tarea numero 8',
                isComplete: true,
                userId: 3
            },
            {
                title: 'Tarea numero 9',
                isComplete: false,
                userId: 2
            },
            {
                title: 'Tarea numero 10',
                isComplete: true,
                userId: 3
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tasks', null, {});
    }
};
