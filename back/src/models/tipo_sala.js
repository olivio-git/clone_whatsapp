const { DataTypes } = require('sequelize');
const sequelize = require('../bd');


module.exports=(sequelize)=>{ 
    sequelize.define('Tipo_sala', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
})};

 