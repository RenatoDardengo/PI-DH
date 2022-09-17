const fs = require("fs");
const path = require("path");
const sequelize = require("../config/sequelize");
const db = require("../config/sequelize")
const Product = require("../models/Product");
const { Op, col} = require("sequelize");
const files = require("../helpers/files");
const upload = require("../config/upload")
const adminController = {
  index: (req, res) => {

    return res.render("adminHome", { title: "Painel Administrador", user: req.session.name, userPermission: req.session.permission })

  },
  showAll: async (req, res) => {
    var products = await Product.findAll()


    return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products, user: req.session.name, userPermission: req.session.permission })
  },
  show: async (req, res) => {
    const{ search, column } = req.body;

    if(search, !column){
      var products = await Product.findAll()


    return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products,
     user: req.session.name, userPermission: req.session.permission ,error: { message: "Ambos os campos de pesquisa são obrigatórios!"}})

    }

    try {
      switch (column){
         case "mark":
          var products = await Product.findAll({
            where: {
              mark:{
                [Op.like]:`%${search}%`
              }
      
            }
    
          });
          break;
          case "genre":
            var products = await Product.findAll({
              where: {
                genre:{
                  [Op.like]:`%${search}%`
                }
        
              }
      
            });
            break;
            case "style":
            var products = await Product.findAll({
              where: {
                style:{
                  [Op.like]:`%${search}%`
                }
        
              }
      
            });
            break;
      }

  
      return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products,
       user: req.session.name, userPermission: req.session.permission })
      
    } catch (error) {
      var products = await Product.findAll()
      return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products,
     user: req.session.name, userPermission: req.session.permission ,error: { message: `Ocorreu um erro na sua pesquisa: ${error}`}})

      
    }
    
    
  },

  create: (req, res) => {

    return res.render("adminProductCreate", { title: "Cadastrar Produto", user: req.session.name, userPermission: req.session.permission, genre: null });
  },


  store: async (req, res) => {

    const { genre, mark, style, number, costValue, saleValue, quantity, description, productModel, specialValue } = req.body;
    let filename = "shoes-defaut.png";


    if (req.file) {
      filename = req.file.filename
    }


    if (!genre || !mark || !style || !number || !costValue || !saleValue || !quantity || !description || !productModel || !specialValue) {


      return res.render("adminProductCreate", {
        title: "Cadastrar Produto", user: req.session.name, genre, userPermission: req.session.permission,
        error: { message: "Atenção!Todos os campos devem ser preenchidos!" }
      })
    }

    try {
      const result = await sequelize.transaction(async (t) => {
        const product = await Product.create({
          genre: genre,
          mark: mark,
          style: style,
          number: parseInt(number),
          costValue: parseFloat(costValue),
          saleValue: parseFloat(saleValue),
          specialValue: parseFloat(specialValue),
          quantity: parseInt(quantity),
          description: description,
          productModel: productModel,
          img: filename
        })
      })
      var products = await Product.findAll()
      
      return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products, user: req.session.name,
      userPermission: req.session.permission, success: { message: "Produto cadastrado com sucesso!"}})

      

    } catch (error) {
      return res.render("adminProductCreate", {
        title: "Cadastrar Produto", user: req.session.name, genre, userPermission: req.session.permission,
        error: { message: `Erro ao cadastrar o produto: ${error}` }
      })
    }


    


  },

  edit: async (req, res) => {
    const { id } = req.params;

    var productResult = await Product.findOne({
      where: {
        id: id
      }
    });

    if (!productResult) {
      return res.render("error", {
        title: "Erro de Servidor",
        message: "Nenhum usuário encontrado"
      })

    }

    const pp = {
      ...productResult,
      img:files.base64Encode(
        upload.path + productResult.img
      )
    } 

    productResult.img = pp.img;

    return res.render("adminProductEdit", { title: "Editar Produto", user: req.session.name, product: productResult, userPermission: req.session.permission })
  },

  update: async (req, res) => {
    const { genre, mark, style, number, costValue, saleValue, quantity, description, productModel, specialValue } = req.body;
    const { id } = req.params;


    let filename = "shoes-defaut.png";


    if (req.file) {
      filename = req.file.filename
    }

    try {
      if (!genre || !mark || !style || !number || !costValue || !saleValue || !quantity || !description || !productModel || !specialValue) {
        throw Error("Todos os campos devem ser preenchidos!");


      }
      const result = await sequelize.transaction(async (t) => {
        const product = await Product.update({
          genre: genre,
          mark: mark,
          style: style,
          number: parseInt(number),
          costValue: parseFloat(costValue),
          saleValue: parseFloat(saleValue),
          specialValue: parseFloat(specialValue),
          quantity: parseInt(quantity),
          description: description,
          productModel: productModel,
          img: filename

        },
          {
            where: { id: id }
          })
      })
      var products = await Product.findAll()
     


      return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products, user: req.session.name,
      userPermission: req.session.permission, success: { message: "Produto atualizado com sucesso!"}})
     

      

    } catch (error) {
      const productResult = await Product.findOne({
        where: {
          id: id
        }
      });
      return res.render("adminProductEdit", {
        title: "Editar Produto", user: req.session.name, userPermission: req.session.permission, product: productResult,
        error: { message: `Não foi possível alterar o produto: ${error}` }
      })

    }

  },
  delete: async (req, res) => {
    const { id } = req.params;

    const productResult = await Product.findOne({
      where: {
        id: id
      }
    });

    if (!productResult) {
      return res.render("error", {
        title: "Erro de Servidor",
        message: "Nenhum usuário encontrado"
      })

    }

    return res.render("adminProductDelete", { title: "Deletar Produto", user: req.session.name, product: productResult, userPermission: req.session.permission })

  },

  destroy: async (req, res) => {
    const { id } = req.params;


    try {
      const result = await sequelize.transaction(async (t) => {
        const product = await Product.destroy({
          where: { id }
        })

      });
      var products = await Product.findAll()
      if(!products){
        return res.render("adminProductShow", { title: "Cadastro de Produtos", products: null, user: req.session.name,
      userPermission: req.session.permission, success: { message: "Produto excluído com sucesso!"}})
      }else{
      return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products, user: req.session.name,
      userPermission: req.session.permission, success: { message: "Produto excluído com sucesso!"}})

      }
     


    } catch (error) {
      return res.render("adminProductShow", {
        title: "Cadastro de Produtos", products: products, user: req.session.name, userPermission: req.session.permission,
        error: { message: `Não foi possível deletar o produto: ${error}` }
      })

    }




  }
}

module.exports = adminController;