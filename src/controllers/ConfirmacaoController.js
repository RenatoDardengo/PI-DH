const confirmacao={
    index: (req, res)=>{
        return res.render ("confirmacao", {title:"Pagina de Confirmação"})
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

module.exports = confirmacao;