'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Patient = db.sequelize.define('patient', {
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

Patient.associate = function () {
  Patient.hasMany(Appointment, {
    foreignKey: 'aptID',
    onDelete: 'CASCADE',
  });
};

module.exports = Patient

const Doctor = db.sequelize.define('doctor', {
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

Doctor.associate = function () {
  Doctor.hasMany(Appointment, {
    foreignKey: 'aptID',
    onDelete: 'CASCADE',
  });
};

module.exports = Doctor



const Appointment = db.sequelize.define('appointment', {
  aptDate: {
    type: Sequelize.DATE,
  },
  aptID: Sequelize.INTEGER
});

Appointment.belongsTo(Doctor, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})

Appointment.belongsTo(Patient, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})

module.exports = Appointment

module.exports = db;