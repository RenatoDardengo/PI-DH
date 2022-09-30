const fs = require('fs')
const path = require("path");
const sequelize = require("../config/sequelize");
const db = require("../config/sequelize");
const Admin = require('../models/Admin');
const Products = require('../models/Product');
const files = require("../helpers/files");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;



const userController = {
    index: async (req, res) => {
        //var productsPartial = products.slice(products.length - 8, products.length);
        //return res.render("home", {title: "Bem Vindo", message: "Bem vindo ao Home", products:productsPartial});
        try {
            const products = await Products.findAll();
            products.map(product => product.img = files.base64Encode(__dirname + "/../../uploads/" + product.img));
            products.map(products => products.saleValue = parseFloat(products.saleValue).toFixed(2));
          
            const productMark = await Products.findAll({
            where: { mark: "adidas" }});
            productMark.map(productMark => productMark.img = files.base64Encode(__dirname + "/../../uploads/" + productMark.img));
            productMark.map(productMark => productMark.saleValue = parseFloat(productMark.saleValue).toFixed(2));
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
            productsAll.map(productsAll => productsAll.img = files.base64Encode(__dirname + "/../../uploads/" + productsAll.img))
            productsAll.map(productsAll => productsAll.saleValue = parseFloat(productsAll.saleValue).toFixed(2));
           
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
        const product=[]
        try {
            const {buscar} = req.query;
            
             products = await Products.findAll({
                where: { mark:{[Op.like]:`%${buscar}%` } }

            })
            products=Array.isArray(products)?products:[products]

            if(products.length>0){
                console.log(products)
            return res.render("search", {title: "Bem Vindo", message: "Bem vindo ao Home", products});
                
            }else{
                throw error

            }
            
           
          
            
        } catch (error) {
            return res.render("search", {title: "Bem Vindo", error:{message: "Ops! Não encontramos nenhum produto :("}, products});
            
        }
    }

};

module.exports = userController;