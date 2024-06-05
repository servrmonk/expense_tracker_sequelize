const Sequelize = require('sequelize')
const sequelize = require('../utils/db')
 //it is not just the connection pool it is more than that it is fully configure sequelize environment  which does also have the connection pool

// we can now define the model that  will be manages by sequelize
// here  we  define a new model by calling definethe first name is than model name , model name is lower case name so we can name it anything ,the 2nd arg defines the structure of our environ therefore also of that automaticallycreate a db table this will be an js object and in there we simply define the attributes of field of our product should have

const User = sequelize.define("user-table",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false, 
        primaryKey: true,
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    number:Sequelize.BIGINT(20),
})
module.exports = User