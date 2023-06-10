const Sequelize=require('sequelize');
const db=require('../utils/database');

const expense=db.define('expense',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    itemname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cost:{
        type:Sequelize.STRING,
        allowNull:false
    },
   
}

);

module.exports=expense;