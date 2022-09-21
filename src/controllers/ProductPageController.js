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
};

module.exports = productPageController;