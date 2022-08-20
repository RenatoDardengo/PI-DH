const db = require("../config/sequelize");
const Sequelize = require ("sequelize");
const sequelize = require("../config/sequelize");

const User = db.define("User",
{
  id:{
    type:Sequelize.DataTypes.INTEGER.UNSIGNED,
    autoIncrement:true,
    primaryKey: true,
  },
  firstName:{
    type:Sequelize.DataTypes.STRING (50),
    allowNull:false,
  },
  lastName:{
    type:Sequelize.DataTypes.STRING (50),
    allowNull:false,
  },
  cpf:{
    type:Sequelize.DataTypes.STRING (15),
    allowNull:false,
  },
  email:{
    type:Sequelize.DataTypes.STRING (30),
    allowNull:false,
  },
  telephone:{
    type:Sequelize.DataTypes.STRING (15),
    allowNull:false,
  },
  birthDate:{
    type:Sequelize.DataTypes.DATEONLY,
    
  },
  genre:{
    type:Sequelize.DataTypes.STRING (15),
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
 

},
{
  timestamps:false,
  freezeTableName: true
})

module.exports=User;
