const db = require("../config/sequelize");
const Sequelize = require ("sequelize");
const sequelize = require("../config/sequelize");

const Admin = db.define("Admin",
{
  id:{
    type:Sequelize.DataTypes.INTEGER.UNSIGNED,
    autoIncrement:true,
    primaryKey: true,
  },
  name:{
    type:Sequelize.DataTypes.STRING (50),
    allowNull:false,
  },
  password:{
    type:Sequelize.DataTypes.STRING(50),
    allowNull:false,
  },
  isAdmin:{
    type:Sequelize.DataTypes.TINYINT,
    allowNull:false,
  },
  permission:{
    type:Sequelize.DataTypes.TINYINT,
    allowNull:false,
  },

},
{
  timestamps:false,
  freezeTableName: true
})

module.exports=Admin;
