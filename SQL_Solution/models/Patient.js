const Sequelize = require('sequelize');

const Patient = Sequelize.define('patient', {
    // attributes
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    patId: Sequelize.INTEGER
});

Patient.associate = function (models) {
    // associations can be defined here
    Patient.hasMany(models.Appointment, {
        foreignKey: 'aptID',
        onDelete: 'CASCADE',
    });
};

module.exports = Patient