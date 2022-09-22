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
        var newProduct= await Product.findOne({
            where: { id: id }
        });
        
        if (req.cookies.idProd) {
            var cartProducts = req.cookies.idProd
            const found = cartProducts.find(e => e.id==id);
            if(found){
                cartProducts.forEach(element => {
                    if(element.id==id){
                        element.qtde= parseInt(element.qtde + 1)
                        element.value = parseFloat (newProduct.saleValue)*parseInt(element.qtde)
                    }
                });
                
            }else{
                cartProducts.push ({'id':parseInt (id),'qtde':1, 'value':parseFloat (newProduct.saleValue).toFixed(2)})

            }
            
            res.cookie("idProd", cartProducts)
            var onlyId = cartProducts.map((e)=>e.id)
            var productSelected = await Product.findAll({
                where: { id: { [Op.in]: onlyId } }
            });

        } else {
            res.cookie("idProd", [{'id':parseInt(id),'qtde':1,'value':parseFloat (newProduct.saleValue).toFixed(2)}]);
            var productSelected = await Product.findOne({
                where: { id: id }
            });
        }

        if(productSelected.length > 0){
            productSelected.map(productSelected => productSelected.img = files.base64Encode(__dirname + "/../../uploads/" + productSelected.img));
            productSelected.map(productSelected => productSelected.saleValue = parseFloat(productSelected.saleValue).toFixed(2));

        }else{
            const imgProduct = {...productSelected, img:files.base64Encode(upload.path + productSelected.img)}
    
            productSelected.img=imgProduct.img;
            productSelected.saleValue = parseFloat(productSelected.saleValue).toFixed(2)
        }
cartProducts.sort((x,y)=> x.id -y.id)
        for (let i = 0; i < productSelected.length; i++) {
            productSelected[i].Qtde= cartProducts[i].qtde
            productSelected[i].valueTotal= parseFloat(cartProducts[i].value).toFixed(2)
            
            }
      
        
        const user = req.session.name
        return res.render("cartuser", { title: "Meu Carrinho", productSelected, user })

    },

}

module.exports = confirmation;