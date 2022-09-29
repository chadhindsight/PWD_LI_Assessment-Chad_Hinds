const Sequelize = require('sequelize');

const Doctor = Sequelize.define('doctor', {
    // attributes
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    docID: Sequelize.INTEGER
});

Doctor.associate = function (models) {
    // associations can be defined here
    Doctor.hasMany(models.Appointment, {
        foreignKey: 'aptID',
        onDelete: 'CASCADE',
    });
};

module.exports = Doctor