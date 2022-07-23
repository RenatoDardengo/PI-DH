const adminController={
    index: (req, res)=>{
        return res.render ("adminHome", {title:"Painel Administrador"})
    },

    show:(req,res)=>{
        return res.render ("adminProdutoListar", {title: "Cadastro de Produtos"})
    },

    create:(req, res) =>{
        return res.render("adminProdutoCadastrar", {title: "Cadastrar Produto"});
    },

    edit:(req,res)=>{
        return res.render ("adminProdutoEditar", {title:"Editar Produto"})
    },
    delete:(req, res)=>{
        return res.render ("admProdutoDeletar", {title: "Deletar Produto"})
    }

}

module.exports = adminController;