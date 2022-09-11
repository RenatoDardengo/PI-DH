const fs = require('fs')
const path = require("path");
const sequelize = require("../config/sequelize");
const db = require("../config/sequelize");
const Admin = require('../models/Admin');
const Products = require('../models/Product');
const files = require("../helpers/files");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


//const productsJson = fs.readFileSync(
    // Caminho do arquivo
   // path.join(__dirname, "..", "data", "products.json"),
    // Formato de leitura
    //"utf-8"
  //);

//const products = JSON.parse(productsJson);

  


const userController = {
    index: async (req, res) => {
        //var productsPartial = products.slice(products.length - 8, products.length);
        //return res.render("home", {title: "Bem Vindo", message: "Bem vindo ao Home", products:productsPartial});
        try {
            const products = await Products.findAll();
            products.map(product => product.img = files.base64Encode(__dirname + "/../../uploads/" + product.img),
            )
          
            const productMark = await Products.findAll({
            where: { mark: "adidas" }});
            productMark.map(productMark => productMark.img = files.base64Encode(__dirname + "/../../uploads/" + productMark.img),)
            const productsPartial = productMark.slice(productMark.length - 8, productMark.length);
            const user = req.session.name
            
             
            res.render("home", {title: "Bem Vindo", message: "Bem vindo ao Home", products,productMark,productsPartial,user});

           
            
        } catch (error) {
            console.log(error);
            res.render("error", {title:"OPS!", message:"ALGO DEU ERRADO!"})
        }

    },
 
    produts:async(req,res) =>{
        try {
            const productsAll = await Products.findAll();
            productsAll.map(productsAll => productsAll.img = files.base64Encode(__dirname + "/../../uploads/" + productsAll.img)),
            console.log(productsAll) 
             res.render("products", {title: "Lista de Produtos", message:"Produtos Disponiveis", productsAll})
    
            
        } catch (error) {
            return res.render("products", {title: "Lista de Produtos",error:{
                message:"Erro ao encontrar produtos"
            }, })


            
        }
      

    },

    show: async (req,res) => {
        
        try {
            const {id} = req.params;
            const product = await Products.findOne({where:{id:id}});
            res.render("productPage", {title:"Pagina Produto", message:"Bem Vindo", product})
            console.log(product)
        } catch (error) {
            res.render("error")
        }


    },
    procurar: async (req,res) => {
        try {
            const {buscar} = req.query;
            
            const products = await Products.findAll({
                where: { mark:{[Op.like]:`%${buscar}%` } }
            })
            console.log(products)
            return res.render("search", {title: "Bem Vindo", message: "Bem vindo ao Home", products});
           
          
            
        } catch (error) {
            return res.render("search", {title: "Bem Vindo", error:{message: "Bem vindo ao Home"}});
            
        }
    }

};

module.exports = userController;