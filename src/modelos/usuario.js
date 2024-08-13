const { sequelize, DataTypes, INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Usuario', {
        cedula: {
            type: DataTypes.STRING,
            primarykey: true,
            allowNull: false,
            unique: 'cedula'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'email'
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes-INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'usuario',
        timestamps: true
    });
};