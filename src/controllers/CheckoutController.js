const checkoutController = {
  index: (req, res)=>{
    return res.render ("confirmacao", {title:"Confirmação Pedido"})
}
}

module.exports = checkoutController;