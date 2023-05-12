const { DataTypes } = require('sequelize');
const sequelize = require('../bd');

module.exports=(sequelize)=>{
    const Test=sequelize.define('test',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },{
    timestamps:false
    });
}