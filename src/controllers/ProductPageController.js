// var products = require("../data/productsPage.json");
// products = products.data;
const Product = require("../models/Product");
const files = require("../helpers/files");
const upload = require("../config/upload");

const productPageController={
    show: async(req,res)=>{
        const {id}= req.params;
        var productSelected = await Product.findOne({
            where:{ id:id}
        });

        if (!productSelected) {
            return res.render("error", {
              title: "Erro de Servidor",
              message: "Nenhum produto encontrado!"
            })
      
        }
        const imgProduct = {
            ...productSelected,
            img:files.base64Encode(
              upload.path + productSelected.img
            )
        }

        productSelected.img=imgProduct.img
       
        const user= req.session.name


        return res.render ("productPage", {title:"PÁGINA DO PRODUTO", productSelected, user})
    },
    // index: (req, res)=>{
    //     return res.render ("productPage", {title:"Pagina de Produto"})
    // },

    // show:(req,res)=>{
    //     const {id} = req.params;
    //     const result = products.find((products) => 
    //         // return user.id === id;
    //         // return user.id.toString() === id;
    //         products.id === parseInt(id)
    //     );
    //     if(!result){
    //         return res.status(400).json({message: "Nenhum produto encontrado"});
    //     }
    //     return res
    //     .status(200)
    //     .render("productPage", {title:"Pagina do Produto", produto: result});
    //     // return res.render ("productPage", {title: "Pagina de Produto id"})
    // },

    // create:(req, res) =>{
    //     return res.render("paginaDeProduto", {title: "Pagina de Produto"});
    // },

    // edit:(req,res)=>{
    //     return res.render ("paginaDeProduto", {title:"Pagina de Produto"})
    // },
    // delete:(req, res)=>{
    //     return res.render ("paginaDeProduto", {title: "Pagina de Produto"})
    // }

}

module.exports = productPageController;