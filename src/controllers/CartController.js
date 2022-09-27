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

        
        try {
            
        if (newProduct.length<=0){
        throw error
        }
            //pego os cookies do navegador
        var cartProducts=req.cookies.idProd
        //se cookie tiver algum item
       if (cartProducts) {
               //faz um busca para saber se o novo produto já está no carrinho
               const found = cartProducts.find(e => e.id==id);
                       //se estiver.. pega a quant q está no cookie a aumenta mais um e recalcula o valor no carrinho
                       if(found){
                           cartProducts.forEach(element => {
                               if(element.id==id){
                                   element.qtde= parseInt(element.qtde + 1)
                                   element.value = parseFloat (newProduct.saleValue)*parseInt(element.qtde)
                               }
                           });
                       //se não estiver no carrinho... insere o produto no carrinho   
                       }else{
                           cartProducts.push ({'id':parseInt (id),'qtde':1, 'value':parseFloat (newProduct.saleValue).toFixed(2)})

                       }
               
               //atualiza os cookies 
               res.cookie("idProd", cartProducts)
               //pega somente os ids pra a busca no banco
               var onlyId = cartProducts.map((e)=>e.id)
               //Variavel irá receber todos os produtos do banco
               var selectedProducts = await Product.findAll({
                   where: { id: { [Op.in]: onlyId } }
               });

       } else {
           //se o cookie estiver vazio... atribuo o produto (newProduct)
           cartProducts=[{'id':parseInt(id),'qtde':1,'value':parseFloat (newProduct.saleValue).toFixed(2)}]
           res.cookie("idProd", cartProducts);
           var selectedProducts = newProduct
       }
       
       //verificando se a variavel é um array
       selectedProducts=Array.isArray(selectedProducts)?selectedProducts:[selectedProducts]
       //Tratando as imagem e os valores
       selectedProducts.map(selectedProducts => selectedProducts.img = files.base64Encode(__dirname + "/../../uploads/" + selectedProducts.img));
       selectedProducts.map(selectedProducts => selectedProducts.saleValue = parseFloat(selectedProducts.saleValue).toFixed(2));

       //ajustando a quantidade e o valor total do produto de acordo com o cookie
       for (let i = 0; i < selectedProducts.length; i++) {
           const idcookie = (cartProducts || []).find((produto)=>{return produto.id==selectedProducts[i].id })
               if(idcookie){
                   selectedProducts[i].Qtde= idcookie.qtde
                   selectedProducts[i].valueTotal= parseFloat(idcookie.value).toFixed(2)
               }
       }
             
       const user = req.session.name
       return res.render("cartuser", { title: "Meu Carrinho", selectedProducts, user })

            
        } catch (error) {
            res.render("error", {title:"Erro - 404 HTML!", message:"Ocorreu um erro ao adicionar o produto no seu carrinho :("})
            
        }
        

    },

}

module.exports = confirmation;