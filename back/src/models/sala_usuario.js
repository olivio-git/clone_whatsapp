const { DataTypes } = require('sequelize');
 

 
module.exports = (sequelize)=>{
    sequelize.define('Sala_usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
})};
 