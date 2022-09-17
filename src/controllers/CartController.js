const Product = require("../models/Product");
const { Op, col } = require("sequelize");
const files = require("../helpers/files");
const upload = require("../config/upload");

const confirmation = {
    index: (req, res) => {
        const user = req.session.name
        return res.render("ProductPage", { title: "Pagina de produtos", user })
    },

    show: async (req, res) => {

        const id = req.params.id;

        if (req.cookies.idProd) {
            var ids = req.cookies.idProd
            var arrayIds = [...ids, id]
            res.cookie("idProd", arrayIds);
            var productSelected = await Product.findAll({
                where: { id: { [Op.in]: arrayIds } }
            });

        } else {
            res.cookie("idProd", [id]);
            var productSelected = await Product.findOne({
                where: { id: id }
            });
        }
        if(productSelected.length > 0){
            productSelected.map(productSelected => 
            productSelected.img = files.base64Encode(__dirname + "/../../uploads/" + productSelected.img),)

        }else{
            const imgProduct = {...productSelected,
                img:files.base64Encode(upload.path + productSelected.img)
            }
    
            productSelected.img=imgProduct.img
        }
        const user = req.session.name
        return res.render("cartuser", { title: "Meu Carrinho", productSelected, user })

    },

}

module.exports = confirmation;