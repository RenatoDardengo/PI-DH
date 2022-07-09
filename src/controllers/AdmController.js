const admController={
    index: (req, res)=>{
        return res.render ("administrador", {title:"Painel Administrador"})
    },

    show:(req,res)=>{
        return res.render ("adm-listarProdutos", {title: "Cadastro de Produtos"})
    },

    create:(req, res) =>{
        return res.render("adm-cadastrarProduto", {title: "Cadastrar Produto"});
    },

    edit:(req,res)=>{
        return res.render ("adm-editarProduto", {title:"Editar Produto"})
    },
    delete:(req, res)=>{
        return res.render ("adm-deletarProduto", {title: "Deletar Produto"})
    }

}

module.exports = admController;