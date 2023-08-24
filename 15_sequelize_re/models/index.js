'use strict';


const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델
//db에 User 생성
//축약형
db.User = require('./User')(sequelize)

//기본형
// const model = require('./User')
// const temp = model(sequelize)
// db.User = temp

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
