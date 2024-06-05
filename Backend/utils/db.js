const Sequelize = require('sequelize')
const sequelize = new Sequelize('sequelize_practice','root','sqllegasypassword24',{dialect:'mysql',host:'localhost'});
module.exports = sequelize