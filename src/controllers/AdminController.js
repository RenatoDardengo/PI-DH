const fs = require("fs");
const path = require("path");
const products = require("../data/products.json");
const adminController = {
  index: (req, res) => {

    return res.render("adminHome", { title: "Painel Administrador", user: req.session.name, userPermission: req.session.permission })

  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.clearCookie("permission");
    res.redirect("/admin");
  },

  show: (req, res) => {
    


    return res.render("adminProductShow", { title: "Cadastro de Produtos", products: products, user: req.session.name })
  },

  create: (req, res) => {
    console.log (req.session.name)
    return res.render("adminProductCreate", { title: "Cadastrar Produto", user: req.session.name });
  },


  store: (req, res) => {

    const { genre, mark, style, number, costValue, saleValue, quantity, description } = req.body;
   

      if (!genre || !mark || !style || !number || !costValue || !saleValue || !quantity || !description) {
        

          return res.render("adminProductCreate", {
          title: "Cadastrar Produto", user: req.session.name,
          error: {message: "Atenção!Todos os campos devem ser preenchidos!"}})
      }

      const ids = products.map(product => product.id)
      const lastId = ids.length - 1
      
      const newProduct ={
        id:ids[lastId] + 1,
        genre,
        mark,
        style,
        number,
        costValue,
        saleValue,
        quantity,
        description

      }
      products.push(newProduct)

      fs.writeFileSync(
        // Caminho e nome do arquivo que será criado/atualizado
        path.join(__dirname,"..", "data", "products.json"),
        // Conteúdo que será salvo no arquivo
        JSON.stringify(products)
      );
      console.log(req.session.name)
      res.redirect("/administrator/product")

      

 },

    edit: (req, res) => {
      const { id } = req.params;
    const productResult = products.find((product) => product.id === parseInt(id));
    if (!productResult) {
      return res.render("error", {
        title: "Erro de Servidor",
        message: "Nenhum usuário encontrado"
      })

    }
    return res.render("adminProductEdit", { title: "Editar Produto", product: productResult })
  },
  delete: (req, res) => {
    const { id } = req.params;
    const productResult = products.find((product) => product.id === parseInt(id));
    if (!productResult) {
      return res.render("error", {
        title: "Erro de Servidor",
        message: "Nenhum produto encontrado"
      })

    }

    return res.render("adminProductDelete", { title: "Deletar Produto" ,product: productResult})
  },

  destroy:(req, res)=>{
    const{id}=req.params;
    const result = products.findIndex((product)=> product.id ===parseInt(id));

    if(result===-1) {
      // return res.render("error", {
      //   title: "Ops!",
      //   message: "Nenhum usuário encontrado",})
    }
    console.log(products[result].id)
   
    const upload = {
      path: __dirname + "/../data/"
    }

    fs.unlinkSync(upload.path+ products[result].id);
    products.splice(result, 1);
   
  }
}

module.exports = adminController;