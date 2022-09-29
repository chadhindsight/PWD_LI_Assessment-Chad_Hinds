const Sequelize = require('sequelize');

const Patient = sequelize.define('patient', {
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
    Patient.hasMany(models.Apts, {
        foreignKey: 'aptID',
        onDelete: 'CASCADE',
    });
};

module.exports = Patient