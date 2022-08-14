// const fs = require('fs')
// const path = require("path");
// const productsJson = fs.readFileSync(
//     // Caminho do arquivo
//     path.join(__dirname, "..", "data", "products.json"),
//     // Formato de leitura
//     "utf-8"
//   );

//   const products = JSON.parse(productsJson);

  


const userController = {
    home:(req, res) => {
        var productsPartial = products.slice(products.length - 8, products.length);
        
        return res.render("home", {title: "Bem Vindo", message: "Bem vindo ao Home", products:productsPartial});


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