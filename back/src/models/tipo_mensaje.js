const { DataTypes } = require('sequelize');
 
module.exports= (sequelize)=>{
    sequelize.define('Tipo_mensaje', {
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
 