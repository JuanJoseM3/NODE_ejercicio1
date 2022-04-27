const { db } = require('../utils/database');
const { DataTypes } = require('sequelize');

const Repair = db.define('repair', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE
    },
    status: {
        defaultValue: "pending",
        type: DataTypes.STRING
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
});

module.exports = { Repair };