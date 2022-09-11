// const sequelize = require("../config/sequelize");
// const db = require("../config/sequelize")
const Product = require("../models/Product");
// const { Op, col} = require("sequelize");
const files = require("../helpers/files");
const upload = require("../config/upload")

const confirmation={
    index: (req, res)=>{
        const user= req.session.name
        return res.render ("cartuser", {title:"Meu Carrinho", user})
    },

    show: async(req,res)=>{
        const {id}= req.params;
        var productSelected = await Product.findOne({
            where:{ id:id}
        });

        if (!productSelected) {
            return res.render("error", {
              title: "Erro de Servidor",
              message: "Nenhum usuário encontrado"
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


        return res.render ("cartuser", {title:"Meu Carrinho", productSelected, user})
    },

    // create:(req, res) =>{
    //     return res.render("confirmacao", {title: "Pagina de Confirmação"});
    // },

    // edit:(req,res)=>{
    //     return res.render ("confirmacao", {title:"Pagina de Confirmação"})
    // },
    // delete:(req, res)=>{
    //     return res.render ("confirmacao", {title: "Pagina de Confirmação"})
    // }

}

module.exports = confirmation;