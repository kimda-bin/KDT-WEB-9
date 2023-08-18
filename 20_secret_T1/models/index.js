'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./User')(sequelize, Sequelize)


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;