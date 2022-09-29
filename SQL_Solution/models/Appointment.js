const Sequelize = require('sequelize');

const Appointment = Sequelize.define('appointment', {
    aptDate: {
        type: Sequelize.DATE,
    },
    aptID: Sequelize.INTEGER
});

Appointment.belongsTo(models.Doctor, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
})

Appointment.belongsTo(models.Patient, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
})

module.exports = Appointment