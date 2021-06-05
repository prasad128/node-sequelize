const Sequelize = require('sequelize');

module.exports = new Sequelize('students', 'root','prasad123',{
    host: 'localhost',
    dialect: 'mysql'
  });