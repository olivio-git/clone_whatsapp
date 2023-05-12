const { DataTypes } = require('sequelize');



module.exports = (sequelize)=>
    {sequelize.define('Mensaje', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        mensaje: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        url: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
})};
 