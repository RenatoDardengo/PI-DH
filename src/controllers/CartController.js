const confirmation={
    index: (req, res)=>{
        return res.render ("cartuser", {title:"Meu Carrinho"})
    },

    // show:(req,res)=>{
    //     return res.render ("confirmacao", {title: "Pagina de Confirmação"})
    // },

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