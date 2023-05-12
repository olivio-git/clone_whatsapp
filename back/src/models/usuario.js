const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        correo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        contraseña: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
})};
