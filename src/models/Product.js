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
    specialValue:{
      type:Sequelize.DataTypes.DOUBLE,
      allowNull:false,
    },
    quantity:{
      type:Sequelize.DataTypes.INTEGER,
      allowNull:false,
    },
    productModel:{
      type:Sequelize.DataTypes.STRING(100),
      allowNull:false,
    },
    description:{
      type:Sequelize.DataTypes.TEXT("long"),
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

