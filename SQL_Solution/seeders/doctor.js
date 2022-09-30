const Sequelize = require('sequelize');

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'Doctor',
        [
            {
                name: 'Dr. CJ Johnson',
                email: 'cjdaboss@gmail.com',
                docID: '4345fref34',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ],
        {},
    ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};