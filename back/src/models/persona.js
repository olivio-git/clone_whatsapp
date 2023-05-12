const { DataTypes } = require('sequelize');
 


module.exports=(sequelize)=>{ 
    sequelize.define('Persona', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        fechaNac: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
})}; 
