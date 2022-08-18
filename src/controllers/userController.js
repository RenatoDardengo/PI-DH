const fs = require('fs')
const path = require("path");
const products = require('../models/Product');

//const productsJson = fs.readFileSync(
    // Caminho do arquivo
   // path.join(__dirname, "..", "data", "products.json"),
    // Formato de leitura
    //"utf-8"
  //);

//const products = JSON.parse(productsJson);

  


const userController = {
    home: async (req, res) => {
        //var productsPartial = products.slice(products.length - 8, products.length);
        //return res.render("home", {title: "Bem Vindo", message: "Bem vindo ao Home", products:productsPartial});
        try {
            const product = products.findAll();
            console.log(product)
            return res.render("home", {title: "Bem Vindo", message: "Bem vindo ao Home", products:product});
            
        } catch (error) {
             return res.send('Pagina não encontrada!');
        }

    },
    produts:(req,res) =>{
        return res.render("products", {title: "Lista de Produtos", message:"Produtos Disponiveis", products: products})


    },
    product:(req,res) =>{
        const {id} = req.params;
        const produto = products.find((prod) => prod.id === parseInt(id));
        if(!produto)
        {
            res.render({Title:"Error", Message: "Produto não encontrado"});
        }
        res.render("productPage", {title: 'Bem Vindo a Pagina do Produto', produto});

    }







}

module.exports = userController;