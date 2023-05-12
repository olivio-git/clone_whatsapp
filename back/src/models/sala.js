const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Sala', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        }
})};

 