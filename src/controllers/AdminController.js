const fs = require("fs");
const path = require("path");
const sequelize = require("../config/sequelize");
const db = require("../config/sequelize")
const Product = require("../models/Product");
const { Op } = require("sequelize");
const adminController = {
  index: (req, res) => {

    return res.render("adminHome", { title: "Painel Administrador", user: req.session.name, userPermission: req.session.permission })

  },
  showAll: async (req, res) => {
    var products = await Product.findAll()


    return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products, user: req.session.name,userPermission: req.session.permission })
  },
  show: async (req, res) => {
    const {search, collun} = req.body;
    var products = await Product.findAll()


    return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products, user: req.session.name,userPermission: req.session.permission })
  },

  create:  (req, res) => {
    
    return res.render("adminProductCreate", { title: "Cadastrar Produto", user: req.session.name,userPermission: req.session.permission, genre:null});
  },


  store:async (req, res) => {
    
    const { genre, mark, style, number, costValue, saleValue, quantity, description } = req.body;
    let filename = "shoes-defaut.png";
    
    
    if(req.file){
      filename=req.file.filename
    }
    

      if (!genre || !mark || !style || !number || !costValue || !saleValue || !quantity || !description) {
        

          return res.render("adminProductCreate", {
          title: "Cadastrar Produto", user: req.session.name, genre,
          error: {message: "Atenção!Todos os campos devem ser preenchidos!"}})
      }

      try {
        const result = await sequelize.transaction(async(t)=>{
          const product = await Product.create({
            genre:genre,
            mark:mark,
            style:style,
            number:parseInt (number),
            costValue: parseFloat(costValue),
            saleValue: parseFloat (saleValue),
            quantity:parseInt (quantity),
            description:description,
            img:filename
          })
        })
        
      } catch (error) {
        return res.render("adminProductCreate", {
          title: "Cadastrar Produto", user: req.session.name, genre,
          error: {message: `Erro ao cadastrar o produto: ${error}`}})
      }

      
      res.redirect("/administrator/product")
     

 },

    edit: async (req, res) => {
    const { id } = req.params;

    const productResult = await Product.findOne({
      where:{
        id:id
      }
    });

    if (!productResult) {
      return res.render("error", {
        title: "Erro de Servidor",
        message: "Nenhum usuário encontrado"
      })

    }
    
    return res.render("adminProductEdit", { title: "Editar Produto",user: req.session.name, product: productResult, userPermission: req.session.permission})
  },

  update: async (req, res)=>{
    const { genre, mark, style, number, costValue, saleValue, quantity, description } = req.body;
    const { id } = req.params;
    
    
    let filename = "shoes-defaut.png";
    
    
    if(req.file){
      filename=req.file.filename
    }
    
    try {
      if (!genre || !mark || !style || !number || !costValue || !saleValue || !quantity || !description) {
        throw Error("Todos os campos devem ser preenchidos!");

        
    }
      const result = await sequelize.transaction(async(t)=>{
        const product = await Product.update({
            genre:genre,
            mark:mark,
            style:style,
            number:parseInt (number),
            costValue: parseFloat(costValue),
            saleValue: parseFloat (saleValue),
            quantity:parseInt (quantity),
            description:description,
            img:filename

        }, 
        {
          where:{id:id}
        })
      })
      res.redirect("/administrator/product")
      
    } catch (error) {
      const productResult = await Product.findOne({
        where:{
          id:id
        }
      });
      return res.render("adminProductEdit", {
        title: "Editar Produto", user: req.session.name, userPermission: req.session.permission, product:productResult,
        error: {message: `Não foi possível alterar o produto: ${error}`}})
      
    }

  },
  delete: async (req, res) => {
    const { id } = req.params;

    const productResult = await Product.findOne({
      where:{
        id:id
      }
    });

    if (!productResult) {
      return res.render("error", {
        title: "Erro de Servidor",
        message: "Nenhum usuário encontrado"
      })

    }
    
    return res.render("adminProductDelete", { title: "Deletar Produto",user: req.session.name, product: productResult, userPermission: req.session.permission})
    
  },

  destroy: async (req, res)=>{
    const{id}=req.params;
   

    try {
      const result = await sequelize.transaction(async(t)=>{
        const product = await Product.destroy({
          where:{id}
        })

      });
      res.redirect("/administrator/product")

      
    } catch (error) {
      return res.render("adminProductShow", {
        title: "Cadastro de Produtos", products: products, user: req.session.name,userPermission: req.session.permission,
        error: {message: `Não foi possível deletar o produto: ${error}`}})
      
    }
    

    
   
  }
}

module.exports = adminController;