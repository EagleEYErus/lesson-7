const sequelize = require('./Sequelize');
const type = require('sequelize').DataTypes;
const db = {};

db.user = require('../models/user')(sequelize, type);

module.exports = db;
