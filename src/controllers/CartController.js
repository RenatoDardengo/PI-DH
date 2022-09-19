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

        const {id}= req.params;
       

        if (req.cookies.idProd) {
            var ids = req.cookies.idProd
            ids.push ({'id':parseInt (id),'qtde':1})
            console.log(ids)
            res.cookie("idProd", ids)
            var onlyId=[]
            var only= ids.map(Element=>{
                Element.id
                onlyId.push(Element.id)

             })
           
             console.log(only)

            var productSelected = await Product.findAll({
                where: { id: { [Op.in]: onlyId } }
            });

        } else {
            res.cookie("idProd", [{'id':parseInt(id),'qtde':1}]);
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