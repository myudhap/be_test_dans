const config = require('../config.js')
const env = process.env.NODE_ENV || 'development';
const dialect = 'mysql';

module.exports = {
  [env]: {
    dialect,
    username: config.mysql.username,
    password: config.mysql.password,
    database: config.mysql.database,
    host: config.mysql.host || 'localhost',
    port: config.mysql.port || 3306,
    migrationStorageTableName: '_migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: '_seeds'
  }
};