const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'PoStGrEs13',
    database: 'computers',
    logging: false
});

module.exports = { db };