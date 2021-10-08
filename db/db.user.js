const {DataTypes} = require('sequelize');
const sequelize = require('./db.conexion');

const Users = sequelize.define("users", {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    token: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
});

module.exports = Users