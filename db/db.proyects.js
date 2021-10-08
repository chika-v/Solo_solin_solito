const {DataTypes} = require('sequelize');
const sequelize = require('./db.conexion');

const Proyectos = sequelize.define("proyectos", {
    proyectName: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    presupuesto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    version_proyecto: {
        type: DataTypes.FLOAT,
        allowNull: false
    }, 
    owner: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Proyectos