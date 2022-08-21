const db = require ("../config/sequelize");
const Sequelize = require ("sequelize");
const sequelize = require("../config/sequelize");

const Product = db.define("Products",
  {
    id:{
      type:Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement:true,
      primaryKey: true,
    },
    genre:{
      type:Sequelize.DataTypes.STRING (20),
      allowNull:false,
    },
    mark:{
      type:Sequelize.DataTypes.STRING (20),
      allowNull:false,
    },
    style:{
      type:Sequelize.DataTypes.STRING (20),
      allowNull:false,
    },
    number:{
      type:Sequelize.DataTypes.TINYINT,
      allowNull:false,
    },
    costValue:{
      type:Sequelize.DataTypes.DOUBLE,
      allowNull:false,
    },
    saleValue:{
      type:Sequelize.DataTypes.DOUBLE,
      allowNull:false,
    },
    quantity:{
      type:Sequelize.DataTypes.INTEGER,
      allowNull:false,
    },
    description:{
      type:Sequelize.DataTypes.STRING(200),
      allowNull:false,
    },
    img:{
      type:Sequelize.DataTypes.STRING(50),
      allowNull:false,
    },
   
  },
  {
    timestamps:false,
    freezeTableName: true
  });
  
  module.exports=Product;

