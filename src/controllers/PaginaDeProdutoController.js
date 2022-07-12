const paginaDeProdutoController={
    index: (req, res)=>{
        return res.render ("paginaDeProduto", {title:"Pagina de Produto"})
    },

    // show:(req,res)=>{
    //     return res.render ("paginaDeProduto", {title: "Pagina de Produto"})
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

module.exports = paginaDeProdutoController;